/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Optional: Persist dark mode preference in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      localStorage.setItem('dark-mode', newMode);
      return newMode;
    });
  };

  return (
    <button onClick={toggleDarkMode} aria-pressed={isDarkMode} className="toggle-button">
      {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  ); 
}

export default Toggle;
