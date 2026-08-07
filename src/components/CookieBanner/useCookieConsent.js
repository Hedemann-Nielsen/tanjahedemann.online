import { useEffect, useState } from "react";
import {
	DEFAULT_COOKIE_PREFERENCES,
	getStoredCookieConsent,
	saveCookieConsent,
} from "../../utils/cookieConsent";

function useCookieConsent() {
	const [isVisible, setIsVisible] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	const [preferences, setPreferences] = useState(
		DEFAULT_COOKIE_PREFERENCES,
	);

	useEffect(() => {
		const storedConsent = getStoredCookieConsent();

		if (!storedConsent) {
			setIsVisible(true);
		} else {
			setPreferences(storedConsent.preferences);
		}

		function openCookieSettings() {
			setShowSettings(true);
			setIsVisible(true);
		}

		window.addEventListener(
			"open-cookie-settings",
			openCookieSettings,
		);

		return () => {
			window.removeEventListener(
				"open-cookie-settings",
				openCookieSettings,
			);
		};
	}, []);

	function saveConsent(updatedPreferences) {
		const consent = saveCookieConsent(updatedPreferences);

		setPreferences(consent.preferences);
		setShowSettings(false);
		setIsVisible(false);

		window.dispatchEvent(
			new CustomEvent("cookie-consent-updated", {
				detail: consent,
			}),
		);
	}

	function acceptAll() {
		saveConsent({
			necessary: true,
			analytics: true,
			marketing: true,
		});
	}

	function rejectOptional() {
		saveConsent({
			necessary: true,
			analytics: false,
			marketing: false,
		});
	}

	function saveCurrentPreferences() {
		saveConsent(preferences);
	}

	function updatePreference(category) {
		setPreferences((current) => ({
			...current,
			[category]: !current[category],
		}));
	}

	function toggleSettings() {
		setShowSettings((current) => !current);
	}

	return {
		isVisible,
		showSettings,
		preferences,
		acceptAll,
		rejectOptional,
		saveCurrentPreferences,
		updatePreference,
		toggleSettings,
	};
}

export default useCookieConsent;