import { useLanguage } from "../../i18n/LanguageContext";

function Hero() {
  const { translations } = useLanguage();
  const { hero } = translations;

  return (
    <section className="section">
      <div className="container">
        <p>{hero.eyebrow}</p>

        <h1>
          {hero.titleStart}
          <br />
          {hero.titleEnd}
        </h1>

        <p>{hero.description}</p>
      </div>
    </section>
  );
}

export default Hero;