import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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

  // Save dark mode preference and apply theme
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
      <img src="/Logo.png" alt="Cadak Logo" className="w-24 h-14" />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6">
        {['home', 'about', 'services', 'resume', 'project', 'skills', 'contact'].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-[#5237F9]"
            className="cursor-pointer px-3 py-1 rounded-md transition-colors duration-300 hover:bg-[#5237F9]/10 hover:text-[#5237F9] capitalize"
          >
            {section}
          </Link>
        ))}

        {/* Social Icons */}
        <div className="flex gap-4 ml-20">
          <a
            href="https://x.com/KianoGee"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md transition-all duration-300 hover:bg-[#5237F9]/20 hover:text-[#5237F9] hover:scale-110 cursor-pointer"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://linkedin.com/in/abubakar-asubiaro-62b1b1391/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md transition-all duration-300 hover:bg-[#5237F9]/20 hover:text-[#5237F9] hover:scale-110 cursor-pointer"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/CADAKcmd"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md transition-all duration-300 hover:bg-[#5237F9]/20 hover:text-[#5237F9] hover:scale-110 cursor-pointer"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      {/* Right Controls (Dark Mode + Menu) */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md hover:bg-[#5237F9]/20 transition-colors duration-300"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-full transition-all duration-300 hover:bg-[#5237F9] hover:text-white ${
            menuOpen ? 'rotate-90' : 'rotate-0'
          }`}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white dark:bg-black/90 text-gray-800 dark:text-white p-6 flex-col items-start space-y-4 transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'flex' : 'hidden'
        }`}
      >
        {['home', 'about', 'services', 'resume', 'project', 'skills', 'contact'].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-[#5237F9]"
            className="capitalize px-3 py-1 rounded-md transition-colors duration-300 hover:bg-[#5237F9]/10 hover:text-[#5237F9]"
            onClick={closeMobileMenu}
          >
            {section}
          </Link>
        ))}

        {/* Social Links in Mobile Menu */}
        <div className="flex gap-4 pt-4 border-t border-gray-300 dark:border-gray-700">
          <a href="https://x.com/KianoGee" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="hover:text-[#5237F9] transition-colors duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/abubakar-asubiaro-62b1b1391/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="hover:text-[#5237F9] transition-colors duration-300" />
          </a>
          <a href="https://github.com/CADAKcmd" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="hover:text-[#5237F9] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
