import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { portfolioItems } from "../../data/portfolio";
import VideoModal from "./VideoModal";
import "./Portfolio.scss";

function Portfolio() {
	const [selectedItem, setSelectedItem] = useState(null);

	const { language, translations } = useLanguage();
	const { portfolio } = translations;

	const featuredItems = portfolioItems
		.filter((item) => item.featured)
		.slice(0, 4);

	const selectedContent = selectedItem
		? selectedItem.content[language]
		: null;

	return (
		<section className="portfolio" id="work">
			<div className="container">
				<header className="portfolio__header">
					<div className="portfolio__heading">
						<p className="portfolio__eyebrow">
							{portfolio.eyebrow}
						</p>

						<h2 className="portfolio__title">
							{portfolio.title}
						</h2>
					</div>

					<Link className="portfolio__link" to="/portfolio">
						{portfolio.viewAll}
						<span aria-hidden="true">→</span>
					</Link>
				</header>

				<div className="portfolio__grid">
					{featuredItems.map((item) => {
						const content = item.content[language];

						return (
							<article
								className="portfolio-card"
								key={item.id}
							>
								<button
									className="portfolio-card__button"
									type="button"
									onClick={() => setSelectedItem(item)}
									aria-label={`${portfolio.playVideo}: ${content.title}`}
								>
									<div className="portfolio-card__media">
										<img
											className="portfolio-card__image"
											src={item.poster}
											alt=""
										/>

										<span
											className="portfolio-card__play"
											aria-hidden="true"
										>
											▶
										</span>
									</div>

									<div className="portfolio-card__content">
										<p className="portfolio-card__brand">
											{content.brand}
										</p>

										<h3 className="portfolio-card__title">
											{content.title}
										</h3>

										<p className="portfolio-card__category">
											{content.category}
										</p>
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