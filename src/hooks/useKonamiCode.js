import { useState, useEffect } from "react";

export default function useKonamiCode() {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    // The exact Konami Code sequence (lowercased for safety against CapsLock)
    const konamiSequence = [
      "arrowup", "arrowup", "arrowdown", "arrowdown", 
      "arrowleft", "arrowright", "arrowleft", "arrowright", 
      "b", "a"
    ];
    
    let keyIndex = 0;

    const handleKeyDown = (e) => {
      // If they already triggered it, ignore further keystrokes
      if (isTriggered) return;

      const key = e.key.toLowerCase();

      if (key === konamiSequence[keyIndex]) {
        keyIndex++;
        // If they completed the entire sequence successfully
        if (keyIndex === konamiSequence.length) {
          setIsTriggered(true);
          keyIndex = 0; // Reset
        }
      } else {
        // If they mess up, reset the sequence back to the start
        keyIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTriggered]);

  return isTriggered;
}