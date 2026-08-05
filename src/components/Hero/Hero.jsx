import { HashLink } from "react-router-hash-link";
import { useLanguage } from "../../i18n/LanguageContext";
import { brands } from "../../data/brands";
import "./Hero.scss";


function Hero() {
	const { translations } = useLanguage();
	const { hero } = translations;

	return (
		<section className="hero" aria-labelledby="hero-title">
			<div className="hero__overlay" aria-hidden="true" />

			<div className="container hero__inner">
				<div className="hero__content">
					<p className="hero__eyebrow">{hero.eyebrow}</p>

					<h1 className="hero__title" id="hero-title">
						<span>{hero.titleStart}</span>
						<em>{hero.titleEnd}</em>
					</h1>

					<p className="hero__description">{hero.description}</p>

					<div className="hero__actions">
						<HashLink
							className="hero__button hero__button--primary"
							smooth
							to="/#work">
							{hero.primaryButton}

							<span aria-hidden="true">→</span>
						</HashLink>

						<HashLink
							className="hero__button hero__button--secondary"
							to="/contact">
							{hero.secondaryButton}
						</HashLink>
					</div>

					<div className="hero__trusted">
						<p className="hero__trusted-label">Trusted by</p>

						<ul className="hero__trusted-list">
							{brands.map((brand) => (
								<li key={brand.name}>
									<a href={brand.url} target="_blank" rel="noopener noreferrer">
										{brand.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="hero__stats" aria-label="Creator statistics">
					<article className="hero__stat">
						<strong>12K+</strong>
						<span>Total reach</span>
					</article>

					<article className="hero__stat">
						<strong>8+</strong>
						<span>Brand collaborations</span>
					</article>

					<article className="hero__stat">
						<strong>DA / EN</strong>
						<span>Content languages</span>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Hero;
