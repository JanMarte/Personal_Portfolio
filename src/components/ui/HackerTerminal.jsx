import { useState, useEffect, useRef } from "react";
import data from "../../data/data.json";

export default function HackerTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "J.MARTE OS v1.0.0 initialized." },
    { type: "system", text: "Type 'help' to view available commands." }
  ]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const { commands } = data.portfolio.terminal;

  // Toggle terminal globally
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "`") {
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus input when opened & auto-scroll to bottom
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      let response = "";

      switch (cmd) {
        case "help":
          response = "Available commands: whoami, skills, quote, quote2, quote3, sudo, clear";
          break;
        case "whoami":
          response = "Jan Marte. Full-Stack Developer. Builder of tools for the community.";
          break;
        case "skills":
          response = "Java, C#, React, PostgreSQL, Supabase, Tailwind, Spring Boot.";
          break;
        case "quote":
          response = commands.quote;
          break;
        case "quote2":
          response = commands.quote2;
          break;
        case "quote3":
          response = commands.quote3;
          break;
        case "sudo":
          response = "Nice try. Admin privileges required. This incident will be reported.";
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "":
          setInput("");
          return;
        default:
          response = `Command not found: ${cmd}. Type 'help' for available commands.`;
      }

      setHistory((prev) => [
        ...prev,
        { type: "user", text: `user@jmarte:~$ ${cmd}` },
        { type: "system", text: response }
      ]);
      setInput("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 animate-slide-down">
      <div className="bg-black/90 backdrop-blur-xl border-b border-[var(--accent-color)]/50 text-[#10B981] font-mono text-sm p-6 shadow-2xl shadow-[var(--accent-color)]/10 h-80 flex flex-col">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-800">
          <span className="font-bold">Terminal Access - Press Ctrl + ` to close</span>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">✕</button>
        </div>
        
        <div ref={terminalRef} className="flex-1 overflow-y-auto space-y-2 mb-4 scrollbar-hide">
          {history.map((line, i) => (
            <div key={i} className={line.type === "user" ? "text-gray-300" : "text-[var(--accent-color)]"}>
              {line.text}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-300">user@jmarte:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-[#10B981]"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}