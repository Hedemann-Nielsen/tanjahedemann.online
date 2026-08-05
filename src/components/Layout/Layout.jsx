import { Outlet } from "react-router-dom";

import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import LegalModal from "../LegalModal/LegalModal";
import CookieBanner from "../CookieBanner/CookieBanner";
import useLegalModal from "../../Hooks/useLegalModal";

function Layout() {
	const { legalContent, openLegalModal, closeLegalModal } = useLegalModal();
	function openCookieSettings() {
		window.dispatchEvent(new CustomEvent("open-cookie-settings"));
	}

	return (
		<>
			<Header />

			<main>
				<Outlet />
			</main>

			<Footer
				onOpenLegal={openLegalModal}
				onOpenCookieSettings={openCookieSettings}
			/>
			<CookieBanner onOpenCookiePolicy={() => openLegalModal("cookies")} />

			{legalContent && (
				<LegalModal content={legalContent} onClose={closeLegalModal} />
			)}
		</>
	);
}

export default Layout;
