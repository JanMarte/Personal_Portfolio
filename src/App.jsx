import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext"; // ADD THIS
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Uses from "./pages/Uses";
import ProjectDeepDive from "./pages/ProjectDeepDive";
import HackerTerminal from "./components/ui/HackerTerminal";

function App() {
  return (
    <LanguageProvider> 
      <Router>
        {/* ADDED: overflow-x-hidden w-full to physically prevent horizontal scrolling */}
        <div className="min-h-screen w-full overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative">
          
          <HackerTerminal />

          <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col min-h-screen">
            <Navbar />
            
            {/* ADDED: w-full to ensure the main content doesn't break the flexbox */}
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