import { useLanguage } from "../../i18n/LanguageContext";
import { portfolioItems } from "../../data/portfolio";
import "./Portfolio.scss";

function Portfolio() {
	const { translations } = useLanguage();
	const { portfolio } = translations;

	return (
		<section className="portfolio section" id="work">
			<div className="container">
				<header className="portfolio__header">
					<div>
						<p className="portfolio__eyebrow">{portfolio.eyebrow}</p>
						<h2 className="portfolio__title">{portfolio.title}</h2>
					</div>

					<p className="portfolio__description">{portfolio.description}</p>
				</header>

				<div className="portfolio__grid">
					{portfolioItems.map((item) => {
						const content = portfolio.items[item.translationKey];

						return (
							<article className="portfolio-card" key={item.id}>
								<div className="portfolio-card__media">
									<video
										className="portfolio-card__video"
										controls
										playsInline
										preload="metadata"
										poster={item.poster}>
										<source src={item.video} type="video/mp4" />
									</video>
								</div>

								<div className="portfolio-card__content">
									<div className="portfolio-card__meta">
										<span>{content.brand}</span>
										<span>{content.category}</span>
									</div>

									<h3 className="portfolio-card__title">{content.title}</h3>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
