import { useState } from 'react';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log("Submitted email:", email);
    setEmail('');
  };

  const socialLinks = [
    { icon: faInstagram, url: 'https://instagram.com/yourprofile' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/yourprofile' },
    { icon: faTwitter, url: 'https://twitter.com/yourprofile' },
    { icon: faFacebook, url: 'https://facebook.com/yourprofile' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-6 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-extrabold dark:text-white text-black">Cadak</span>
          </div>
          <h2 className="text-4xl font-bold leading-snug">
            <span className="text-[#5237F9]">Get Ready</span> To Create<br /> Great
          </h2>

          <form onSubmit={handleEmailSubmit} className="mt-6">
            <label className="block mb-2 text-sm font-medium">Email Address</label>
            <div className="flex items-center border-b border-gray-600 dark:border-gray-500 focus-within:border-[#5237F9]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent w-full px-3 py-2 outline-none text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <button type="submit" className="px-3 text-[#5237F9] hover:text-[#412edc]">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>

        
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Link</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {[
              { to: 'home', label: 'Home' },
              { to: 'about', label: 'About Me' },
              { to: 'services', label: 'Service' },
              { to: 'contact', label: 'Contact Me' },
              { to: 'resume', label: 'Resume' }
            ].map(({ to, label }, index) => (
              <li key={index}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-[#5237F9] transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact</h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3">
              <span className="bg-black/10 dark:bg-white/10 p-2 rounded-full">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#5237F9]" />
              </span>
              Cadakcmd@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-black/10 dark:bg-white/10 p-2 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#5237F9]" />
              </span>
              2, Asubiaro drive, Shomolu, Lagos, Nigeria
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-black/10 dark:bg-white/10 p-2 rounded-full">
                <FontAwesomeIcon icon={faPhone} className="text-[#5237F9]" />
              </span>
              +234 707 262 5562
            </li>
          </ul>

          <div className="flex gap-4 mt-6">
            {socialLinks.map(({ icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/10 dark:bg-white/10 p-2 rounded-full hover:bg-[#5237F9] hover:text-white transition"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
