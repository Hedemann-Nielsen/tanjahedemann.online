import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, translations } = useLanguage();

  const { navigation } = translations;

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__logo" href="#top" onClick={closeMenu}>
          Tanja Hedemann
        </a>

        <div className="header__actions">
          <button
            className="header__language"
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === "en"
                ? "Skift sprog til dansk"
                : "Switch language to English"
            }
          >
            {language === "en" ? "DA" : "EN"}
          </button>

          <button
            className="header__menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>

        <nav
          id="main-navigation"
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>
            {navigation.work}
          </a>

          <a href="#about" onClick={closeMenu}>
            {navigation.about}
          </a>

          <a href="#services" onClick={closeMenu}>
            {navigation.services}
          </a>

          <a href="#contact" onClick={closeMenu}>
            {navigation.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;