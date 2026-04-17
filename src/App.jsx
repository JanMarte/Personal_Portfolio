import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Uses from "./pages/Uses";
import ProjectDeepDive from "./pages/ProjectDeepDive";
import HackerTerminal from "./components/ui/HackerTerminal";
import { useState, useEffect } from "react";
import useKonamiCode from "./hooks/useKonamiCode";

console.log("%c>_ System secured. Press the ` (backtick) key for manual override.", "color: #c084fc; font-size: 14px; font-weight: bold;");
console.log("%c>_ Need 30 lives? You know the code.", "color: #ef4444; font-size: 12px; font-family: monospace;");

function App() {
  const isKonamiTriggered = useKonamiCode(); 
  const [showKonamiModal, setShowKonamiModal] = useState(false);

  // 1. Trigger the Custom Modal instead of the browser alert
  useEffect(() => {
    if (isKonamiTriggered) {
      setShowKonamiModal(true);
    }
  }, [isKonamiTriggered]);

  // 2. The function that runs when they click the button inside the modal
  const launchCountermeasures = () => {
    setShowKonamiModal(false); // Hide the modal

    // Inject the script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://erkie.github.io/asteroids.min.js";
    
    script.onload = () => {
      // Force the browser to focus on the body so WASD works immediately
      setTimeout(() => {
        window.focus();
        document.body.focus();
      }, 100);
    };

    document.body.appendChild(script);
  };

  return (
    <LanguageProvider> 
      <Router>
        <div className="min-h-screen w-full overflow-x-clip bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative">
          
          {/* THE NEW CUSTOM MODAL */}
          {showKonamiModal && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
              <div className="bg-[#111] border border-red-500/50 p-8 rounded-lg max-w-md w-full shadow-[0_0_50px_rgba(239,68,68,0.2)] text-center relative overflow-hidden">
                {/* Warning Header */}
                <div className="text-red-500 font-bold tracking-widest mb-4 flex items-center justify-center gap-2">
                  <span className="animate-pulse">⚠️</span> SECURITY BREACH DETECTED <span className="animate-pulse">⚠️</span>
                </div>
                
                {/* Instructions */}
                <p className="text-gray-300 font-mono text-sm mb-6 leading-relaxed">
                  Unauthorized access granted. Deploying countermeasures. 
                  <br/><br/>
                  Controls: <span className="text-white font-bold">W, A, S, D</span> to fly. <br/>
                  Weapon: <span className="text-white font-bold">SPACEBAR</span> to fire.
                  <br/><br/>
                  <span className="text-xs text-gray-500">(Press F5 / Refresh to restore the site architecture when finished).</span>
                </p>

                {/* Launch Button */}
                <button 
                  onClick={launchCountermeasures}
                  className="w-full py-3 bg-red-600/20 border border-red-500 text-red-400 font-bold tracking-widest rounded hover:bg-red-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                >
                  INITIATE OVERRIDE
                </button>
              </div>
            </div>
          )}

          <HackerTerminal />

          <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/uses" element={<Uses />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects/:id" element={<ProjectDeepDive />} />
              </Routes>
            </main>

            <Footer />
          </div>

        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;