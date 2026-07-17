'use client';

import { motion } from 'framer-motion';

interface EducationItem {
  degree: string;
  school: string;
  location: string;
  duration: string;
  highlights: string[];
}

export default function EducationSection({ darkMode }: { darkMode: boolean }) {
  const education: EducationItem[] = [
    {
      degree: 'Postgraduate Certificate in Information Technology',
      school: 'Humber College',
      location: 'Toronto, Canada',
      duration: '2023 – 2025',
      highlights: ['Completed with Honors'],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Trinity Institute of Professional Studies',
      location: 'Delhi, India',
      duration: '2019 – 2023',
      highlights: ['Graduated with Distinction', 'Specialised in Computer Science'],
    },
  ];

  return (
    <section
      id="education"
      className={`relative py-24 px-6 md:px-12 overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-[#1E1E2F] text-white' : 'bg-gray-50 text-gray-800'
      }`}
    >
      {/* Background Glow Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      {/* Gradient Line */}
      <div className="relative z-10 flex justify-center mb-6">
        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
      </div>

      {/* Heading */}
      <h2
        className="relative z-10 text-3xl md:text-5xl font-extrabold text-center mb-16"
        style={{ color: darkMode ? '#FFFFFF' : '#6366F1' }}
      >
        Education
      </h2>

      {/* Cards */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 perspective-[1200px]">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
            className={`relative rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
              darkMode ? 'bg-[#2C2C42]' : 'bg-white'
            }`}
          >
            {/* Inner Gradient Border */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent bg-gradient-to-br from-purple-500/40 to-indigo-500/40 opacity-40" />

            {/* Content */}
            <div className="relative z-10">
              <p className="text-sm font-semibold text-indigo-400 mb-2">
                {edu.duration}
              </p>

              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {edu.degree}
              </h3>

              <p className="font-medium mb-1">
                {edu.school}
              </p>

              <p className="text-sm opacity-80 mb-5">
                {edu.location}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                {edu.highlights.map((h, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full font-semibold ${
                      darkMode
                        ? 'bg-indigo-500/20 text-indigo-300'
                        : 'bg-indigo-100 text-indigo-700'
                    }`}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
