import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function useLegalModal() {
	const [activeLegalModal, setActiveLegalModal] = useState(null);

	const { translations } = useLanguage();
	const { legal } = translations;

	const legalContent = activeLegalModal
		? legal[activeLegalModal]
		: null;

	function openLegalModal(type) {
		setActiveLegalModal(type);
	}

	function closeLegalModal() {
		setActiveLegalModal(null);
	}

	return {
		legalContent,
		openLegalModal,
		closeLegalModal,
	};
}

export default useLegalModal;