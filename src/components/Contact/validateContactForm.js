export function validateContactForm(formData, validation) {
	const errors = {};

	const name = formData.get("name")?.trim() ?? "";
	const email = formData.get("email")?.trim() ?? "";
	const company = formData.get("company")?.trim() ?? "";
	const message = formData.get("message")?.trim() ?? "";

	if (!name) {
		errors.name = validation.nameRequired;
	} else if (name.length < 2) {
		errors.name = validation.nameShort;
	}

	if (!email) {
		errors.email = validation.emailRequired;
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = validation.emailInvalid;
	}

	if (company.length > 120) {
		errors.company = validation.companyLong;
	}

	if (!message) {
		errors.message = validation.messageRequired;
	} else if (message.length < 20) {
		errors.message = validation.messageShort;
	}

	return errors;
}