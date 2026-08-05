import { useLanguage } from "../../i18n/LanguageContext";
import "./Services.scss";

function Services() {
	const { translations } = useLanguage();
	const { services } = translations;

	return (
		<section className="services section" id="services">
			<div className="container">
				<header className="services__header">
					<div>
						<p className="services__eyebrow">
							{services.eyebrow}
						</p>

						<h2 className="services__title">
							{services.title}
						</h2>
					</div>

					<p className="services__description">
						{services.description}
					</p>
				</header>

				<div className="services__grid">
					{services.items.map((service, index) => (
						<article
							className="service-card"
							key={service.title}
						>
							<span className="service-card__number">
								{String(index + 1).padStart(2, "0")}
							</span>

							<h3 className="service-card__title">
								{service.title}
							</h3>

							<p className="service-card__description">
								{service.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;