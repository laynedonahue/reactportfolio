import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar1 from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


export default function App() {
  return (
    <main>
      <Navbar1 />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}