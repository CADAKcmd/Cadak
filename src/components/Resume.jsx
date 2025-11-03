import React from 'react';
import { FaFigma, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiCoreldraw } from 'react-icons/si';

const Resume = ({ darkMode }) => {
  const skills = [
    {
      name: 'Corel Draw',
      description:
        'Expert in creating high-quality vector illustrations, designing professional business cards, logos, flyers, and brochures. Skilled at combining typography and graphics to deliver clean, print-ready results.',
      icon: <SiCoreldraw className="text-green-500 text-3xl" />
    },
    {
      name: 'React',
      description:
        'Strong knowledge of React for building responsive, high-performance web applications. Experienced with hooks, context API, component-based architecture, and integrating APIs in real-world projects.',
      icon: <FaReact className="text-sky-400 text-3xl" />
    },
    {
      name: 'Figma',
      description:
        'Proficient in designing intuitive UI/UX layouts for web and mobile. Capable of turning ideas into pixel-perfect prototypes, collaborating with teams, and exporting assets for developers.',
      icon: <FaFigma className="text-pink-500 text-3xl" />
    },
    {
      name: 'Tailwind CSS',
      description:
        'Hands-on experience building modern interfaces using utility-first Tailwind classes. Expert in creating reusable, responsive components and optimizing layout consistency across screen sizes.',
      icon: <SiTailwindcss className="text-cyan-400 text-3xl" />
    }
  ];

  // Path to your PDF file inside /public folder
  const resumeUrl = '/resume.pdf';

  return (
    <div
      id="resume"
      className={`w-full min-h-[90vh] px-4 py-12 sm:px-10 lg:px-24 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">
        My Expert Areas Where I Gained Skill
      </h2>
      <p
        className={`mb-12 max-w-3xl text-lg ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        I specialize in modern web and graphic design tools to create efficient,
        professional, and visually compelling digital experiences tailored to
        real-world needs.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`min-h-[40vh] flex flex-col justify-start border rounded-2xl p-6 transition duration-300 hover:shadow-xl ${
              darkMode
                ? 'bg-gray-800 bg-opacity-80 border-[#5237F9]'
                : 'bg-white border-[#5237F9]'
            }`}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center border border-[#5237F9]">
                {skill.icon}
              </div>
              <h4 className="text-2xl font-semibold">{skill.name}</h4>
            </div>
            <p
              className={`${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } text-base leading-relaxed`}
            >
              {skill.description}
            </p>
          </div>
        ))}
      </div>

      {/* Resume Viewer Section */}
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-6 text-[#5237F9]">
          View My Resume
        </h3>

        {/* Embedded PDF */}
        <iframe
          src={resumeUrl}
          title="My Resume"
          className="w-full max-w-4xl h-[80vh] border-2 border-[#5237F9] rounded-xl shadow-lg mb-6"
        ></iframe>

        {/* Download Button */}
        <a
          href={resumeUrl}
          download
          className="px-6 py-3 bg-[#5237F9] text-white rounded-lg shadow-md hover:bg-[#3e2ad9] transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
