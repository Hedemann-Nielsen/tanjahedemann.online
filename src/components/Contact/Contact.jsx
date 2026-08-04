import { useLanguage } from "../../i18n/LanguageContext";
import "./Contact.scss";

function Contact() {
  const { translations } = useLanguage();
  const { contact } = translations;

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__content">
            <p className="contact__eyebrow">{contact.eyebrow}</p>

            <h2 className="contact__title">{contact.title}</h2>

            <p className="contact__description">
              {contact.description}
            </p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="contact-name">
                {contact.form.name}
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">
                {contact.form.email}
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-company">
                {contact.form.company}
              </label>

              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
              />
            </div>

            <div className="contact__field contact__field--full">
              <label htmlFor="contact-message">
                {contact.form.message}
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="6"
                required
              />
            </div>

            <button className="contact__submit" type="submit">
              {contact.form.submit}
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;