function CookieSettings({
	content,
	preferences,
	onUpdatePreference,
	onSave,
}) {
	return (
		<div className="cookie-banner__settings">
			<div className="cookie-banner__category">
				<div>
					<h3>{content.necessary.title}</h3>
					<p>{content.necessary.description}</p>
				</div>

				<span className="cookie-banner__required">
					{content.alwaysActive}
				</span>
			</div>

			<div className="cookie-banner__category">
				<div>
					<h3>{content.analytics.title}</h3>
					<p>{content.analytics.description}</p>
				</div>

				<label className="cookie-banner__toggle">
					<input
						type="checkbox"
						checked={preferences.analytics}
						onChange={() =>
							onUpdatePreference("analytics")
						}
					/>
					<span aria-hidden="true" />
					<span className="sr-only">
						{content.analytics.title}
					</span>
				</label>
			</div>

			<div className="cookie-banner__category">
				<div>
					<h3>{content.marketing.title}</h3>
					<p>{content.marketing.description}</p>
				</div>

				<label className="cookie-banner__toggle">
					<input
						type="checkbox"
						checked={preferences.marketing}
						onChange={() =>
							onUpdatePreference("marketing")
						}
					/>
					<span aria-hidden="true" />
					<span className="sr-only">
						{content.marketing.title}
					</span>
				</label>
			</div>

			<button
				className="cookie-banner__save"
				type="button"
				onClick={onSave}
			>
				{content.savePreferences}
				<span aria-hidden="true">→</span>
			</button>
		</div>
	);
}

export default CookieSettings;