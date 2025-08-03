import React, { useState } from 'react';
import { useTheme } from '../contexts';

export const ContactPage: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const getStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return {
          container: 'max-w-2xl mx-auto p-6',
          title: 'text-4xl font-bold text-gray-800 mb-8',
          formContainer: 'space-y-6',
          input: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
          button: 'w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200'
        };
      case 'theme2':
        return {
          container: 'max-w-2xl mx-auto p-8',
          title: 'text-5xl font-bold text-white mb-10',
          formContainer: 'space-y-8',
          input: 'w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400',
          button: 'w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl transition-colors duration-200 font-bold'
        };
      case 'theme3':
        return {
          container: 'max-w-2xl mx-auto p-6',
          title: 'text-5xl font-bold text-purple-800 mb-10 text-center',
          formContainer: 'space-y-6',
          input: 'w-full px-6 py-4 border-4 border-yellow-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 bg-white',
          button: 'w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 rounded-2xl transition-all duration-200 font-bold shadow-lg'
        };
      default:
        return {
          container: 'max-w-2xl mx-auto p-6',
          title: 'text-4xl font-bold mb-8',
          formContainer: 'space-y-6',
          input: 'w-full px-4 py-3 border rounded-lg',
          button: 'w-full bg-blue-600 text-white py-3 rounded-lg'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {currentTheme === 'theme3' ? '💌 Contact Us 💌' : 'Contact Us'}
      </h1>
      <div className={styles.formContainer}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <button onClick={handleSubmit} className={styles.button}>
          {currentTheme === 'theme3' ? '🚀 Send Message!' : 'Send Message'}
        </button>
      </div>
    </div>
  );
};