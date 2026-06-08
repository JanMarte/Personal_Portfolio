import data from "../data/data.json";
import ScrollSpy from "../components/ui/ScrollSpy";
import { useLanguage } from "../context/LanguageContext";

export default function Uses() {
  const { uses } = data.portfolio;
  const { lang } = useLanguage();
  
  const t = lang === 'es' ? data.portfolio.i18n.es.uses : null;

  const sections = [
    { id: "hardware", label: t ? t.hardware : "💻 Hardware & Gear" },
    { id: "software", label: t ? t.software : "⚡ Software & IDEs" },
    { id: "travel", label: lang === 'es' ? "✈️ En la Carretera" : "✈️ On the Road" },
    { id: "vibe", label: t ? t.vibe : "🎧 Workflow & Vibe" }
  ];

  return (
    <div className="animate-fade-in text-left max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 mt-4 md:mt-12 mb-24 relative">
      
      <aside className="hidden md:block w-48 shrink-0">
        <ScrollSpy sections={sections} />
      </aside>

      <div className="flex-1 min-w-0 space-y-24">
        
        <div className="mb-12 border-b border-[var(--card-border)] pb-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {t ? t.title : "The Engine Room"}
          </h1>
          <p className="text-lg opacity-80 leading-relaxed max-w-2xl">
            {t ? t.subtitle : "A comprehensive list of my hardware, software, and daily setup. This is the gear I use to architect full-stack applications and automate business workflows."}
          </p>
        </div>
        
        {/* Hardware */}
        <section id="hardware" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {t ? t.hardware : "💻 Hardware & Gear"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {uses.hardware.map((item, idx) => (
              <div key={idx} className="p-5 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] backdrop-blur-sm hover:border-[var(--accent-color)]/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-[var(--accent-color)] mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                  <span className="opacity-90 font-medium leading-relaxed">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Software */}
        <section id="software" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {t ? t.software : "⚡ Software & IDEs"}
          </h2>
          <div className="flex flex-wrap gap-4">
            {uses.software.map((item, idx) => (
              <div key={idx} className="px-6 py-3 border border-[var(--card-border)] rounded-full bg-gray-900/10 dark:bg-black/20 text-lg font-bold opacity-90 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* On the Road — Singapore */}
        <section id="travel" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {lang === 'es' ? "✈️ En la Carretera" : "✈️ On the Road"}
          </h2>
          <div className="p-6 border border-[var(--accent-color)]/30 rounded-lg bg-[var(--accent-color)]/5 relative overflow-hidden mb-6">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-color)] to-blue-500"></div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🇸🇬</span>
              <h3 className="text-xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                {lang === 'es' ? "Singapur — 12–27 de Junio, 2026" : "Singapore — June 12–27, 2026"}
              </h3>
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              {lang === 'es'
                ? "Próximamente parto al programa Gilman Scholar en Singapore Management University. Llevaré el equipo ligero — laptop, cuaderno, buena música. Lo importante es lo que voy a traer de vuelta: perspectiva global sobre IA y gestión de proyectos."
                : "Heading to the Gilman Scholar program at Singapore Management University on June 12th. Packing light — laptop, notebook, good music. The important thing is what I'm bringing back: a global perspective on AI and project management."}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {[
                { label: lang === 'es' ? "Duración" : "Duration", value: lang === 'es' ? "2 semanas" : "2 weeks" },
                { label: lang === 'es' ? "Enfoque" : "Focus", value: "AI + PM" },
                { label: lang === 'es' ? "Institución" : "Institution", value: "SMU" },
                { label: lang === 'es' ? "Beca" : "Grant", value: "Gilman / DoS" }
              ].map((item, i) => (
                <div key={i} className="p-3 border border-[var(--card-border)] rounded bg-[var(--card-bg)]">
                  <span className="text-[var(--accent-color)] font-bold block text-xs mb-0.5">{item.label}</span>
                  <span className="opacity-80 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vibe */}
        <section id="vibe" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {t ? t.vibe : "🎧 Workflow & Vibe"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2 text-[var(--accent-color)]">{t ? t.fuel : "The Fuel"}</h3>
              <p className="opacity-80 text-lg">{uses.vibe.fuel}</p>
            </div>
            <div className="p-8 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2 text-[var(--accent-color)]">{t ? t.music : "The Soundtrack"}</h3>
              <p className="opacity-80 text-lg">{uses.vibe.music}</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}