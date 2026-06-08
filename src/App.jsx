import { useState } from "react";

import IntroLoader from "./components/IntroLoader/IntroLoader";

import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <IntroLoader
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <>
      <Cursor />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;