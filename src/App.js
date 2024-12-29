import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil'; // Page d'accueil
import FicheDesc from './components/FicheDesc';
import { LanguageProvider } from './langageContext';

function App() {

  return (
    <LanguageProvider>

    <Router>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Accueil />} />

        {/* Route pour la page projet avec un id dynamique */}
        <Route path="/project/:id/" element={<FicheDesc />} />
      </Routes>
    </Router>
    </LanguageProvider>
  );
}

export default App;
