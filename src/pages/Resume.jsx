import data from "../data/data.json";
import ScrollSpy from "../components/ui/ScrollSpy";

export default function Resume() {
  const { resume } = data.portfolio;

  const sections = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Technical Skills" },
    { id: "experience", label: "Experience" },
    { id: "honors", label: "Honors & Recognition" },
    { id: "academic-projects", label: "Academic & Core Projects" }
  ];

  return (
    <div className="animate-fade-in text-left max-w-5xl mx-auto flex flex-col md:flex-row md:gap-12 mt-4 md:mt-12 gap-12 mt-12 mb-24 relative">
      
      <aside className="hidden md:block w-48 shrink-0">
        <ScrollSpy sections={sections} />
      </aside>

      {/* Right Column: Content */}
      <div className="flex-1 min-w-0">
        
        {/* Sleek Header & Action Bar */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 border-b border-[var(--card-border)] pb-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Curriculum Vitae
            </h1>
            <p className="text-[var(--accent-color)] font-mono text-sm">Jan Marte • Developer</p>
          </div>
          
          <div className="flex gap-3 mt-6 md:mt-0">
            <a 
              href="/Jan_Marte_Resume.pdf" 
              download 
              className="px-4 py-2 text-sm bg-[var(--cta-color)] text-white font-bold rounded shadow-lg shadow-[var(--accent-color)]/20 hover:scale-105 transition-transform flex items-center gap-2"
            >
              Download PDF ↓
            </a>
            <a 
              href="/Jan_Marte_Resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 text-sm bg-[var(--btn-bg)] border border-[var(--card-border)] hover:border-[var(--accent-color)] rounded transition-colors flex items-center gap-2"
            >
              Open in Tab ↗
            </a>
          </div>
        </div>

        <div className="space-y-24">
          
          {/* Education */}
          <section id="education" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 border-b border-[var(--card-border)] pb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Education</h2>
            {resume.education.map((edu, idx) => (
              <div key={idx} className="mb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-[var(--accent-color)]">{edu.degree}</h3>
                  <span className="text-sm font-mono opacity-70 mt-1 md:mt-0">{edu.date}</span>
                </div>
                <p className="text-lg font-semibold mb-4 opacity-90">{edu.school}</p>
                <ul className="list-disc list-inside space-y-2 opacity-80 pl-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Technical Skills */}
          <section id="skills" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 border-b border-[var(--card-border)] pb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Technical Skills</h2>
            <div className="grid grid-cols-1 gap-6 p-6 border border-[var(--card-border)] rounded-lg">
              {Object.entries(resume.skills).map(([category, skills]) => (
                <div key={category}>
                  <span className="font-bold text-[var(--accent-color)] block mb-1">{category}:</span>
                  <span className="opacity-80 leading-relaxed block">{skills}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 border-b border-[var(--card-border)] pb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Experience</h2>
            {resume.experience.map((job, idx) => (
              <div key={idx} className="mb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-[var(--accent-color)]">{job.role}</h3>
                  <span className="text-sm font-mono opacity-70 mt-1 md:mt-0">{job.date}</span>
                </div>
                <p className="text-lg font-semibold mb-4 opacity-90">{job.company}</p>
                <ul className="list-disc list-outside ml-5 space-y-2 opacity-80">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed pl-2">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Honors & Recognition */}
          <section id="honors" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 border-b border-[var(--card-border)] pb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Honors & Recognition</h2>
            {resume.honors.map((honor, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                  <h3 className="text-xl font-bold text-[var(--accent-color)]">{honor.title}</h3>
                  <span className="text-sm font-mono opacity-70 mt-1 md:mt-0">{honor.date}</span>
                </div>
                <p className="text-md font-semibold mb-2 opacity-90">{honor.organization}</p>
                <p className="opacity-80 leading-relaxed">{honor.description}</p>
              </div>
            ))}
          </section>

          {/* Academic Projects */}
          <section id="academic-projects" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 border-b border-[var(--card-border)] pb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Academic & Core Projects</h2>
            {resume.academicProjects.map((project, idx) => (
              <div key={idx} className="mb-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-[var(--accent-color)]">{project.title}</h3>
                  <span className="text-sm font-mono opacity-70 mt-1 md:mt-0">{project.date}</span>
                </div>
                <p className="text-sm font-mono text-gray-400 mb-4 bg-[var(--btn-bg)] inline-block px-2 py-1 rounded border border-[var(--card-border)]">{project.tech}</p>
                <ul className="list-disc list-outside ml-5 space-y-2 opacity-80">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed pl-2">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

        </div>
      </div>
    </div>
  );
}