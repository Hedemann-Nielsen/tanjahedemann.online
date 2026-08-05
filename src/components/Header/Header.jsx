import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLanguage } from "../../i18n/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("top");

	const { translations } = useLanguage();
	const { navigation } = translations;

	const location = useLocation();
	const isHome = location.pathname === "/";
	const isContactPage = location.pathname === "/contact";

	function closeMenu() {
		setIsMenuOpen(false);
	}

	useEffect(() => {
		function handleEscape(event) {
			if (event.key === "Escape") {
				closeMenu();
			}
		}

		window.addEventListener("keydown", handleEscape);

		return () => {
			window.removeEventListener("keydown", handleEscape);
		};
	}, []);

	useEffect(() => {
		function handleScrollState() {
			setIsScrolled(window.scrollY > 30);
		}

		handleScrollState();

		window.addEventListener("scroll", handleScrollState, {
			passive: true,
		});

		return () => {
			window.removeEventListener("scroll", handleScrollState);
		};
	}, []);

	useEffect(() => {
		document.body.classList.toggle("menu-open", isMenuOpen);

		return () => {
			document.body.classList.remove("menu-open");
		};
	}, [isMenuOpen]);

	useEffect(() => {
		const sectionIds = ["work", "about", "services", "contact"];

		function updateActiveSection() {
			const headerOffset = 140;
			const scrollPosition = window.scrollY + headerOffset;

			let currentSection = "top";

			sectionIds.forEach((sectionId) => {
				const section = document.getElementById(sectionId);

				if (section && section.offsetTop <= scrollPosition) {
					currentSection = sectionId;
				}
			});

			setActiveSection(currentSection);
		}

		updateActiveSection();

		window.addEventListener("scroll", updateActiveSection, {
			passive: true,
		});

		window.addEventListener("resize", updateActiveSection);

		return () => {
			window.removeEventListener("scroll", updateActiveSection);
			window.removeEventListener("resize", updateActiveSection);
		};
	}, []);

	return (
		<header
			className={`header 
				${isScrolled ? "header--scrolled" : ""} 
				${isHome ? "header--transparent" : "header--solid"}`}>
			<div className="container header__inner">
				<HashLink
					className="header__logo"
					smooth
					to="/#top"
					onClick={closeMenu}>
					Tanja Hedemann
				</HashLink>

				<button
					className="header__menu-button"
					type="button"
					aria-expanded={isMenuOpen}
					aria-controls="main-navigation"
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					onClick={() => setIsMenuOpen((current) => !current)}>
					<span />
					<span />
				</button>

				<nav
					id="main-navigation"
					className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
					aria-label="Main navigation">
					<HashLink
						className={`header__link ${
							activeSection === "work" ? "header__link--active" : ""
						}`}
						smooth
						to="/#work"
						onClick={closeMenu}>
						{navigation.work}
					</HashLink>

					<HashLink
						className={`header__link ${
							activeSection === "about" ? "header__link--active" : ""
						}`}
						smooth
						to="/#about"
						onClick={closeMenu}>
						{navigation.about}
					</HashLink>

					<HashLink
						className={`header__link ${
							activeSection === "services" ? "header__link--active" : ""
						}`}
						smooth
						to="/#services"
						onClick={closeMenu}>
						{navigation.services}
					</HashLink>

					<Link
						className={`header__link header__contact-link ${
							isContactPage ? "header__link--active" : ""
						}`}
						to="/contact"
						onClick={closeMenu}>
						{navigation.contact}
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
