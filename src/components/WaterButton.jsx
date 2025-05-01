import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const WaterButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollPercent(Math.min(scrolled, 1));
      setIsVisible(scrollTop > 100); 
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 dark:bg-[#1f1f1f] rounded-full overflow-hidden shadow-xl hover:bg-gray-300 dark:hover:bg-[#2a2a2a] transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 z-50"
      aria-label="Scroll to top with water effect"
    >
    
      <div
        className="absolute bottom-0 w-full transition-all duration-500 ease-in-out"
        style={{
          height: `${scrollPercent * 100}%`,
          backgroundColor: '#5237F9',
        }}
      >
        <div className="absolute top-0 w-full h-2 sm:h-3 bg-[#6c55fa] animate-wave" />
      </div>

    
      <ArrowUp className="relative z-10 text-white w-5 h-5 sm:w-6 sm:h-6 mx-auto mt-[18px] sm:mt-[22px]" />
    </button>
  );
};

export default WaterButton;
