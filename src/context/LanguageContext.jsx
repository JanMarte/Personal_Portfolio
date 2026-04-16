import { createContext, useState, useContext } from 'react';

// Create the Context
const LanguageContext = createContext();

// Create the Provider Component
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to easily use the context in any file
export const useLanguage = () => useContext(LanguageContext);