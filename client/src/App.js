import "./App.css";
import IntroComponent from "./Component/IntroComponent";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Achievements from "./Component/Achievements";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <IntroComponent />
      <hr/>
      <About />
      <hr/>
      <Skills />
      <hr/>
      <Projects />
      <hr/>
      <Achievements />
      <hr/>
      <Contact />
      <hr/>
      <Footer />
    </>
  );
}

export default App;
