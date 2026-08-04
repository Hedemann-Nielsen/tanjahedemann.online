import { Link } from "react-router-dom";
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
            <Link className="footer__logo" to="/">
              Tanja Hedemann
            </Link>

            <p>{footer.tagline}</p>
            <p>{footer.location}</p>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">
              {footer.navigationTitle}
            </h2>

            <nav className="footer__nav" aria-label={footer.navigationTitle}>
              <Link to="/portfolio">
                {footer.navigation.work}
              </Link>

              <Link to="/#about">
                {footer.navigation.about}
              </Link>

              <Link to="/#services">
                {footer.navigation.services}
              </Link>

              <Link to="/#contact">
                {footer.navigation.contact}
              </Link>
            </nav>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">
              {footer.connectTitle}
            </h2>

            <div className="footer__links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>

              <a href="mailto:hello@tanjahedemann.online">
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