import { useLanguage } from "../../i18n/LanguageContext";
import "./Stats.scss";

function Stats() {
  const { translations } = useLanguage();
  const { stats } = translations;

  return (
    <section className="stats" aria-label="Key statistics">
      <div className="container">
        <div className="stats__grid">
          {stats.items.map((item) => (
            <article className="stats__item" key={item.label}>
              <strong className="stats__value">{item.value}</strong>
              <span className="stats__label">{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;