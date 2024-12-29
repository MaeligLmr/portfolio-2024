import React, { useRef, useState, useEffect } from 'react';
import Etoile from './Etoile';
import projectsFr from '../projects';
import projectsEn from '../projects.en.js'
import Carousel from './Carousel';
import Email from './Email';
import CV from './CV';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../langageContext.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Accueil = () => {
  const { language, changeLanguage } = useLanguage(); // Récupérez la langue et la fonction pour la changer

  const [projects, setProjects] = useState(projectsFr);

  useEffect(() => {
    // Mettre à jour les projets en fonction de la langue
    setProjects(language === 'fr' ? projectsFr : projectsEn);
  }, [language]);


  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 }); // L'élément doit être au moins à 20% visible
  const [colorP, setColorP] = useState('#6aaa6a');

  const handleColorChange = (colorP) => {
    setColorP(colorP);
  };
  return (

    <>
    <main className="flex flex-col justify-center p-4 gap-4">
      <div className="flex justify-between">
        
        <h1 className="text-4xl sm:text-6xl relative font-extrabold m-2">
          {language === 'fr' ? 'Mon Portfolio' : 'My Portfolio'}

        </h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full gap-1 bg-slate-100 p-1">
            {/* Bouton Toggle */}
            <button
              onClick={() => changeLanguage('fr')}
              style = {{backgroundColor : language === 'fr' ? colorP : '#f1f5f9 ', 
                color : language === 'fr' ? (colorP === '#FFD900' ? 'black' : 'white') : '#5d5f63'
              }}
              className={`w-8 h-8 rounded-full text-white transition-colors duration-300 
          `}
            >
              Fr
            </button>
            <button
              onClick={() => changeLanguage('en')}
              style = {{backgroundColor : language === 'en' ? colorP : '#f1f5f9 ', 
                color : language === 'en' ? (colorP === '#FFD900' ? 'black' : 'white') : '#5d5f63'
              }}
              className={`w-8 h-8 rounded-full text-white transition-colors duration-300`}            >
              En
            </button>
          </div>

        </div>
      </div>
      <div className=" flex flex-col sm:flex-row gap-4 flex-nowrap justify-between items-center box-border">
        <div id="photo" className='w-2/3 sm:w-1/4 flex justify-center items-center'>
          <img src='/images/maelig-lamarre.svg' className='rounded-xl'></img>
        </div>
        <div id="presentation" className={`p-4 w-full sm:w-3/4 text-lg overflow-hidden rounded-xl flex flex-col justify-center`} 
        style={{ backgroundColor: colorP + '33' }}>
          <motion.p

            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >{language === 'fr' ? (
            <>
              Bonjour, je m’appelle <strong>Maëlig</strong> ! Actuellement en troisième année de BUT Métiers du Multimédia et de l’Internet (<strong>MMI</strong>), je suis à la recherche d’un <strong>stage</strong> de 15 semaines, disponible à partir du 31 mars. Ma formation m’a permis d’explorer et de maîtriser des compétences variées, notamment en <strong>développement web</strong>, tout en me formant à des savoir-faire essentiels comme la gestion de projet, le travail en équipe et l’autonomie.
            </>) :
            <>Hello, my name is <strong>Maëlig</strong>! I am currently in my third year of a Bachelor of Technology in Multimedia and Internet Professions (<strong>MMI</strong>), and I am looking for a <strong>15-week internship</strong>, available starting March 31. My education has allowed me to explore and master various skills, particularly in <strong>web development</strong>, while also training me in essential abilities such as project management, teamwork, and autonomy.
            </>}</motion.p>

          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            {language === 'fr' ? (
              <>Curieuse et motivée, j’aime relever des défis et découvrir de nouvelles façons de m’investir dans des projets passionnants. Je serais ravie de mettre mes compétences et mon enthousiasme au service de votre équipe. Bienvenue sur mon <strong>portfolio</strong>, et bonne découverte de mon univers !
              </>)
              : (<>
                Curious and motivated, I enjoy taking on challenges and discovering new ways to engage in exciting projects. I would be delighted to bring my skills and enthusiasm to your team. Welcome to my <strong>portfolio</strong>, and enjoy discovering my world!
              </>)}

          </motion.p>





        </div>
      </div>
      <div><Carousel projects={projects} language={language} onColorChange={handleColorChange} /></div>
      <CV language={language} color={colorP}></CV>
      <div ><Email language={language} color={colorP}></Email></div>
    </main>
    <footer className="mt-8 p-4 bg-gray-100 text-gray-700">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <p>Email: <a href="mailto:maelig.lamarre49@gmail.com" style={{color : colorP}}>maelig.lamarre49@gmail.com</a></p>
      <p>
        <a href="https://www.linkedin.com/in/ma%C3%ABlig-lamarre-aa9351258/" target="_blank" rel="noopener noreferrer" style={{color : colorP}} className="flex items-center">
          <LinkedInIcon className="mr-2" /> {language === "fr" ? "Mon LinkedIn" : "My Linkedin"}
        </a>
      </p>
      <p>Téléphone: <a href="tel:+33645921143" style={{color : colorP}}>+33 6 45 92 11 43</a></p>
    </div>
  </footer>
  </>

  );
};

export default Accueil;
