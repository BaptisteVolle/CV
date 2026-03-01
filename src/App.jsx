import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="container mx-auto px-6 max-w-5xl relative">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)] hover:bg-white/20 dark:hover:bg-black/20 transition-all"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <Hero />
      <Experience />
      <Skills />
      <Education />

      <footer className="text-center py-12 text-[var(--text-muted)] border-t border-[var(--border-color)] mt-8">
        <p>© {new Date().getFullYear()} Baptiste. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Vite & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
