import { Link } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageContext";
import "./CTA.scss";

function CTA() {
	const { translations } = useLanguage();
	const { cta } = translations;

	return (
		<section className="cta">
			<div className="container">
				<div className="cta__wrapper">
					<div className="cta__content">
						<p className="cta__eyebrow">{cta.eyebrow}</p>

						<h2 className="cta__title">{cta.title}</h2>

						<p className="cta__description">{cta.description}</p>

						<Link className="cta__button" to="/contact">
							{cta.button}
							<span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CTA;
