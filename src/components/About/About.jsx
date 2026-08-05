import { useLanguage } from "../../i18n/LanguageContext";
import "./About.scss";

function About() {
	const { translations } = useLanguage();
	const { about, stats } = translations;

	return (
		<section className="about" id="about">
			<div className="container">
				<div className="about__inner">
					<div className="about__media">
						<img className="about__image" src="/images/about.jpg" alt="" />
					</div>

					<div className="about__main">
						<p className="about__eyebrow">{about.eyebrow}</p>

						<h2 className="about__title">
							{about.title} 

							<span className="about__title2"> {about.title2}</span>
						</h2>

						<p className="about__description">{about.description}</p>
					</div>

					<ul className="about__highlights">
						{about.highlights.map((highlight) => (
							<li key={highlight}>{highlight}</li>
						))}
					</ul>
				</div>

				<div className="about__stats" aria-label="Key statistics">
					{stats.items.map((item) => (
						<article className="about-stat" key={item.label}>
							<strong className="about-stat__value">{item.value}</strong>

							<span className="about-stat__label">{item.label}</span>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default About;
