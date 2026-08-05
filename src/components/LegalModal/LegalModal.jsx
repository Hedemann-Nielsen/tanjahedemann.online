import { useEffect, useRef } from "react";
import "./LegalModal.scss";

function LegalModal({ content, onClose }) {
	const dialogRef = useRef(null);

	useEffect(() => {
		const dialog = dialogRef.current;

		if (!dialog) return;

		dialog.showModal();
		document.body.classList.add("legal-modal-open");

		return () => {
			document.body.classList.remove("legal-modal-open");
		};
	}, []);

	function closeModal() {
		dialogRef.current?.close();
	}

	function handleBackdropClick(event) {
		if (event.target === dialogRef.current) {
			closeModal();
		}
	}

	return (
		<dialog
			ref={dialogRef}
			className="legal-modal"
			aria-labelledby="legal-modal-title"
			onClose={onClose}
			onClick={handleBackdropClick}>
			<div className="legal-modal__panel">
				<header className="legal-modal__header">
					<div>
						<p className="legal-modal__eyebrow">{content.eyebrow}</p>

						<h2 className="legal-modal__title" id="legal-modal-title">
							{content.title}
						</h2>
					</div>

					<button
						className="legal-modal__close"
						type="button"
						aria-label={content.closeLabel}
						onClick={closeModal}>
						×
					</button>
				</header>

				<div className="legal-modal__body">
					<p className="legal-modal__updated">{content.updated}</p>

					{content.sections.map((section) => (
						<section className="legal-modal__section" key={section.title}>
							<h3>{section.title}</h3>

							{section.paragraphs.map((paragraph, index) => (
								<p key={`${section.title}-${index}`}>{paragraph}</p>
							))}
						</section>
					))}
				</div>
			</div>
		</dialog>
	);
}

export default LegalModal;
