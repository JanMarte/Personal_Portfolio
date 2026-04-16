import { useParams, Link, Navigate } from "react-router-dom";
import data from "../data/data.json";
import ScrollSpy from "../components/ui/ScrollSpy";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectDeepDive() {
  const { id } = useParams();
  const { lang } = useLanguage();
  
  const project = data.portfolio.projects.find(p => p.id === id);
  if (!project) return <Navigate to="/" replace />;

  // English Fallbacks
  const engDeepDive = project.deepDive || {
    overview: project.shortDescription,
    theProblem: "Detailed problem statement coming soon.",
    theSolution: "Detailed solution architecture coming soon.",
    techStackDetails: "Detailed technical implementations coming soon.",
    futureGoals: "Future roadmap coming soon."
  };

  // Spanish Data (if available)
  const esProject = lang === 'es' ? data.portfolio.i18n.es.projects[id] : null;
  const esDeepDive = esProject?.deepDive;

  // Final Display Variables
  const displayTitle = esProject ? esProject.title : project.title;
  const displayDeepDive = esDeepDive || engDeepDive;

  // UI Labels
  const labels = lang === 'es' ? {
    overview: "Resumen", problem: "El Problema", solution: "La Solución", tech: "Arquitectura", future: "Metas Futuras", back: "← Volver al Portafolio", viewLive: "Ver Sitio en Vivo ↗", viewSource: "Ver Código Fuente"
  } : {
    overview: "Overview", problem: "The Problem", solution: "The Solution", tech: "Architecture & Tech", future: "Future Goals", back: "← Back to Portfolio", viewLive: "View Live Site ↗", viewSource: "View Source Code"
  };

  const sections = [
    { id: "overview", label: labels.overview },
    { id: "problem", label: labels.problem },
    { id: "solution", label: labels.solution },
    { id: "tech", label: labels.tech },
    { id: "future", label: labels.future }
  ];

  return (
    <div className="animate-fade-in text-left max-w-5xl mx-auto flex flex-col md:flex-row md:gap-12 mt-4 md:mt-12 gap-12 mt-12 mb-24 relative">
      
      <aside className="hidden md:block w-48 shrink-0">
        <Link to="/" className="flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-[var(--accent-color)] transition-colors mb-8 pl-4">
          {labels.back}
        </Link>
        <ScrollSpy sections={sections} />
      </aside>

      <div className="flex-1 min-w-0 space-y-24">
        
        {/* Page Header */}
        <div className="mb-12 border-b border-[var(--card-border)] pb-8 relative">
          
          {/* ADD THIS MOBILE ONLY BACK BUTTON */}
          <Link to="/" className="md:hidden inline-flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-[var(--accent-color)] transition-colors mb-6">
            {labels.back}
          </Link>

          <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded bg-[var(--btn-bg)] border border-[var(--card-border)] text-[var(--accent-color)]">
            {project.status}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 pr-0 md:pr-24" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {displayTitle}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 border border-[var(--card-border)] rounded-full bg-gray-900/10 dark:bg-black/20 text-sm font-mono text-[var(--accent-color)] font-bold">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.quickLinks?.live && project.quickLinks.live !== "#" && (
              <a href={project.quickLinks.live} target="_blank" rel="noreferrer" className="px-6 py-2 bg-[var(--cta-color)] text-white font-bold rounded shadow-lg shadow-[var(--accent-color)]/20 hover:scale-105 transition-transform">
                {labels.viewLive}
              </a>
            )}
            {project.quickLinks?.github && (
              <a href={project.quickLinks.github} target="_blank" rel="noreferrer" className="px-6 py-2 border border-[var(--card-border)] hover:border-[var(--accent-color)] rounded transition-colors flex items-center gap-2 font-bold bg-[var(--btn-bg)]">
                {labels.viewSource}
              </a>
            )}
          </div>
        </div>
        
        <section id="overview" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{labels.overview}</h2>
          <p className="text-lg opacity-80 leading-relaxed bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-lg backdrop-blur-sm">
            {displayDeepDive.overview}
          </p>
        </section>

        <section id="problem" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-red-500/90" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{labels.problem}</h2>
          <p className="text-lg opacity-80 leading-relaxed">{displayDeepDive.theProblem}</p>
        </section>

        <section id="solution" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-emerald-500/90" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{labels.solution}</h2>
          <p className="text-lg opacity-80 leading-relaxed">{displayDeepDive.theSolution}</p>
        </section>

        <section id="tech" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{labels.tech}</h2>
          <p className="text-lg opacity-80 leading-relaxed">{displayDeepDive.techStackDetails}</p>
        </section>

        <section id="future" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-blue-500/90" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{labels.future}</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-8">{displayDeepDive.futureGoals}</p>
        </section>

      </div>
    </div>
  );
}