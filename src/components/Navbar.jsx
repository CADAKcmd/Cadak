import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMobileMenu = () => setMenuOpen(false);

  // Load dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, [setDarkMode]);

  // Apply dark class to <html>
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-50 p-4 shadow-md flex justify-between items-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      <div className="text-xl font-bold">
       Cadak
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-6">
        {['home', 'about', 'services', 'blog', 'project', 'contact'].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-blue-400"
            className="cursor-pointer px-3 py-1 rounded-md transition-colors duration-300 hover:bg-blue-100/10 hover:text-blue-400 capitalize"
          >
            {section}
          </Link>
        ))}

        {/* Socials */}
        <div className="flex gap-1 ml-20">
          {[FaInstagram, FaLinkedin, FaTwitter, FaFacebook].map((Icon, index) => (
            <div
              key={index}
              className="p-2 rounded-md transition-colors duration-300 hover:bg-blue-400/20 hover:text-blue-600 cursor-pointer"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Right-side icons always visible */}
      <div className="flex items-center gap-4">
        {/* Dark mode toggle */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Hamburger icon with rotation */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-full transition-all duration-300 hover:bg-[#1520F1] hover:text-white ${
            menuOpen ? 'rotate-90' : 'rotate-0'
          }`}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`absolute top-16 left-0 w-full bg-white dark:bg-black/90 text-gray-800 dark:text-white p-6 flex-col items-start space-y-4 transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'flex' : 'hidden'
        }`}
      >
        {['home', 'about', 'services', 'blog', 'project', 'contact'].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-blue-400"
            className="capitalize px-3 py-1 rounded-md transition-colors duration-300 hover:bg-blue-100/10 hover:text-blue-400"
            onClick={closeMobileMenu}
          >
            {section}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
