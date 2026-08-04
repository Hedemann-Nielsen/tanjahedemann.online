import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { portfolioItems } from "../../data/portfolio";
import VideoModal from "./VideoModal";
import "./Portfolio.scss";

function Portfolio() {
	const [selectedItem, setSelectedItem] = useState(null);
	const { translations } = useLanguage();
	const { portfolio } = translations;

	const selectedContent = selectedItem
		? portfolio.items[selectedItem.translationKey]
		: null;

	return (
		<section className="portfolio section" id="work">
			<div className="container">
				<header className="portfolio__header">
					<div>
						<p className="portfolio__eyebrow">{portfolio.eyebrow}</p>
						<h2 className="portfolio__title">{portfolio.title}</h2>
					</div>

					<div className="portfolio__header-right">
						<p className="portfolio__description">{portfolio.description}</p>

						<Link className="portfolio__link" to="/portfolio">
							{portfolio.viewAll}
							<span aria-hidden="true">→</span>
						</Link>
					</div>
				</header>

				<div className="portfolio__grid">
					{portfolioItems.map((item) => {
						const content = portfolio.items[item.translationKey];

						return (
							<article className="portfolio-card" key={item.id}>
								<button
									className="portfolio-card__button"
									type="button"
									onClick={() => setSelectedItem(item)}
									aria-label={`Play ${content.title}`}>
									<div className="portfolio-card__media">
										<img
											className="portfolio-card__image"
											src={item.poster}
											alt=""
										/>

										<span className="portfolio-card__play" aria-hidden="true">
											▶
										</span>
									</div>

									<div className="portfolio-card__content">
										<div className="portfolio-card__meta">
											<span>{content.brand}</span>
											<span>{content.category}</span>
										</div>

										<h3 className="portfolio-card__title">{content.title}</h3>
									</div>
								</button>
							</article>
						);
					})}
				</div>
			</div>

			{selectedItem && selectedContent && (
				<VideoModal
					item={selectedItem}
					content={selectedContent}
					onClose={() => setSelectedItem(null)}
				/>
			)}
		</section>
	);
}

export default Portfolio;
