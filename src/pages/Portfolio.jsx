import { useState } from "react";
import VideoModal from "../components/Portfolio/VideoModal";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import CTA from "../components/common/CTA/CTA";
import { portfolioItems } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import "./Portfolio.scss";

function PortfolioPage() {
	const [activeCategory, setActiveCategory] = useState("all");
	const [selectedItem, setSelectedItem] = useState(null);

	const { language, translations } = useLanguage();
	const { portfolioPage } = translations;

	const categories = [
		{
			id: "all",
			label: portfolioPage.filters.all,
		},
		{
			id: "product",
			label: portfolioPage.filters.product,
		},
		{
			id: "tutorial",
			label: portfolioPage.filters.tutorial,
		},
		{
			id: "lifestyle",
			label: portfolioPage.filters.lifestyle,
		},
	];

	const filteredItems =
		activeCategory === "all"
			? portfolioItems
			: portfolioItems.filter(
					(item) => item.category === activeCategory,
				);

	const selectedContent = selectedItem
		? selectedItem.content[language]
		: null;

	return (
		<div className="portfolio-page">
			<section className="portfolio-page__intro">
				<div className="container portfolio-page__intro-inner">
					<div className="portfolio-page__heading">
						<p className="portfolio-page__eyebrow">
							{portfolioPage.eyebrow}
						</p>

						<h1 className="portfolio-page__title">
							{portfolioPage.title}
						</h1>
					</div>

					<p className="portfolio-page__description">
						{portfolioPage.description}
					</p>
				</div>
			</section>

			<section
				className="portfolio-page__content"
				aria-label={portfolioPage.title}
			>
				<div className="container">
					<div className="portfolio-page__toolbar">
						<div
							className="portfolio-page__filters"
							aria-label="Portfolio categories"
						>
							{categories.map((category) => (
								<button
									className={`portfolio-page__filter ${
										activeCategory === category.id
											? "portfolio-page__filter--active"
											: ""
									}`}
									type="button"
									key={category.id}
									aria-pressed={
										activeCategory === category.id
									}
									onClick={() =>
										setActiveCategory(category.id)
									}
								>
									{category.label}
								</button>
							))}
						</div>

						<p className="portfolio-page__count">
							{filteredItems.length}
							<span aria-hidden="true"> / </span>
							{portfolioItems.length}
						</p>
					</div>

					{filteredItems.length > 0 ? (
						<div className="portfolio-page__grid">
							{filteredItems.map((item) => {
								const content =
									item.content[language];

								return (
									<PortfolioCard
										key={item.id}
										item={item}
										content={content}
										playLabel={
											portfolioPage.playVideo
										}
										onSelect={setSelectedItem}
										headingLevel="h2"
									/>
								);
							})}
						</div>
					) : (
						<p className="portfolio-page__empty">
							{portfolioPage.empty}
						</p>
					)}
				</div>
			</section>

			<CTA />

			{selectedItem && selectedContent && (
				<VideoModal
					item={selectedItem}
					content={selectedContent}
					onClose={() => setSelectedItem(null)}
				/>
			)}
		</div>
	);
}

export default PortfolioPage;