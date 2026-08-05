import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Footer.scss";

function Footer({ onOpenLegal, onOpenCookieSettings }) {
	const { translations } = useLanguage();
	const { footer } = translations;
	
	const location = useLocation();
	const currentYear = new Date().getFullYear();
	const isContactPage = location.pathname === "/contact";

	return (
		<>
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
								<HashLink smooth to="/#work">
									{footer.navigation.work}
								</HashLink>

								<HashLink smooth to="/#about">
									{footer.navigation.about}
								</HashLink>

								<HashLink smooth to="/#services">
									{footer.navigation.services}
								</HashLink>

								<Link
									className={isContactPage ? "footer__link--active" : ""}
									to="/contact">
									{footer.navigation.contact}
								</Link>
							</nav>
						</div>

						<div className="footer__column">
							<h2 className="footer__heading">{footer.legalTitle}</h2>

							<div className="footer__nav">
								<button
									className="footer__legal-button"
									type="button"
									onClick={() => onOpenLegal("privacy")}>
									{footer.legal.privacy}
								</button>

								<button
									className="footer__legal-button"
									type="button"
									onClick={() => onOpenLegal("cookies")}>
									{footer.legal.cookie}
								</button>

								<button
									className="footer__legal-button"
									type="button"
									onClick={onOpenCookieSettings}>
									{footer.legal.settings}
								</button>
							</div>
						</div>

						<div className="footer__column">
							<h2 className="footer__heading">{footer.connectTitle}</h2>

							<div className="footer__links">
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

								<div className="footer__link-group">
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

								<a
									className="footer__email"
									href="mailto:tanja-nielsen@live.dk">
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


		</>
	);
}

export default Footer;
