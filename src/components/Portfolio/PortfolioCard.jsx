import "./PortfolioCard.scss"

function PortfolioCard({
	item,
	content,
	playLabel,
	onSelect,
	headingLevel = "h3",
}) {
	const TitleTag = headingLevel;

	return (
		<article className="portfolio-card">
			<button
				className="portfolio-card__button"
				type="button"
				onClick={() => onSelect(item)}
				aria-label={`${playLabel}: ${content.title}`}
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

					<TitleTag className="portfolio-card__title">
						{content.title}
					</TitleTag>

					<p className="portfolio-card__category">
						{content.category}
					</p>
				</div>
			</button>
		</article>
	);
}

export default PortfolioCard;