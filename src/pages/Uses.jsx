import data from "../data/data.json";
import ScrollSpy from "../components/ui/ScrollSpy";

export default function Uses() {
  const { uses } = data.portfolio;

  const sections = [
    { id: "hardware", label: "Hardware & Gear" },
    { id: "software", label: "Software & IDEs" },
    { id: "vibe", label: "Workflow & Vibe" }
  ];

  return (
    <div className="animate-fade-in text-left max-w-5xl mx-auto flex flex-col md:flex-row md:gap-12 mt-4 md:mt-12 gap-12 mt-12 mb-24 relative">
      
      <aside className="hidden md:block w-48 shrink-0">
        <ScrollSpy sections={sections} />
      </aside>

      {/* Right Column: Content */}
      <div className="flex-1 min-w-0 space-y-24">
        
        {/* Page Header */}
        <div className="mb-12 border-b border-[var(--card-border)] pb-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            The Engine Room
          </h1>
          <p className="text-lg opacity-80 leading-relaxed max-w-2xl">
            A comprehensive list of my hardware, software, and daily setup. This is the gear I use to architect full-stack applications and automate business workflows.
          </p>
        </div>
        
        {/* Hardware Section */}
        <section id="hardware" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            💻 Hardware & Gear
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {uses.hardware.map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] backdrop-blur-sm hover:border-[var(--accent-color)]/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="text-[var(--accent-color)] mt-1">
                    {/* Minimal SVG Chevron */}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                  <span className="opacity-90 font-medium leading-relaxed">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Software Section */}
        <section id="software" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            ⚡ Software & IDEs
          </h2>
          <div className="flex flex-wrap gap-4">
            {uses.software.map((item, idx) => (
              <div 
                key={idx} 
                className="px-6 py-3 border border-[var(--card-border)] rounded-full bg-gray-900/10 dark:bg-black/20 text-lg font-bold opacity-90 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Workflow & Vibe Section */}
        <section id="vibe" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            🎧 Workflow & Vibe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Fuel Card */}
            <div className="p-8 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2 text-[var(--accent-color)]">The Fuel</h3>
              <p className="opacity-80 text-lg">{uses.vibe.fuel}</p>
            </div>

            {/* Soundtrack Card */}
            <div className="p-8 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2 text-[var(--accent-color)]">The Soundtrack</h3>
              <p className="opacity-80 text-lg">{uses.vibe.music}</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}