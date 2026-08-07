function ContactDetails({ contact }) {
	return (
		<aside className="contact__details">
						<div className="contact__detail">
							<p className="contact__detail-label">
								{contact.details.emailTitle}
							</p>

							<a href="mailto:tanja-nielsen@live.dk">tanja-nielsen@live.dk</a>
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
									rel="noreferrer">
									Instagram
								</a>

								<a
									href="https://www.facebook.com/knitlig"
									target="_blank"
									rel="noreferrer">
									Facebook
								</a>
							</div>
						</div>
					</aside>
	);
}

export default ContactDetails;