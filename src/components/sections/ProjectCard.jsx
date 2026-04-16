import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext"; 
import data from "../../data/data.json"; 

export default function ProjectCard({ project }) {
  const { lang } = useLanguage();
  
  // Get the general card button translations
  const tCard = lang === 'es' ? data.portfolio.i18n.es.card : null;
  
  // Find the translated text for this specific project (fallback to English if not found)
  const esProject = lang === 'es' ? data.portfolio.i18n.es.projects[project.id] : null;

  // Choose the display text based on language
  const displayTitle = esProject ? esProject.title : project.title;
  const displayDesc = esProject ? esProject.shortDescription : project.shortDescription;

  return (
    <div className="group relative flex flex-col p-8 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] backdrop-blur-sm hover:border-[var(--accent-color)] hover:shadow-lg transition-all duration-300 overflow-hidden">
      
      {/* Status Badge */}
      <div className="absolute top-6 right-6 px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded bg-[var(--btn-bg)] border border-[var(--card-border)] text-[var(--text-primary)] group-hover:border-[var(--accent-color)] transition-colors">
        {project.status}
      </div>

      {/* Content Hierarchy */}
      <div className="flex-grow z-10 relative">
        <h3 
          className="text-2xl font-bold mb-3 transition-colors group-hover:text-[var(--accent-color)]" 
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {displayTitle}
        </h3>
        <p className="text-sm opacity-70 leading-relaxed mb-6 group-hover:opacity-0 transition-opacity duration-300">
          {displayDesc}
        </p>
      </div>

      {/* Tech Stack Footer */}
      <div className="mt-auto pt-6 border-t border-[var(--card-border)] flex flex-wrap gap-x-4 gap-y-2 z-10 relative group-hover:opacity-0 transition-opacity duration-300">
        {project.techStack.map((tech, index) => (
          <span key={index} className="text-xs font-mono text-[var(--accent-color)] opacity-80 font-semibold">
            {tech}
          </span>
        ))}
      </div>

      {/* Hidden Hover Overlay CTA */}
      <div className="absolute inset-0 bg-[var(--overlay-bg)] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
        <Link 
          to={`/projects/${project.id}`} 
          className="px-5 py-2 bg-[var(--cta-color)] text-white font-bold rounded shadow-lg shadow-[var(--accent-color)]/20 hover:scale-105 transition-transform"
        >
          {/* Using tCard here fixes the error! */}
          {tCard ? tCard.viewArch : "View Architecture ↗"} 
        </Link>
        
        {project.quickLinks?.github && (
          <a 
            href={project.quickLinks.github} 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 bg-[var(--btn-bg)] border border-[var(--card-border)] text-[var(--text-primary)] rounded hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-colors"
            title={tCard ? tCard.viewGithub : "View GitHub Repository"}
          >
            {/* SVG GitHub Icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
          </a>
        )}
      </div>
    </div>
  );
}