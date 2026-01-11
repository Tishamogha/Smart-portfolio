'use client';
import { motion } from 'framer-motion';

interface VolunteerSectionProps {
  darkMode: boolean;
}

export default function VolunteerSection({ darkMode }: VolunteerSectionProps) {
  const volunteerData = [
    {
      role: 'Community Tech Volunteer',
      org: 'Toronto Public Library',
      place: 'Toronto, ON',
      time: '2025',
      points: [
        'Maintained public computer systems with updated software, antivirus, and accessibility tools.',
        'Created digital guides and tutorials for community tech education programs.',
        'Delivered hands-on coding workshops using Scratch and Python for youth.',
      ],
    },
    {
      role: 'First Year Experience Facilitator',
      org: 'Humber College',
      place: 'Toronto, ON',
      time: '2023 – 2025',
      points: [
        'Mentored 100+ first-year students through structured group sessions and peer guidance.',
        'Led engagement activities to build confidence and campus involvement.',
        'Organized orientation and transition programs with facilitation teams.',
      ],
    },
  ];

  return (
    <section
      id="volunteer"
      className={`py-24 px-6 md:px-12 transition-colors duration-500 ${
        darkMode ? 'bg-[#1B1B2F] text-white' : 'bg-white text-gray-800'
      }`}
    >
      {/* Gradient Line */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>

      {/* Heading */}
      <h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-16"
        style={{ color: darkMode ? '#FFFFFF' : '#6366F1' }}
      >
        Volunteer & Leadership
      </h2>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {volunteerData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.04 }}
            className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 group ${
              darkMode
                ? 'bg-[#2C2C42]'
                : 'bg-gray-50 border border-gray-200'
            }`}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-300"></div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-indigo-400">
                {item.role}
              </h3>

              <p className="text-sm mb-4 opacity-80">
                {item.org} • {item.place} • {item.time}
              </p>

              <ul className="space-y-2 text-sm leading-relaxed">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-indigo-400">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
