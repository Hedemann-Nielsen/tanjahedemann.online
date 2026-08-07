import { useLanguage } from "../../i18n/LanguageContext";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import "./Contact.scss";

function Contact() {
	const { translations } = useLanguage();
	const { contact } = translations;

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
					<ContactDetails contact={contact} />

					<ContactForm contact={contact} />
				</div>
			</div>
		</section>
	);
}

export default Contact;