import { useState, useEffect } from "react";

export default function ScrollSpy({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" } 
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-32 hidden md:flex flex-col gap-4 pl-4 border-l-2 border-[var(--card-border)] relative">
      {/* The Dynamic Tracking Line */}
      <div 
        className="absolute left-[-2px] w-[2px] bg-[var(--cta-color)] transition-all duration-300 ease-out"
        style={{
          /* Fixed Math: 40px (h-10) + 16px (gap-4) = 56px per step */
          top: `${Math.max(0, sections.findIndex(s => s.id === activeSection)) * 56}px`,
          height: '24px',
          marginTop: '8px'
        }}
      />
      
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`h-10 flex items-center text-sm font-bold tracking-wide transition-colors duration-300 ${
            activeSection === id ? "text-[var(--accent-color)]" : "text-[var(--text-primary)] opacity-50 hover:opacity-100"
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}