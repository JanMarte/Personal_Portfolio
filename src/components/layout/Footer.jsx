import data from "../../data/data.json";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { statusWidget } = data.portfolio;
  const { lang } = useLanguage();
  
  const t = lang === 'es' ? data.portfolio.i18n.es.footer : null;
  const tStatus = lang === 'es' ? data.portfolio.i18n.es.about.statusWidget : null;
  const displayCurrentFocus = tStatus ? tStatus.currentFocus : statusWidget.currentFocus;

  // The Ghost Event: Triggers the terminal without needing global state
  const triggerTerminal = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: '`' }));
  };

  return (
    <footer className="mt-24 border-t border-[var(--card-border)] py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div>
          <h4 className="text-xl font-bold mb-2 flex items-center group cursor-pointer w-fit" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            <span>J</span>
            <span className="max-w-0 overflow-hidden inline-block whitespace-nowrap transition-all duration-500 ease-in-out group-hover:max-w-[3ch]">
              an
            </span>
            <span className="text-[var(--accent-color)] transition-colors duration-300 group-hover:text-[var(--cta-color)]">.</span>
            <span>Marte</span>
          </h4>
          
          <div className="flex items-center gap-3 text-sm opacity-60">
            <p>© {new Date().getFullYear()} {t ? t.copyright : "Architected with React & Tailwind v4."}</p>
            
            {/* The Visual Breadcrumb */}
            <button 
              onClick={triggerTerminal}
              className="font-mono text-[var(--accent-color)] opacity-40 hover:opacity-100 hover:scale-110 transition-all focus:outline-none"
              aria-label="Open Secure Terminal"
              title="Manual Override"
            >
              &gt;_
            </button>
          </div>
        </div>

        {statusWidget.active && (
          <div className="flex items-start gap-4 bg-[var(--card-bg)] border border-[var(--card-border)] px-5 py-4 rounded-lg backdrop-blur-sm max-w-md w-full md:w-auto shadow-lg shadow-black/5">
            <span className="flex h-3 w-3 relative shrink-0 mt-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent-color)]"></span>
            </span>
            <div className="text-sm leading-relaxed min-w-0">
              <span className="font-bold opacity-90 block mb-1">
                {t ? t.currently : "Currently:"}
              </span>
              <span className="opacity-70 block break-words">{displayCurrentFocus}</span>
            </div>
          </div>
        )}

      </div>
    </footer>
  );
}