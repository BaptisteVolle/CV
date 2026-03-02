import React, { useState, useEffect } from "react";
import { Sun, Moon, Languages } from "lucide-react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { useLanguage } from "./i18n/LanguageContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="container mx-auto px-6 max-w-5xl relative">
      {/* Controls Toggle */}
      <div className="absolute top-6 right-6 z-50 flex gap-3">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-main)] hover:bg-white/20 dark:hover:bg-black/20 transition-all font-medium"
          aria-label="Toggle language"
        >
          <Languages size={20} />
          <span className="uppercase text-sm">{language}</span>
        </button>

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
        <p>
          © {new Date().getFullYear()} Baptiste. {t.footer.rights}
        </p>
        <p className="text-sm mt-2">{t.footer.builtWith}</p>
      </footer>
    </div>
  );
}

export default App;
