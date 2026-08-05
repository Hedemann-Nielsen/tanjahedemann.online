import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import {
	DEFAULT_COOKIE_PREFERENCES,
	getStoredCookieConsent,
	saveCookieConsent,
} from "../../utils/cookieConsent";
import "./CookieBanner.scss";


function CookieBanner({ onOpenCookiePolicy }) {
	const { translations } = useLanguage();
	const { cookieBanner } = translations;
	
	const [isVisible, setIsVisible] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	
	const [preferences, setPreferences] = useState(DEFAULT_COOKIE_PREFERENCES);

	useEffect(() => {
		function loadConsent() {
			const storedConsent = getStoredCookieConsent();

			if (!storedConsent) {
				setIsVisible(true);
				return;
			}

			setPreferences(storedConsent.preferences);
		}

		function openCookieSettings() {
			setShowSettings(true);
			setIsVisible(true);
		}

		loadConsent();

		window.addEventListener("open-cookie-settings", openCookieSettings);

		return () => {
			window.removeEventListener("open-cookie-settings", openCookieSettings);
		};
	}, []);

	function loadConsent() {
		const storedConsent = getStoredCookieConsent();

		if (!storedConsent) {
			setIsVisible(true);
			return;
		}

		setPreferences(storedConsent.preferences);
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

	if (!isVisible) {
		return null;
	}

	return (
		<aside
			className={`cookie-banner ${
				showSettings ? "cookie-banner--settings-open" : ""
			}`}
			aria-labelledby="cookie-banner-title">
			<div className="cookie-banner__inner">
				<div className="cookie-banner__top">
					<div className="cookie-banner__content">
						<p className="cookie-banner__eyebrow">{cookieBanner.eyebrow}</p>

						<h2 className="cookie-banner__title" id="cookie-banner-title">
							{cookieBanner.title}
						</h2>

						<p className="cookie-banner__description">
							{cookieBanner.description}
						</p>

						<div className="cookie-banner__links">
							<button
								className="cookie-banner__text-link"
								type="button"
								onClick={onOpenCookiePolicy}>
								{cookieBanner.policy}
							</button>

							<span className="cookie-banner__link-divider" aria-hidden="true">
								|
							</span>

							<button
								className="cookie-banner__text-link"
								type="button"
								onClick={() => setShowSettings((current) => !current)}>
								{showSettings
									? cookieBanner.hideSettings
									: cookieBanner.settings}
							</button>
						</div>
					</div>

					<div className="cookie-banner__actions">
						<button
							className="cookie-banner__button cookie-banner__button--primary"
							type="button"
							onClick={acceptAll}>
							{cookieBanner.acceptAll}
						</button>

						<button
							className="cookie-banner__button cookie-banner__button--secondary"
							type="button"
							onClick={rejectOptional}>
							{cookieBanner.rejectOptional}
						</button>
					</div>
				</div>

				{showSettings && (
					<div className="cookie-banner__settings">
						<div className="cookie-banner__category">
							<div>
								<h3>{cookieBanner.necessary.title}</h3>

								<p>{cookieBanner.necessary.description}</p>
							</div>

							<span className="cookie-banner__required">
								{cookieBanner.alwaysActive}
							</span>
						</div>

						<div className="cookie-banner__category">
							<div>
								<h3>{cookieBanner.analytics.title}</h3>

								<p>{cookieBanner.analytics.description}</p>
							</div>

							<label className="cookie-banner__toggle">
								<input
									type="checkbox"
									checked={preferences.analytics}
									onChange={() => updatePreference("analytics")}
								/>

								<span aria-hidden="true" />

								<span className="sr-only">{cookieBanner.analytics.title}</span>
							</label>
						</div>

						<div className="cookie-banner__category">
							<div>
								<h3>{cookieBanner.marketing.title}</h3>

								<p>{cookieBanner.marketing.description}</p>
							</div>

							<label className="cookie-banner__toggle">
								<input
									type="checkbox"
									checked={preferences.marketing}
									onChange={() => updatePreference("marketing")}
								/>

								<span aria-hidden="true" />

								<span className="sr-only">{cookieBanner.marketing.title}</span>
							</label>
						</div>

						<button
							className="cookie-banner__save"
							type="button"
							onClick={saveCurrentPreferences}>
							{cookieBanner.savePreferences}
							<span aria-hidden="true">→</span>
						</button>
					</div>
				)}
			</div>
		</aside>
	);
}

export default CookieBanner;
