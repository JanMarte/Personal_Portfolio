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

        <div className="flex flex-col gap-8">
          {/* Main Action Buttons */}
          <div className="flex gap-4">
            <Link to="/about" className="px-6 py-3 bg-[var(--cta-color)] text-white font-bold rounded shadow-lg shadow-[var(--cta-color)]/20 hover:scale-105 transition-transform">
              {t ? t.whoAmI : "Who I Am"}
            </Link>
            <Link to="/resume" className="px-6 py-3 border border-[var(--card-border)] hover:border-[var(--accent-color)] rounded transition-colors bg-[var(--btn-bg)] font-bold">
              {t ? t.viewResume : "View Resume"}
            </Link>
          </div>

          {/* Professional Social Links */}
          <div className="flex items-center gap-5 pl-1">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/janmmarte/" target="_blank" rel="noreferrer" className="text-[var(--text-primary)] opacity-70 hover:opacity-100 hover:text-[var(--accent-color)] transition-all hover:-translate-y-1" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/JanMarte" target="_blank" rel="noreferrer" className="text-[var(--text-primary)] opacity-70 hover:opacity-100 hover:text-[var(--accent-color)] transition-all hover:-translate-y-1" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>

            {/* Email */}
            <a href="mailto:janmmarte16@gmail.com" className="text-[var(--text-primary)] opacity-70 hover:opacity-100 hover:text-[var(--accent-color)] transition-all hover:-translate-y-1" aria-label="Email">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
            </a>
          </div>
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