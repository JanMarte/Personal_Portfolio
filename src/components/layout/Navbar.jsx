import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import data from "../../data/data.json";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ADDED STATE
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();
  
  const t = lang === 'es' ? data.portfolio.i18n.es.nav : null;

  useEffect(() => {
    if (isDark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.setAttribute("data-theme", "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  
  // Close mobile menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path) => location.pathname === path ? "text-[var(--accent-color)] font-bold" : "hover:text-[var(--accent-color)] transition-colors";

  return (
    <nav className="relative py-6 border-b border-gray-800/50 mb-8 md:mb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" onClick={closeMenu} className="text-2xl font-bold tracking-tighter" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            J<span className="text-[var(--accent-color)]">.</span>Marte
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link to="/" className={isActive("/")}>{t ? t.home : "Home"}</Link>
          <Link to="/about" className={isActive("/about")}>{t ? t.about : "About"}</Link>
          <Link to="/uses" className={isActive("/uses")}>{t ? t.uses : "Uses"}</Link>
          <Link to="/resume" className={isActive("/resume")}>{t ? t.resume : "Resume"}</Link>
        </div>

        {/* Global Toggles & Hamburger Button */}
        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={toggleLang} className="text-xs font-bold px-2 py-1 rounded border border-gray-700 hover:border-[var(--accent-color)] transition-colors">
            {lang === "en" ? "EN" : "ES"}
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-800/50 transition-colors">
            {isDark ? "🌙" : "☀️"}
          </button>
          
          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> // X icon
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-2 py-4 bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-lg shadow-2xl z-50 flex flex-col gap-4 px-6 md:hidden">
          <Link to="/" onClick={closeMenu} className={`block py-2 ${isActive("/")}`}>{t ? t.home : "Home"}</Link>
          <Link to="/about" onClick={closeMenu} className={`block py-2 ${isActive("/about")}`}>{t ? t.about : "About"}</Link>
          <Link to="/uses" onClick={closeMenu} className={`block py-2 ${isActive("/uses")}`}>{t ? t.uses : "Uses"}</Link>
          <Link to="/resume" onClick={closeMenu} className={`block py-2 ${isActive("/resume")}`}>{t ? t.resume : "Resume"}</Link>
        </div>
      )}
    </nav>
  );
}