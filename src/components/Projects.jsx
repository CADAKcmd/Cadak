import React from 'react';
import { ArrowDownLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Bakerz Bites',
    subtitle: 'Bakery Website',
    image: '/Bakery.png',
    link: 'https://bakerz-bites1-yhxa.vercel.app/',
  },
  {
    title: 'Furniture Store',
    subtitle: 'Furniture E-commerce',
    image: '/Wood.png',
    link: 'https://hamzat-furniture.vercel.app/',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Projects = () => {
  return (
    <div id='project' className="bg-gray-100 dark:bg-gray-900 py-14 px-4 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white hover:bg-[#5237F9] hover:text-white text-black flex items-center justify-center shadow-lg">
                <ArrowDownLeft className="w-6 h-6" />
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.subtitle}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
