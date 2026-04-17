import { useState, useEffect, useRef } from "react";
import data from "../../data/data.json";

export default function HackerTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "J.MARTE SECURE TERMINAL v1.0.0",
    "Type 'help' to view available commands.",
  ]);
  const inputRef = useRef(null);
  
  const { commands } = data.portfolio.terminal;

  // Toggle terminal with the backtick (`) key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus the input when the terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, `> ${input}`];

      // ACTION COMMANDS
      if (cmd === "clear") {
        setHistory(["J.MARTE SECURE TERMINAL v1.0.0"]);
        setInput("");
        return; // Stop here so it doesn't add the clear command to history
      } 
      
      else if (cmd === "help") {
        newHistory.push("Available commands: whoami, skills, contact, resume, matrix, coffee, theme, clear, exit, sudo");
      } 
      
      else if (cmd === "exit") {
        setIsOpen(false);
      } 
      
      else if (cmd === "resume") {
        newHistory.push("Downloading classified document: Jan_Marte_Resume.pdf...");
        // This programmatically triggers your PDF download!
        const link = document.createElement('a');
        link.href = '/Jan_Marte_Resume.pdf';
        link.download = 'Jan_Marte_Resume.pdf';
        link.click();
      }

      else if (cmd === "theme") {
        newHistory.push("Bypassing mainframe... Executing global theme override.");
        // This physically clicks your theme toggle button!
        document.documentElement.setAttribute(
          "data-theme", 
          document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"
        );
      }

      // TEXT COMMANDS (From JSON)
      else if (commands[cmd]) {
        // If the JSON contains newline characters (\n), split them into separate lines
        const lines = commands[cmd].split('\n');
        newHistory.push(...lines);
      } 
      
      else if (cmd !== "") {
        newHistory.push(`Command not found: ${cmd}. Type 'help' for available commands.`);
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full bg-[#0a0a0a] text-emerald-400 font-mono text-sm z-[100] border-t-2 border-[var(--accent-color)] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ height: "40vh" }}
    >
      {/* Terminal Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#1a1a1a] border-b border-gray-800">
        <span className="font-bold text-gray-400">user@jmarte-server:~</span>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          [ CLOSE ]
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-[calc(100%-40px)] overflow-y-auto flex flex-col gap-2">
        {history.map((line, idx) => (
          <div key={idx} className={line.startsWith(">") ? "text-white" : "text-emerald-400"}>
            {line}
          </div>
        ))}
        
        <div className="flex gap-2 items-center mt-2">
          <span className="text-[var(--accent-color)] font-bold">➜</span>
          <span className="text-blue-400 font-bold">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0"
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}