// // components/Context/ThemeContext.jsx
// "use client";

// import { useState, useEffect, useContext, createContext } from "react";

// const ThemeContext = createContext();

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   // Initialize theme from localStorage or default to 'dark'
//   const [theme, setTheme] = useState(() => {
//     // This runs only on the client side during hydration
//     if (typeof window === 'undefined') {
//       return 'dark'; // Default server-side
//     }
//     try {
//       const savedTheme = localStorage.getItem('theme');
//       if (savedTheme) {
//         return savedTheme;
//       }
//     } catch (e) {
//       console.error("Could not access localStorage for theme.", e);
//     }
//     // Check system preference if localStorage fails or is empty
//     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   });

//   useEffect(() => {
//     // Apply theme class to the document root element
//     const root = document.documentElement;
//     if (theme === 'dark') {
//       root.classList.add('dark');
//       root.classList.remove('light');
//     } else {
//       root.classList.remove('dark');
//       root.classList.add('light');
//     }
//     // Persist theme preference
//     try {
//       localStorage.setItem('theme', theme);
//     } catch (e) {
//       console.error("Could not save theme to localStorage.", e);
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


"use client";

import React, { useState, useEffect, useContext, createContext, useMemo } from "react";

// Load Tailwind CSS (assumed, no import needed)
// Load Lucide icons (using inline SVG fallback for theme toggle)

// --- Theme Context Setup ---
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
    } catch (e) {
      console.error("Could not access localStorage for theme.", e);
    }
    // Check system preference if localStorage fails or is empty
    // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply theme class to the document root element
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    // Persist theme preference
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.error("Could not save theme to localStorage.", e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }
    }>
      {children}
    </ThemeContext.Provider>
  );
};