import React, { createContext, useState, useContext, useEffect } from 'react';

// Créer le contexte de langue
const LanguageContext = createContext();

// Le provider qui enveloppe l'application et gère la langue
export const LanguageProvider = ({ children }) => {
  // Initialiser la langue à partir du localStorage ou par défaut 'fr'
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr');

  // Sauvegarder la langue choisie dans le localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Changer la langue
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Un hook pour accéder au contexte de langue
export const useLanguage = () => {
  return useContext(LanguageContext);
};
