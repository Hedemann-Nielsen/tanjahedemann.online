import { useLanguage } from "../../i18n/LanguageContext";
import "./Hero.scss";

function Hero() {
  const { translations } = useLanguage();
  const { hero } = translations;

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__title">
            {hero.titleStart}
            <br />
            <em>{hero.titleEnd}</em>
          </h1>

          <p className="hero__description">{hero.description}</p>

          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#work">
              {hero.primaryButton}
            </a>

            <a className="hero__button hero__button--secondary" href="#contact">
              {hero.secondaryButton}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img
              className="hero__image"
              src="/images/hero.jpg"
              alt=""
            />
          </div>

          <div className="hero__stats">
            <article className="hero__stat">
              <strong>12K+</strong>
              <span>Total reach</span>
            </article>

            <article className="hero__stat">
              <strong>5+</strong>
              <span>Brand collaborations</span>
            </article>

            <article className="hero__stat">
              <strong>DA / EN</strong>
              <span>Content languages</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;