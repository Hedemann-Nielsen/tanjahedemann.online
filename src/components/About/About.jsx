import { brands } from "../../data/brands";
import { useLanguage } from "../../i18n/LanguageContext";
import "./About.scss";

function About() {
  const { translations } = useLanguage();
  const { about } = translations;

  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        <div className="about__media">
          <img
            className="about__image"
            src="/images/about.jpg"
            alt=""
          />
        </div>

        <div className="about__main">
          <p className="about__eyebrow">{about.eyebrow}</p>

          <h2 className="about__title">{about.title}</h2>

          <p className="about__description">
            {about.description}
          </p>
        </div>

        <ul className="about__highlights">
          {about.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="about__brands">
          <p className="about__brands-title">
            {about.trustedBy}
          </p>

          <ul className="about__brands-list">
            {brands.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;