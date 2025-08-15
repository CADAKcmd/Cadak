import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import WaterButton from "./components/WaterButton";
import Footer from "./components/Footer";
import IntroScreen from "./components/IntroSequence";
 
 

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <AnimatePresence>
        {showIntro ? (
          <IntroScreen onFinish={() => setShowIntro(false)} />
        ) : (
          <div className="relative dark:bg-[#060606] text-black dark:text-white transition duration-500 min-h-screen">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
            <About darkMode={darkMode} setDarkMode={setDarkMode} />
            <Services />
            <Resume darkMode={darkMode} setDarkMode={setDarkMode} />
            <Skills />
            <Projects />
            <ContactForm />
            <WaterButton />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
