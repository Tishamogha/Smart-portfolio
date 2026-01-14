'use client';
import { useState } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

export default function AIChatbot({ isOpen, onClose, darkMode = false }: AIChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const respondToUser = (text: string) => {
    const userMessage: Message = { sender: 'user', text };
    setMessages((prev) => [...prev, userMessage]);

    // lowercase for simple keyword matching
    const lower = text.toLowerCase();
    let response = '';

    if (lower.includes('hello') || lower.includes('hi')) {
        response = "Hey there! 👋 I'm Tisha's AI. How's your day going?";
      } else if (lower.includes('good') || lower.includes('fine') ) {
        response = "Awesome! 😄 Would you like to know a bit more about Tisha?";
      } else if (lower.includes('about') || lower.includes('sure')) {
        response = "Tisha is a passionate Full Stack Developer who loves AI and crafting modern web experiences. She's energetic, enthusiastic, and always curious about new tech!";
      } else if (lower.includes('skill') || lower.includes('skills') || lower.includes('expertise')) {
        response = "Her expertise shines in React, Next.js, TypeScript, Node.js, MongoDB, and AI integration — building sleek, efficient, and innovative apps!";
      } else if (lower.includes('experience')) {
        response = "She’s currently rocking it as a Freelancer, and has previously contributed as a Full Stack Developer at ThinkSwift and as an Intern at Honasa Limited.";
      } else if (lower.includes('hobby') || lower.includes('interest') || lower.includes('hobbies') || lower.includes('interests')){
        response = "Tisha loves diving into AI trends, experimenting with UI/UX, and constantly leveling up her skills! 🎵🎸 She also enjoys playing instruments and singing.";
      } else {
        response = "Hmm 🤔 I didn't catch that. You can ask me about Tisha's skills, experience, hobbies, or just say hi!";
      }
      

    const botMessage: Message = { sender: 'bot', text: response };
    setTimeout(() => setMessages((prev) => [...prev, botMessage]), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    respondToUser(input.trim());
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: darkMode ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.3)' }}
    >
      <div
        className={`flex flex-col w-11/12 max-w-md rounded-xl shadow-xl overflow-hidden ${
          darkMode ? 'bg-[#2C2C42] text-white' : 'bg-white text-black'
        }`}
      >
        {/* Header */}
        <div className={`flex justify-between items-center p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#6366F1]'}`}>
            Tisha's AI Chatbot
          </h3>
          <button onClick={onClose} className={`text-xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            ×
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-96">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`px-4 py-2 rounded-xl max-w-[75%] break-words ${
                  msg.sender === 'user'
                    ? 'bg-[#6366F1] text-white'
                    : darkMode
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-100 text-black'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex border-t p-3" style={{ borderColor: darkMode ? '#4B5563' : '#E5E7EB' }}>
          <input
            type="text"
            placeholder="Type a message..."
            className={`flex-1 px-4 py-2 rounded-l-xl border focus:outline-none ${
              darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'
            }`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="px-4 py-2 bg-[#6366F1] text-white rounded-r-xl hover:bg-[#4F46E5] transition">
            Send
          </button>
        </form>

        {/* Quick Start Button */}
        {messages.length === 0 && (
          <div className="flex flex-wrap gap-2 p-3">
            <button
              onClick={() => respondToUser('Hello')}
              className={`px-3 py-1 rounded-full text-sm transition ${
                darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              Hello
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
