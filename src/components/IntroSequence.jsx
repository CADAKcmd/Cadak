import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Logo from "../assets/cadak.png";

const IntroSequence = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <AnimatePresence mode="wait">
        {/* Step 0: Cinematic Logo */}
        {step === 0 && (
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex flex-col items-center text-center"
          >
            <motion.img
              src={Logo}
              alt="Cadak Logo"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            />
            <motion.p
              className="text-sm sm:text-base md:text-lg tracking-widest animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Loading environment...
            </motion.p>
          </motion.div>
        )}

        {/* Step 1: Greeting */}
        {step === 1 && (
          <motion.div
            key="greeting"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-snug"
          >
            <TypeAnimation
              sequence={[
                "Hello there 👋",
                1500,
                "Welcome to CADAK + CMD world!",
                2000,
                () => setStep(2)
              ]}
              wrapper="span"
              speed={60}
              repeat={0}
              cursor={false}
            />
          </motion.div>
        )}

        {/* Step 2: CMD Boot Simulation */}
        {step === 2 && (
          <motion.div
            key="cmd"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-black p-3 sm:p-4 rounded-lg shadow-lg border w-full max-w-sm sm:max-w-md md:max-w-lg font-mono text-sm sm:text-base md:text-lg lg:text-xl overflow-x-auto"
            style={{ borderColor: "#5237F9", color: "#5237F9" }}
          >
            <TypeAnimation
              sequence={[
                "C:\\Users\\Guest> Starting portfolio...",
                1500,
                "C:\\Users\\Guest> Unleashing Innovation...",
                1500,
                "C:\\Users\\Guest> Done ✔",
                1000,
                () => onFinish()
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step progression */}
      {step === 0 &&
        setTimeout(() => {
          setStep(1);
        }, 2500)}
    </div>
  );
};

export default IntroSequence;
