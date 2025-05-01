import { FaCode, FaLaptopCode, FaPaintBrush, FaTshirt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Ui/Ux Design",
    icon: <FaCode className="text-[#5237F9] text-3xl" />,
    desc: "Each one showcases my approach and dedication to detail, creativity.",
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-[#5237F9] text-3xl" />,
    desc: "Business consulting consult us to provide expert advice. Each one showcases my approach and dedication to detail, creativity.",
  },
  {
    title: "Corel Design Expertise",
    icon: <FaPaintBrush className="text-[#5237F9] text-3xl" />,
    desc: "I specialize in high-quality design work using CorelDRAW, crafting visually appealing logos, flyers, and marketing material with precision and creativity.",
  },
  {
    title: "Branding & Clothing Design",
    icon: <FaTshirt className="text-[#5237F9] text-3xl" />,
    desc: "From brand identity to clothing and merchandise design, I help shape cohesive visuals that connect with your target audience and boost brand value.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Services() {
  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-900 py-20 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What I Provide For You
      </motion.h2>

      <div id='services' className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl flex items-start gap-5 shadow-md transition-all duration-300 hover:shadow-[0_0_20px_#5237F9] hover:border-[#5237F9] border border-transparent"
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-[#f3f0ff] dark:bg-[#2f2a5a] p-4 rounded-full">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
