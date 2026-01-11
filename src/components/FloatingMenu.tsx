'use client';
import { useState, useEffect } from 'react';
import {
  UserIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  HandRaisedIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftIcon,
} from '@heroicons/react/24/outline';

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Prevent SSR mismatch

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { name: 'About Me', icon: <UserIcon className="h-6 w-6" />, 
    action: () => {
      const section = document.getElementById('about');
      section?.scrollIntoView({ behavior: 'smooth' });
    }, },
    { name: 'Skills', icon: <CodeBracketIcon className="h-6 w-6" />, 
    action: () => {
      const section = document.getElementById('skills');
      section?.scrollIntoView({ behavior: 'smooth' });
    },},
    { name: 'Experience', icon: <BriefcaseIcon className="h-6 w-6" />, 
    action: () => {
      const section = document.getElementById('experience');
      section?.scrollIntoView({ behavior: 'smooth' });
     }, },
     { name: 'Volunteer', icon: <HandRaisedIcon className="h-6 w-6" />, 
    action: () => {
      const section = document.getElementById('volunteer');
      section?.scrollIntoView({ behavior: 'smooth' });
     }, },
    { name: 'Education', icon: <AcademicCapIcon className="h-6 w-6" />, 
    action: () => {
      const section = document.getElementById('education');
      section?.scrollIntoView({ behavior: 'smooth' });
     },  },
    { name: 'Email', icon: <EnvelopeIcon className="h-6 w-6" />, 
    action: () => {
      const section = document.getElementById('contact');
      section?.scrollIntoView({ behavior: 'smooth' });
     }, },
    { name: 'Live Chat', icon: <ChatBubbleOvalLeftIcon className="h-6 w-6" />, action: () => alert('Live Chat') },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Menu items - icons only */}
      <div
        className={`flex flex-col items-end mb-2 space-y-3 transition-all duration-300 ${
          open ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
        }`}
      >
        {menuItems.map((item, idx) => (
          <div key={idx} className="relative group">
            <button
              onClick={item.action}
              className="w-12 h-12 rounded-full bg-[#6366F1] dark:bg-[#4F46E5] text-white shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              {item.icon}
            </button>
            {/* Tooltip */}
            <span className="absolute right-full mr-3 -top-1/2 opacity-0 group-hover:opacity-100 
              bg-gradient-to-r from-purple-500 to-indigo-500 
              text-white font-semibold text-sm px-3 py-1 rounded-full shadow-lg
              whitespace-nowrap transform translate-x-2 group-hover:translate-x-0
              transition-all duration-300"
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-[#6366F1] dark:bg-[#4F46E5] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 text-3xl font-bold"
      >
        {open ? '×' : '+'}
      </button>
    </div>
  );
}
