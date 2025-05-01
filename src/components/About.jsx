import React, { useState, useEffect, useRef } from 'react';
import { FaLock } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = ({ darkMode }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  // Count-up animation
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = 9;
      const duration = 2000;
      const increment = end / (duration / 50);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);
    }
  }, [inView]);

  
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      className={`min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div  id='about' className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6">
        <motion.div
          ref={ref}
          variants={fadeUp}
          className={`w-4/5 lg:w-3/5 lg:h-[50vh] ${darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-90'} rounded-2xl p-8 text-center lg:pt-24 border relative overflow-hidden`}
          style={{ borderColor: '#5237F9' }}
        >
          <div className="absolute -left-10 -top-10 w-32 h-32 rounded-full opacity-50" style={{ background: 'linear-gradient(135deg, #5237F9, transparent)' }}></div>
          <h2 className="text-5xl lg:text-6xl font-bold">{count}+</h2>
          <p className={`text-lg lg:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>Years Of Corel Draw Experience</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className={`w-4/5 lg:w-3/5 ${darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-90'} rounded-2xl p-8 text-center border flex items-center justify-center gap-4`}
          style={{ borderColor: '#5237F9' }}
        >
          <FaLock className="w-8 h-8" style={{ color: '#5237F9' }} />
          <div>
            <h3 className="text-lg lg:text-xl font-semibold">Corel Projects</h3>
            <p className={`text-lg lg:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>241 Completed Projects</p>
          </div>
        </motion.div>
      </div>

      
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <motion.div
          variants={fadeUp}
          className={` ${darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-90'} rounded-2xl p-8 border`}
          style={{ borderColor: '#5237F9' }}
        >
          <h3 className="text-sm lg:text-base font-semibold uppercase" style={{ color: '#5237F9' }}>
            About Me
          </h3>
          <h1 className="text-3xl lg:text-5xl font-bold mt-2 leading-tight">
            Expert in Corel Draw, Figma, <br /> React & Tailwind CSS
          </h1>
          <p className={` ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-4 text-sm lg:text-base`}>
            I bring over 9 years of hands-on experience in Corel Draw, designing visually striking graphics. I also specialize in building modern websites using React and Tailwind, and creating intuitive UI/UX using Figma.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
          {[
            {
              title: 'Corel Draw',
              desc: 'Designing logos, flyers, business cards, and more with expert-level detail and precision.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              ),
            },
            {
              title: 'Figma',
              desc: 'Crafting UI/UX wireframes, prototypes, and responsive designs for modern digital products.',
              icon: <circle cx="12" cy="12" r="10" />,
            },
            {
              title: 'React',
              desc: 'Building interactive UIs and SPAs using functional components, hooks, and modern architecture.',
              icon: <path d="M12 4v16m8-8H4" />,
            },
            {
              title: 'Tailwind CSS',
              desc: 'Styling responsive, reusable components efficiently with utility-first CSS.',
              icon: <path d="M3 12h18M3 6h18M3 18h18" />,
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 min-w-[250px] ${darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white bg-opacity-90'} rounded-2xl p-6 border flex items-start gap-4 transition-all duration-300 hover:shadow-[0_0_20px_#5237F9] hover:border-[#5237F9]`}
              style={{ borderColor: '#5237F9' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5237F9' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {card.icon}
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold">{card.title}</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      
      
    </motion.div>
  );
};

export default About;
