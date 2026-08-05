import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import CTA from "../components/CTA/CTA";

function Home() {
	return (
		<>
			<div id="top" />

			<Hero />
			<Portfolio />
			<About />
			<Services />
			<CTA />
		</>
	);
}

export default Home;