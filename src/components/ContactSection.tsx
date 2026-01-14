'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  darkMode: boolean;
}

export default function ContactSection({ darkMode }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_cm3f6ka',
        'template_ntsejvg',
        formRef.current,
        'B8rqX588AOTDl4gjG'
      )
      .then(
        () => {
          setIsSending(false);
          setSuccess(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setIsSending(false);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      className={`py-24 px-6 md:px-12 transition-colors duration-500 ${
        darkMode ? 'bg-[#1E1E2F] text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Gradient line */}
      <div className="flex justify-center mb-6">
        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-5xl font-extrabold text-center mb-12 drop-shadow-sm"
        style={{ color: darkMode ? '#FFFFFF' : '#6366F1' }}
      >
        Contact Me
      </motion.h2>

      {/* Form */}
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`max-w-3xl mx-auto rounded-2xl shadow-xl p-8 flex flex-col gap-6 transition-colors duration-500 ${
          darkMode ? 'bg-[#2C2C42]' : 'bg-white'
        }`}
      >
        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <motion.input
            type="text"
            name="name"   // ✅ matches {{name}}
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            whileFocus={{ scale: 1.02 }}
            className={`flex-1 px-4 py-3 rounded-lg border ${
              darkMode
                ? 'border-gray-600 text-white placeholder-gray-400'
                : 'border-gray-300 text-gray-900 placeholder-gray-500'
            } focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition`}
          />

          <motion.input
            type="email"
            name="email"   // ✅ matches {{email}}
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            whileFocus={{ scale: 1.02 }}
            className={`flex-1 px-4 py-3 rounded-lg border ${
              darkMode
                ? 'border-gray-600 text-white placeholder-gray-400'
                : 'border-gray-300 text-gray-900 placeholder-gray-500'
            } focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition`}
          />
        </div>

        {/* Message */}
        <motion.textarea
          name="message"  
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          rows={6}
          whileFocus={{ scale: 1.02 }}
          className={`w-full px-4 py-3 rounded-lg border ${
            darkMode
              ? 'border-gray-600 text-white placeholder-gray-400'
              : 'border-gray-300 text-gray-900 placeholder-gray-500'
          } focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition resize-none`}
        />

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 bg-[#6366F1] text-white rounded-lg font-medium shadow-md hover:bg-[#4F46E5] transition self-start ${
            isSending ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </motion.button>

        {/* Success Message */}
        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-500 font-semibold mt-2"
          >
            Your message has been sent!
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
