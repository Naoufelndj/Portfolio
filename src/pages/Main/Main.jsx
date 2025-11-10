import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import Technologies from "../../components/Technologies/Technologies";

function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <About />
    </>
  );
}

export default Main;
