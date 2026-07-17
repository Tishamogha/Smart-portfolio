'use client';
import Image from 'next/image';
import profilePic from './assets/Tisha.png';
import FloatingMenu from '../components/FloatingMenu';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import VolunteerSection from '@/components/VolunteerSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import AIChatbot from '@/components/AIChatbot';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#1E1E2F] text-[#F9FAFB]' : 'bg-[#F5F7FA] text-[#111827]'
        }`}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-screen pt-24 md:pt-0">
        {/* Left */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Tisha Mogha
          </h1>
          <p
            className={`text-lg md:text-xl ${darkMode ? 'text-[#D1D5DB]' : 'text-[#4B5563]'
              }`}
          >
            Full Stack Developer | AI & Modern Web Enthusiast
          </p>
          <div className="flex space-x-4">
            <a href="/resume/TishaMogha_Resume.pdf" download="TishaMogha_Resume_updated.pdf">
              <button className="px-6 py-3 bg-[#6366F1] text-white rounded-lg font-medium shadow-md hover:bg-[#4F46E5] transition">
                Download Resume
              </button>
            </a>


            <button
              onClick={() => setIsChatOpen(true)}
              className="px-6 py-3 border rounded-lg font-medium shadow-md transition border-[#6366F1] text-[#6366F1] hover:bg-[#E0E7FF]"
            >
              Talk to My AI
            </button>

            <AIChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
          </div>
        </div>

        {/* Right - Profile Placeholder */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div
            className={`relative w-80 h-80 rounded-full shadow-xl border-4 overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-[#2C2C42] border-[#6366F1]' : 'bg-gray-200 border-[#6366F1]'
              }`}
          >
            <Image
              src={profilePic}
              alt="Profile Photo"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              style={{ objectPosition: 'center 10%' }}
            />
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section
        id="about"
        className={`relative flex flex-col md:flex-row items-start justify-center py-24 px-6 md:px-12 transition-colors duration-500 ${darkMode ? 'bg-[#1E1E2F]' : 'bg-gray-50'
          }`}
      >
        {/* Background shapes */}
        <div className="absolute -z-10 top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 opacity-20 blur-3xl"></div>
        <div className="absolute -z-10 bottom-10 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 opacity-15 blur-3xl"></div>

        {/* Left side: heading + icon */}
        <div className="md:w-1/3 flex flex-col items-start mb-12 md:mb-0">
          {/* Gradient bar */}
          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-6"></div>

          {/* Icon */}
          <div className="mb-6 p-5 bg-purple-100 dark:bg-[#2C2C42] rounded-xl shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#6366F1] dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A4.992 4.992 0 0112 15a4.992 4.992 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          {/* Heading */}
          <h2
            className={`text-2xl md:text-5xl font-extrabold drop-shadow-sm ${darkMode ? 'text-white' : 'text-[#6366F1]'}`}>
            About Me
          </h2>
        </div>

        {/* Right side */}
        <div
          className={`md:w-2/3 ${darkMode ? 'text-gray-300' : 'text-gray-800'
            } space-y-4 text-lg md:text-xl leading-relaxed`}
        >
          <p>
            From scribbling my first lines of code to building AI-powered web applications,{' '}
            <span className="font-semibold">my journey as a Full Stack Developer</span> has been
            driven by curiosity, creativity, and a love for crafting intuitive digital experiences.
          </p>
          <p>
            I craft solutions that are not only functional but visually appealing, blending modern
            design with clean code. Every project is an opportunity to challenge myself and create
            something meaningful.
          </p>
          <p>
            When I’m not coding, I explore AI trends, experiment with modern UI/UX designs, and
            constantly refine my skills to stay at the cutting edge of web development.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection darkMode={darkMode} />

      {/* Experience Section */}
      <ExperienceSection darkMode={darkMode} />

      {/* Volunteer Section */}
      <VolunteerSection darkMode={darkMode} />

      {/* Education Section */}
      <EducationSection darkMode={darkMode} />

      {/* Contact Section */}
      <ContactSection darkMode={darkMode} />

      {/* Dark/Light Toggle */}
      <div className="fixed top-4 right-4 cursor-pointer z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-white shadow-md transition-colors duration-300 flex items-center justify-center"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m0-12.728l1.414 1.414M17.95 17.95l1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
      </div>
      <AIChatbot isOpen={isChatOpen} onClose={() => {setIsChatOpen(false); setTimeout(() => {
      window.location.reload();
      }, 200); 
      }}
      darkMode={darkMode}/>

      {/* Floating Menu */}
      <FloatingMenu setIsChatOpen={setIsChatOpen} />
    </main>
  );
}

// service id : service_cm3f6ka
// template id: template_ntsejvg
// public key: B8rqX588AOTDl4gjG