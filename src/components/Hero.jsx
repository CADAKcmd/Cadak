import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Hero = () => {
  const words = ["Graphics Designer", "UI/UX Designer", "Front End Developer", "Brand Designer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 25 : 25;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <div id='home' className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white w-full min-h-screen pt-20 transition-colors duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 md:mt-10 ">
        
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 py-10">
          <h3 className="text-[#5237F9] text-sm font-bold uppercase mb-4">Welcome to my world</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">I'm Abubakar Gbadebo</h1>
          <h2 className="text-4xl md:text-5xl font-bold flex items-center mb-6">
            A&nbsp;
            <span className="text-[#5237F9]">{text}</span>
            <span className="border-r-2 border-current animate-pulse ml-1"></span>
          </h2>
          <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
            “I owe my success to learning from the best advice—and then finding my own unique path forward.”
          </p>
          <div>
  <h1 className="font-bold mb-2">Find Me On</h1>
  <div className="flex gap-4">
    <a href="https://x.com/KianoGee" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={24} className="hover:text-[#5237F9] transition-colors" />
    </a>
    <a href="https://www.linkedin.com/in/abubakar-asubiaro-62b1b1391/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={24} className="hover:text-[#5237F9] transition-colors" />
    </a>
    <a href="https://github.com/CADAKcmd" target="_blank" rel="noopener noreferrer">
      <FaGithub size={24} className="hover:text-[#5237F9] transition-colors" />
    </a>
  </div>
</div>

        </div>

        
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-[90%]  sm:w-[80%] max-w-md h-[500px] sm:h-[700px] border-[15px]  border-[#5237F9] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/my.jpg"
              alt="Abubakar Gbadebo"
              className="w-full h-full md:object-cover bg-cover bg-center"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
