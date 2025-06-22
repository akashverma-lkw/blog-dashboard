import React, { useEffect, useState } from 'react';

const Header = ({ onAddClick }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode by adding/removing the "dark" class from <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="p-4 flex justify-between items-center shadow bg-white dark:bg-gray-800">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
        Blog Dashboard
      </h1>

      {/* Right side: Add Post + Dark Mode Toggle */}
      <div className="flex items-center gap-4">
        {/* Toggle button */}
        <label className="flex items-center cursor-pointer">
          <span className="text-sm mr-2 text-gray-700 dark:text-gray-300">🌞</span>
          <input
            type="checkbox"
            className="sr-only"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div className="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full relative">
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md absolute top-0 transition-transform duration-300 ${
                darkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></div>
          </div>
          <span className="text-sm ml-2 text-gray-700 dark:text-gray-300">🌙</span>
        </label>

        {/* Add Post Button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={onAddClick}
        >
          + Add Post
        </button>
      </div>
    </div>
  );
};

export default Header;
