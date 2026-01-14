'use client';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  date: string;
  points: string[];
}

interface ExperienceSectionProps {
  darkMode: boolean;
}

export default function ExperienceSection({ darkMode }: ExperienceSectionProps) {
  const experiences: ExperienceItem[] = [
    {
      role: 'Software Developer (Freelancer)',
      company: 'Upwork',
      location: 'Toronto, ON',
      date: 'Sep 2025 - Present',
      points: [
        'Developed a web app that increased customer engagement by 40%.',
        'Reduced system downtime by 25% by optimizing backend processes.',
        'Led a team of 5 developers to deliver a project ahead of schedule.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'ThinkSwift',
      location: 'Toronto, ON',
      date: 'Dec 2024 - Aug 2025',
      points: [
        'Built a full-stack Client Portal, boosting engagement by 35%.',
        'Led end-to-end SDLC in a 4-member Agile team, improving delivery speed by 20%.',
        'Integrated secure authentication and Stripe payments with 5,000+ monthly transactions.',
      ],
    },
    {
      role: 'Junior Software Developer Intern',
      company: 'Honasa Limited',
      location: 'Delhi, India',
      date: 'Aug 2022 - Dec 2022',
      points: [
        'Developed a responsive job portal using PHP and MySQL for 10,000+ users.',
        'Designed system architecture and documented workflows.',
        'Improved performance and stability by fixing critical bugs.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-24 px-6 md:px-12 transition-colors duration-500 ${
        darkMode ? 'bg-[#1E1E2F] text-white' : 'bg-gray-50 text-gray-800'
      }`}
    >
      {/* Gradient Line */}
      <div className="flex justify-center mb-6">
        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
      </div>

      {/* Heading */}
      <h2
        className="text-2xl md:text-5xl font-extrabold text-center mb-20 drop-shadow-sm"
        style={{ color: darkMode ? '#FFFFFF' : '#6366F1' }}
      >
        Experience
      </h2>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line (only for desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#6366F1]/30 transform -translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start md:items-stretch"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-6 transform md:-translate-x-1/2 flex items-start md:items-center">
                  <span className="relative flex h-5 w-5 mt-1 md:mt-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-40" />
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-[#6366F1]" />
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`mt-6 md:mt-0 w-full md:w-[45%] p-6 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    darkMode
                      ? 'bg-[#2C2C42]'
                      : 'bg-white border border-[#6366F1]/20'
                  } hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-sm font-semibold text-[#6366F1]">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-sm opacity-80 mb-4">{exp.date}</p>

                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
