import { Link } from "react-router-dom";
import ProjectCard from "../components/sections/ProjectCard";
import data from "../data/data.json";
import { useLanguage } from "../context/LanguageContext"; 

export default function Home() {
  const projects = data.portfolio.projects;
  const { lang } = useLanguage(); 
  
  // Grab the Spanish translations for the Home page
  const t = lang === 'es' ? data.portfolio.i18n.es.home : null;
  const i18n = data.portfolio.i18n.es; // For the hero text we used earlier

  return (
    <div className="animate-fade-in text-left">
      {/* Hero Section */}
      <section className="mt-12 mb-24 max-w-4xl">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold rounded-full border border-[var(--accent-color)] text-[var(--accent-color)] bg-[var(--cta-color)]/10 transition-all duration-300">
          {t ? t.available : "🟢 Available for roles starting May 2026"}
        </div>
        
        <h1 
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 transition-all duration-300"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {lang === 'es' ? i18n.heroTitle : (
            <>Engineering high-impact tools for <span className="text-[var(--accent-color)]">real-world workflows.</span></>
          )}
        </h1>
        
        <p className="text-lg md:text-xl opacity-80 max-w-2xl leading-relaxed mb-10 transition-all duration-300">
          {lang === 'es' ? i18n.heroSub : "Full-Stack Developer bridging modern frontend experiences with robust backend architecture. Specializing in React, C#, and Java to transform manual workflows into scalable digital solutions."}
        </p>

        <div className="flex gap-4">
          <Link to="/about" className="px-6 py-3 bg-[var(--cta-color)] text-white font-bold rounded shadow-lg shadow-[var(--accent-color)]/20 hover:scale-105 transition-transform">
            {t ? t.whoAmI : "Who I Am"}
          </Link>
          <Link to="/resume" className="px-6 py-3 border border-[var(--card-border)] hover:border-[var(--accent-color)] rounded transition-colors bg-[var(--btn-bg)] font-bold">
            {t ? t.viewResume : "View Resume"}
          </Link>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold transition-all duration-300" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {t ? t.featuredArch : "Featured Architecture"}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}