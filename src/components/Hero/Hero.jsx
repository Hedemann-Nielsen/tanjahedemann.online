import { HashLink } from "react-router-hash-link";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Hero.scss";

const trustedBrands = [
	"KnitPro",
	"Muud",
	"Sudio",
	"A Knitter's World",
	"Strikkediem",
	"Trillegarn",
	"By_Myr",
	"Broomroad",
];

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
							smooth
							to="/#contact">
							{hero.secondaryButton}
						</HashLink>
					</div>

					<div className="hero__trusted">
						<p className="hero__trusted-label">Trusted by</p>

						<ul
							className="hero__trusted-list"
							aria-label="Selected brand collaborations">
							{trustedBrands.map((brand) => (
								<li key={brand}>{brand}</li>
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

				<p className="hero__signature" aria-hidden="true">
					Real people.
					<br />
					Real connection.
				</p>
			</div>
		</section>
	);
}

export default Hero;
