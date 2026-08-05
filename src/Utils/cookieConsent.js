export const COOKIE_CONSENT_STORAGE_KEY = "tanja-cookie-consent";
export const COOKIE_CONSENT_VERSION = 1;

export const DEFAULT_COOKIE_PREFERENCES = {
	necessary: true,
	analytics: false,
	marketing: false,
};

export function getStoredCookieConsent() {
	try {
		const storedConsent = localStorage.getItem(
			COOKIE_CONSENT_STORAGE_KEY,
		);

		if (!storedConsent) {
			return null;
		}

		const parsedConsent = JSON.parse(storedConsent);

		if (parsedConsent.version !== COOKIE_CONSENT_VERSION) {
			return null;
		}

		return {
			version: COOKIE_CONSENT_VERSION,
			updatedAt: parsedConsent.updatedAt ?? null,
			preferences: {
				necessary: true,
				analytics: Boolean(
					parsedConsent.preferences?.analytics,
				),
				marketing: Boolean(
					parsedConsent.preferences?.marketing,
				),
			},
		};
	} catch {
		localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
		return null;
	}
}

export function saveCookieConsent(preferences) {
	const consent = {
		version: COOKIE_CONSENT_VERSION,
		updatedAt: new Date().toISOString(),
		preferences: {
			necessary: true,
			analytics: Boolean(preferences.analytics),
			marketing: Boolean(preferences.marketing),
		},
	};

	localStorage.setItem(
		COOKIE_CONSENT_STORAGE_KEY,
		JSON.stringify(consent),
	);

	return consent;
}

export function clearCookieConsent() {
	localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
}