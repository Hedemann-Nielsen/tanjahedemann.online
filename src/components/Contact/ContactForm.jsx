import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { validateContactForm } from "./validateContactForm";

function ContactForm({ contact }) {
	const [errors, setErrors] = useState({});
	const [state, handleSubmit] = useForm("xppazrbp");

	function onSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		const validationErrors = validateContactForm(formData, contact.validation);

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setErrors({});
		handleSubmit(event);
	}

	if (state.succeeded) {
		return (
			<div className="contact__success" role="status" aria-live="polite">
				<h2>{contact.form.successTitle}</h2>

				<p>{contact.form.success}</p>
			</div>
		);
	}

	return (
		<form className="contact__form" onSubmit={onSubmit} noValidate>
			<div className="contact__honeypot" aria-hidden="true">
				<label htmlFor="contact-website">Website</label>

				<input
					id="contact-website"
					name="_gotcha"
					type="text"
					tabIndex="-1"
					autoComplete="off"
				/>
			</div>

			<div className="contact__field">
				<label htmlFor="contact-name">{contact.form.name}</label>

				<input
					id="contact-name"
					name="name"
					type="text"
					autoComplete="name"
					placeholder={contact.form.namePlaceholder}
					minLength={2}
					maxLength={80}
					aria-describedby={errors.name ? "contact-name-error" : undefined}
				/>

				{errors.name && (
					<p className="contact__error" id="contact-name-error">
						{errors.name}
					</p>
				)}
			</div>

			<div className="contact__field">
				<label htmlFor="contact-email">{contact.form.email}</label>

				<input
					id="contact-email"
					name="email"
					type="email"
					autoComplete="email"
					placeholder={contact.form.emailPlaceholder}
					maxLength={150}
					aria-describedby={errors.email ? "contact-email-error" : undefined}
				/>

				{errors.email && (
					<p className="contact__error" id="contact-email-error">
						{errors.email}
					</p>
				)}

				<ValidationError
					className="contact__error"
					prefix={contact.form.email}
					field="email"
					errors={state.errors}
				/>
			</div>

			<div className="contact__field">
				<label htmlFor="contact-company">{contact.form.company}</label>

				<input
					id="contact-company"
					name="company"
					type="text"
					autoComplete="organization"
					placeholder={contact.form.companyPlaceholder}
					maxLength={120}
					aria-describedby={
						errors.company ? "contact-company-error" : undefined
					}
				/>

				{errors.company && (
					<p className="contact__error" id="contact-company-error">
						{errors.company}
					</p>
				)}
			</div>

			<div className="contact__field contact__field--full">
				<label htmlFor="contact-message">{contact.form.message}</label>

				<textarea
					id="contact-message"
					name="message"
					rows="7"
					placeholder={contact.form.messagePlaceholder}
					minLength={20}
					maxLength={3000}
					aria-describedby={
						errors.message ? "contact-message-error" : undefined
					}
				/>

				{errors.message && (
					<p className="contact__error" id="contact-message-error">
						{errors.message}
					</p>
				)}

				<ValidationError
					className="contact__error"
					prefix={contact.form.message}
					field="message"
					errors={state.errors}
				/>
			</div>

			<ValidationError
				className="contact__error contact__error--general"
				errors={state.errors}
			/>

			<button
				className="contact__submit"
				type="submit"
				disabled={state.submitting}>
				{state.submitting ? contact.form.sending : contact.form.submit}

				<span aria-hidden="true">→</span>
			</button>
		</form>
	);
}

export default ContactForm;
