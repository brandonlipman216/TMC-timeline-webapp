"use client";

import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="theme-toggle-container">
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="toggle-track">
          {/* Icons */}
          <div className="toggle-icon light-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                fill="currentColor"
              />
              <path d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25Z" fill="currentColor"/>
              <path d="M12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="currentColor"/>
              <path d="M1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12Z" fill="currentColor"/>
              <path d="M19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.58579 12.75 19.25 12.4142 19.25 12Z" fill="currentColor"/>
            </svg>
            <p className="toggle-text">Light</p>
          </div>
          
          {/* Dark mode icon */}
          <div className="toggle-icon dark-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M9.36077 3.29291C6.30062 4.70763 4 7.65876 4 11.1636C4 16.0181 8.03757 20 13 20C16.3376 20 19.1926 17.8162 20.6398 14.8366C20.9442 14.2385 20.4446 13.3934 19.7248 13.5366C19.3028 13.6192 18.8662 13.6636 18.4198 13.6636C14.6332 13.6636 11.4645 10.6183 11.4645 6.93636C11.4645 5.93112 11.6729 4.97747 12.0512 4.12342C12.3496 3.44827 11.7213 2.71427 10.9797 2.90102C10.4374 3.0329 9.90593 3.2025 9.36077 3.29291Z" 
                fill="currentColor"
              />
            </svg>
            <p className="toggle-text">Dark</p>
          </div>
          
          {/* Moving toggle circle */}
          <div className={`toggle-thumb ${darkMode ? "toggle-thumb-right" : "toggle-thumb-left"}`}></div>
        </div>
      </button>
    </div>
  );
}
