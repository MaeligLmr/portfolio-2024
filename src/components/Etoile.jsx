import React, { useEffect, useState } from 'react';
import '../App.css'; // Style séparé pour l'étoile et la ligne

const Etoile = () => {
  const [starPosition, setStarPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / pageHeight;

      // Hauteur de la ligne où l'étoile doit se déplacer
      const lineHeight = document.querySelector('.line').clientHeight;

      const newPosition = Math.min(scrolled * lineHeight, lineHeight - 50); 

      setStarPosition(newPosition);
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator">
<img
alt="scroll"
src='/images/etoile.png'
        className="star" 
        style={{ top: `${starPosition }px` }} 
      />     <div className="line"></div>
    </div>
  );
};

export default Etoile;
