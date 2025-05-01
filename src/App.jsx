import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';
import WaterButton from './components/WaterButton';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="relative dark:bg-[#060606] text-black dark:text-white transition duration-500 min-h-screen">
        < Navbar darkMode={darkMode} setDarkMode={setDarkMode}  />
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
    </div>
  );
};

export default App;
