import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import Services from "../components/Services/Services";

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
      </main>
    </>
  );
}

export default Home;