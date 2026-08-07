import { useLanguage } from "../../i18n/LanguageContext";
import CookieSettings from "./CookieSettings";
import useCookieConsent from "./useCookieConsent";
import "./CookieBanner.scss";

function CookieBanner({ onOpenCookiePolicy }) {
	const { translations } = useLanguage();
	const { cookieBanner } = translations;

	const {
		isVisible,
		showSettings,
		preferences,
		acceptAll,
		rejectOptional,
		saveCurrentPreferences,
		updatePreference,
		toggleSettings,
	} = useCookieConsent();

	if (!isVisible) {
		return null;
	}

	return (
		<aside
			className={`cookie-banner ${
				showSettings ? "cookie-banner--settings-open" : ""
			}`}
			aria-labelledby="cookie-banner-title"
		>
			<div className="cookie-banner__inner">
				<div className="cookie-banner__top">
					<div className="cookie-banner__content">
						<p className="cookie-banner__eyebrow">
							{cookieBanner.eyebrow}
						</p>

						<h2
							className="cookie-banner__title"
							id="cookie-banner-title"
						>
							{cookieBanner.title}
						</h2>

						<p className="cookie-banner__description">
							{cookieBanner.description}
						</p>

						<div className="cookie-banner__links">
							<button
								className="cookie-banner__text-link"
								type="button"
								onClick={onOpenCookiePolicy}
							>
								{cookieBanner.policy}
							</button>

							<span
								className="cookie-banner__link-divider"
								aria-hidden="true"
							>
								|
							</span>

							<button
								className="cookie-banner__text-link"
								type="button"
								onClick={toggleSettings}
							>
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
							onClick={acceptAll}
						>
							{cookieBanner.acceptAll}
						</button>

						<button
							className="cookie-banner__button cookie-banner__button--secondary"
							type="button"
							onClick={rejectOptional}
						>
							{cookieBanner.rejectOptional}
						</button>
					</div>
				</div>

				{showSettings && (
					<CookieSettings
						content={cookieBanner}
						preferences={preferences}
						onUpdatePreference={updatePreference}
						onSave={saveCurrentPreferences}
					/>
				)}
			</div>
		</aside>
	);
}

export default CookieBanner;