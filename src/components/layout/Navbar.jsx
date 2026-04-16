import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import data from "../../data/data.json"; // ADD THIS IMPORT

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();
  
  // Grab the Spanish translations for the nav
  const t = lang === 'es' ? data.portfolio.i18n.es.nav : null;

  useEffect(() => {
    if (isDark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.setAttribute("data-theme", "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const isActive = (path) => location.pathname === path ? "text-[var(--accent-color)] font-bold" : "hover:text-[var(--accent-color)] transition-colors";

  return (
    <nav className="flex items-center justify-between py-6 border-b border-gray-800/50 mb-12">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-2xl font-bold tracking-tighter" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          J<span className="text-[var(--accent-color)]">.</span>Marte
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <Link to="/" className={isActive("/")}>{t ? t.home : "Home"}</Link>
        <Link to="/about" className={isActive("/about")}>{t ? t.about : "About"}</Link>
        <Link to="/uses" className={isActive("/uses")}>{t ? t.uses : "Uses"}</Link>
        <Link to="/resume" className={isActive("/resume")}>{t ? t.resume : "Resume"}</Link>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={toggleLang} className="text-xs font-bold px-2 py-1 rounded border border-gray-700 hover:border-[var(--accent-color)] transition-colors">
          {lang === "en" ? "EN" : "ES"}
        </button>
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-800/50 transition-colors">
          {isDark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}