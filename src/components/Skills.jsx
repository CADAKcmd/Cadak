import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, percentage }) => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 1500;
          const increment = percentage / (duration / 16);
          const counterIncrement = percentage / (duration / 16);

          const animate = () => {
            start += increment;
            const counter = Math.min(count + counterIncrement, percentage);
            if (start < percentage) {
              setWidth(Math.min(start, percentage));
              setCount(Math.floor(counter));
              requestAnimationFrame(animate);
            } else {
              setWidth(percentage);
              setCount(percentage);
            }
          };
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div id='skills' ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-900 dark:text-white">{name}</span>
        <span className="text-sm text-gray-900 dark:text-white">{count}%</span>
      </div>
      <div className="w-full rounded-full h-4 bg-gray-300 dark:bg-gray-700">
        <div
          className="h-4 rounded-full transition-all duration-75 ease-in-out"
          style={{ width: `${width}%`, backgroundColor: '#5237F9' }}
        ></div>
      </div>
    </div>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Skills = () => {
  return (
    <motion.div
      className="p-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      custom={0}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <motion.div variants={sectionVariants} custom={1}>
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">DESIGN SKILL</h2>
          <SkillBar name="Corel Draw" percentage={90} />
          <SkillBar name="Photoshop" percentage={50} />
          <SkillBar name="Figma" percentage={90} />
          <SkillBar name="Canva" percentage={90} />
          <SkillBar name="Photo Room" percentage={100} />
        </motion.div>

        <motion.div variants={sectionVariants} custom={2}>
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">DEVELOPMENT SKILL</h2>
          <SkillBar name="HTML" percentage={100} />
          <SkillBar name="CSS" percentage={70} />
          <SkillBar name="Tailwind" percentage={90} />
          <SkillBar name="Javascript" percentage={30} />
          <SkillBar name="React" percentage={70} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
