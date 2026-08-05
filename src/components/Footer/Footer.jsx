import { HashLink } from "react-router-hash-link";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Footer.scss";

function Footer() {
	const { translations } = useLanguage();
	const { footer } = translations;
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__grid">
					<div className="footer__brand">
						<HashLink className="footer__logo" smooth to="/#top">
							Tanja Hedemann
						</HashLink>

						<p>{footer.tagline}</p>
						<p>{footer.location}</p>
					</div>

					<div className="footer__column">
						<h2 className="footer__heading">{footer.navigationTitle}</h2>

						<nav className="footer__nav" aria-label={footer.navigationTitle}>
							<HashLink smooth to="/portfolio">
								{footer.navigation.work}
							</HashLink>

							<HashLink smooth to="/#about">
								{footer.navigation.about}
							</HashLink>

							<HashLink smooth to="/#services">
								{footer.navigation.services}
							</HashLink>

							<HashLink smooth to="/#contact">
								{footer.navigation.contact}
							</HashLink>
						</nav>
					</div>

					<div className="footer__column">
						<h2 className="footer__heading">{footer.legalTitle}</h2>

						<nav className="footer__nav" aria-label={footer.navigationTitle}>
							<HashLink smooth to="/portfolio">
								{footer.legal.privacy}
							</HashLink>

							<HashLink smooth to="/#services">
								{footer.legal.cookie}
							</HashLink>
						</nav>
					</div>

					<div className="footer__column">
						<h2 className="footer__heading">{footer.connectTitle}</h2>

						<div className="footer__links">
							<div className="footer__link-group">
								<div className="footer__link-group">
									<p className="footer__link-label">{footer.connect.knitlig}</p>

									<div className="footer__link-row">
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
								<p className="footer__link-label">{footer.connect.private}</p>

								<div className="footer__link-row">
									<a
										href="https://www.instagram.com/misstanjanielsen"
										target="_blank"
										rel="noreferrer">
										Instagram
									</a>
								</div>
							</div>

							<a className="footer__email" href="mailto:tanja-nielsen@live.dk">
								Email
							</a>
						</div>
					</div>
				</div>

				<div className="footer__bottom">
					<p>
						© {currentYear} Tanja Hedemann. {footer.copyright}
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
