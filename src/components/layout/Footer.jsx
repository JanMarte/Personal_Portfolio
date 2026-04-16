import data from "../../data/data.json";
import { useLanguage } from "../../context/LanguageContext"; // ADD THIS IMPORT

export default function Footer() {
  const { statusWidget } = data.portfolio;
  const { lang } = useLanguage(); // ADD THIS
  
  // Grab the Spanish translations for the footer
  const t = lang === 'es' ? data.portfolio.i18n.es.footer : null;

  return (
    <footer className="mt-24 border-t border-[var(--card-border)] py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div>
          <h4 className="text-xl font-bold mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            J<span className="text-[var(--accent-color)]">.</span>Marte
          </h4>
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} {t ? t.copyright : "Architected with React & Tailwind v4."}
          </p>
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
              <span className="opacity-70 block break-words">{statusWidget.currentFocus}</span>
            </div>
          </div>
        )}

      </div>
    </footer>
  );
}