import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LegalModal from "../LegalModal/LegalModal";
import CookieBanner from "../CookieBanner/CookieBanner";
import { useLanguage } from "../../i18n/LanguageContext";

function Layout() {
	const [activeLegalModal, setActiveLegalModal] = useState(null);

	const { translations } = useLanguage();
	const { legal } = translations;

	const legalContent = activeLegalModal
		? legal[activeLegalModal]
		: null;

	function openCookieSettings() {
		window.dispatchEvent(
			new CustomEvent("open-cookie-settings"),
		);
	}

	return (
		<>
			<Header />

			<main>
				<Outlet />
			</main>

			<Footer
				onOpenLegal={setActiveLegalModal}
				onOpenCookieSettings={openCookieSettings}
			/>

			<CookieBanner
				onOpenCookiePolicy={() =>
					setActiveLegalModal("cookies")
				}
			/>

			{legalContent && (
				<LegalModal
					content={legalContent}
					onClose={() => setActiveLegalModal(null)}
				/>
			)}
		</>
	);
}

export default Layout;