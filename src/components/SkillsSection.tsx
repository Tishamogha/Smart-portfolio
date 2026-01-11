'use client';
import { useState } from 'react';

interface SkillCategory {
    category: string;
    skills: { name: string; logo: string }[];
}

interface SkillsSectionProps {
    darkMode: boolean;
}

export default function SkillsSection({ darkMode }: SkillsSectionProps) {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const skillCategories: SkillCategory[] = [
        {
            category: 'Languages',
            skills: [
                { name: 'Java', logo: '/logos/java.png' },
                { name: 'Python', logo: '/logos/python.png' },
                { name: 'C++', logo: '/logos/cpp.png' },
                { name: 'PHP', logo: '/logos/php.png' },
                { name: 'JavaScript', logo: '/logos/javascript.png' },
            ],
        },
        {
            category: 'Web Technologies',
            skills: [
                { name: 'HTML5', logo: '/logos/html.png' },
                { name: 'CSS', logo: '/logos/css.png' },
                { name: 'Tailwind', logo: '/logos/tailwind.png' },
                { name: 'Bootstrap', logo: '/logos/bootstrap.jpeg' },
                { name: 'ReactJS', logo: '/logos/react.png' },
                { name: 'TypeScript', logo: '/logos/typescript.jpeg' },
                { name: 'JSON', logo: '/logos/json.png' },
            ],
        },
        {
            category: 'Server & System Design',
            skills: [
                { name: 'Distributed DB', logo: '/logos/database.png' },
                { name: 'Microservices', logo: '/logos/microservices.jpeg' },
            ],
        },
        {
            category: 'Databases',
            skills: [
                { name: 'MySQL', logo: '/logos/mysql.png' },
                { name: 'Oracle', logo: '/logos/oracle.png' },
                { name: 'SQL Server', logo: '/logos/sql.jpeg' },
                { name: 'PL/SQL', logo: '/logos/plsql.jpeg' },
            ],
        },
        {
            category: 'Tools & Others',
            skills: [
                { name: 'Git', logo: '/logos/git.png' },
                { name: 'GitHub', logo: '/logos/github.jpeg' },
                { name: 'VS Code', logo: '/logos/vscode.jpeg' },
                { name: 'Postman', logo: '/logos/postman.png' },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className={`relative py-24 px-6 md:px-12 transition-colors duration-500 ${
                darkMode ? 'bg-[#1E1E2F] text-white' : 'bg-gray-50 text-gray-800'
            }`}
        >
            {/* Gradient line */}
            <div className="flex justify-center mb-6">
                <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
            </div>

            {/* Heading */}
            <h2
                className="text-2xl md:text-5xl font-extrabold text-center mb-16 drop-shadow-sm"
                style={{ color: darkMode ? '#FFFFFF' : '#6366F1' }}
            >
                My Skills
            </h2>

            {/* Overlay to blur entire background when hovering */}
            {hoverIndex !== null && (
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-20 pointer-events-none rounded-2xl"></div>
            )}

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-8 relative z-30">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {/* Category Card */}
                        <div
                            className={`w-64 h-36 p-6 rounded-2xl shadow-xl flex items-center justify-center transition-transform duration-300 cursor-pointer relative ${
                                hoverIndex === index ? 'z-50 scale-105' : 'z-30'
                            } ${darkMode
                                ? 'bg-[#2C2C42] text-white'
                                : 'bg-white text-[#6366F1] border border-[#6366F1]'
                            }`}
                        >
                            <h3 className="text-xl font-semibold">{category.category}</h3>
                        </div>

                        {/* Mini Skill Cards */}
                        <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-wrap justify-center gap-6 opacity-0 scale-90 transition-all duration-300 ${
                                hoverIndex === index ? 'opacity-100 scale-100 z-50' : ''
                            }`}
                            style={{
                                pointerEvents: hoverIndex === index ? 'auto' : 'none',
                                minWidth: '22rem',
                            }}
                        >
                            {category.skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col items-center w-28 h-28 p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 ${
                                        darkMode
                                            ? 'bg-[#2C2C42] text-white'
                                            : 'bg-white text-gray-800 border border-gray-200'
                                    }`}
                                >
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        className="w-10 h-10 object-contain mb-2"
                                    />
                                    <span className="text-sm font-medium text-center">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
