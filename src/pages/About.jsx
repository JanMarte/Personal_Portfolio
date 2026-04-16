import data from "../data/data.json";
import ScrollSpy from "../components/ui/ScrollSpy";
import { useLanguage } from "../context/LanguageContext"; 

export default function About() {
  const { lang } = useLanguage();
  const { manifesto, statusWidget } = data.portfolio;

  // Grab the Spanish translations for the About page
  const t = lang === 'es' ? data.portfolio.i18n.es.about : null;

  // Choose display data based on language
  const displayManifestoTitle = t ? t.manifestoTitle : manifesto.title;
  const displayManifestoBody = t ? t.manifestoBody : manifesto.body;
  const displayStatus = t ? t.statusWidget : statusWidget;

  const sections = [
    { id: "manifesto", label: displayManifestoTitle },
    { id: "background", label: t ? t.sections.journeyTitle : "The Journey" },
    { id: "perspective", label: t ? t.sections.perspectiveTitle : "Global Perspective" },
    { id: "status", label: t ? "Enfoque Actual" : "Current Focus" }
  ];

  return (
    <div className="animate-fade-in text-left max-w-5xl mx-auto flex flex-col md:flex-row md:gap-12 mt-4 md:mt-12 gap-12 mt-12 mb-24 relative">
      
      <aside className="hidden md:block w-48 shrink-0">
        <ScrollSpy sections={sections} />
      </aside>

      <div className="flex-1 space-y-32">
        
        {/* Section 1: Manifesto */}
        <section id="manifesto" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {displayManifestoTitle}
          </h2>
          <p className="text-lg opacity-80 leading-relaxed">
            {displayManifestoBody}
          </p>
        </section>

        {/* Section 2: Background & Journey */}
        <section id="background" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {t ? t.sections.journeyTitle : "The Journey"}
          </h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            {t ? t.sections.journeyP1 : "My transition into software engineering stems from a foundation in IT Support at the Amana Society. Providing responsive support and troubleshooting hardware and software issues taught me a critical lesson: technology is only as good as the people who can use it."}
          </p>
          <p className="text-lg opacity-80 leading-relaxed">
            {t ? t.sections.journeyP2 : "I leverage strong interpersonal skills to translate technical problems and solutions effectively for both non-technical staff and stakeholders. As a bilingual developer (Spanish/English), I thrive on breaking down communication barriers and building digital environments that genuinely make people's lives easier."}
          </p>
        </section>

        {/* Section 3: Global Perspective */}
        <section id="perspective" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {t ? t.sections.perspectiveTitle : "Global & AI Perspective"}
          </h2>
          <p className="text-lg opacity-80 leading-relaxed">
            {t ? t.sections.perspectiveP1 : "Beyond the code, I am focused on leadership and the future of tech. I was selected as a Gilman Scholar for a highly competitive, two-week intensive program studying abroad in Singapore (June 2026), focusing strictly on Artificial Intelligence and Project Management. This global exposure directly influences how I architect scalable, forward-thinking solutions."}
          </p>
        </section>

        {/* Section 4: Current Status Widget */}
        <section id="status" className="scroll-mt-24 mb-32">
          <div className="p-8 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-color)] to-blue-500"></div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--cta-color)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--cta-color)]"></span>
              </span>
              {t ? "Actualmente Ejecutando" : "Currently Executing"}
            </h3>
            <p className="text-sm opacity-70 mb-4 font-mono text-[var(--accent-color)]">
              {t ? "Hito: " : "Milestone: "} {displayStatus.milestone}
            </p>
            <p className="text-lg opacity-90 leading-relaxed">
              {displayStatus.currentFocus}
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}