import { useLanguage } from "../../i18n/LanguageContext";
import "./Contact.scss";

function Contact() {
	const { translations } = useLanguage();
	const { contact } = translations;

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<section className="contact">
			<div className="container">
				<header className="contact__intro">
					<div>
						<p className="contact__eyebrow">
							{contact.eyebrow}
						</p>

						<h1 className="contact__title">
							{contact.title}
						</h1>
					</div>

					<p className="contact__description">
						{contact.description}
					</p>
				</header>

				<div className="contact__body">
					<aside className="contact__details">
						<div className="contact__detail">
							<p className="contact__detail-label">
								{contact.details.emailTitle}
							</p>

							<a href="mailto:tanja-nielsen@live.dk">
								tanja-nielsen@live.dk
							</a>
						</div>

						<div className="contact__detail">
							<p className="contact__detail-label">
								{contact.details.responseTitle}
							</p>

							<p>{contact.details.responseText}</p>
						</div>

						<div className="contact__detail">
							<p className="contact__detail-label">
								{contact.details.socialTitle}
							</p>

							<div className="contact__socials">
								<a
									href="https://www.instagram.com/knitlig"
									target="_blank"
									rel="noreferrer"
								>
									Instagram
								</a>

								<a
									href="https://www.facebook.com/knitlig"
									target="_blank"
									rel="noreferrer"
								>
									Facebook
								</a>
							</div>
						</div>
					</aside>

					<form
						className="contact__form"
						onSubmit={handleSubmit}
					>
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
								rows="7"
								required
							/>
						</div>

						<button
							className="contact__submit"
							type="submit"
						>
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