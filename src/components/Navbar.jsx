import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMobileMenu = () => setMenuOpen(false);

 
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, [setDarkMode]);

  
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
      <img src="/Logo.png" alt="" className='w-24 h-14' />

      
      <div className="hidden lg:flex items-center gap-6">
        {['home', 'about', 'services', 'resume', 'project', 'skills', 'contact'].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            activeClass="text-[#5237F9]"  // Active color for the link
            className="cursor-pointer px-3 py-1 rounded-md transition-colors duration-300 hover:bg-[#5237F9]/10 hover:text-[#5237F9] capitalize"
          >
            {section}
          </Link>
        ))}

     
        <div className="flex gap-4 ml-20">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md transition-colors duration-300 hover:bg-[#5237F9]/20 hover:text-[#5237F9] cursor-pointer"
          >
            <FaInstagram />
          </a>
          <a
            href="www.linkedin.com/in/abubakar-gbadebo-bb081b312"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md transition-colors duration-300 hover:bg-[#5237F9]/20 hover:text-[#5237F9] cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md transition-colors duration-300 hover:bg-[#5237F9]/20 hover:text-[#5237F9] cursor-pointer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md transition-colors duration-300 hover:bg-[#5237F9]/20 hover:text-[#5237F9] cursor-pointer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

     
      <div className="flex items-center gap-4">
        {/* Dark mode toggle */}
        <button onClick={() => setDarkMode(!darkMode)}>
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
      </div>
    </nav>
  );
};

export default Navbar;
