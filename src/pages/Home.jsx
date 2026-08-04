import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Stats from "../components/Stats/Stats"
import Contact from "../components/Contact/Contact"

function Home() {
  return (
    <>
      <div id="top" />

      <Header />

      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Stats />
        <Contact />
      </main>
    </>
  );
}

export default Home;