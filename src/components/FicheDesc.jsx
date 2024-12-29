import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import projectsFr from '../projects';
import projectsEn from '../projects.en';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import BuildIcon from '@mui/icons-material/Build';
import { useLanguage } from '../langageContext';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // Icône de lien externe


const FicheDesc = () => {
  const { id } = useParams();
  const ref = useRef(null);

  const { language } = useLanguage(); 
  const [project, setProject] = useState(null);
  const [mainImage, setMainImage] = useState(null);
 // const isInView = useInView(ref, { threshold: 0.2 }); 

 // const [hasBeenInView, setHasBeenInView] = useState(false); 
   
  useEffect(() => {
    const fetchedProject = language === 'fr'
      ? projectsFr.find((project) => project.id === id)
      : projectsEn.find((project) => project.id === id);

    setProject(fetchedProject);
    if (fetchedProject) {
        if (!fetchedProject.images[0].icon) {setMainImage(fetchedProject.images[0])}
         else {setMainImage(fetchedProject.images[1])}
    }; 
  }, [language, id]);
  //** 
  // useEffect(() => {
  //  if (isInView) {
   //   setHasBeenInView(true); 
    // 
   //  }
 // }, [isInView]); */
   
   

  if (!project) {
    return <p>Projet introuvable</p>;
  }

  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <header
        className="flex justify-between p-5"
        style={{
          backgroundColor: project.color,
          color: project.color === '#FFD900' ? 'black' : 'white',
        }}
      >
        <Link to={`/`}>
          <IconButton>
            <ArrowBack
              className={project.color === '#FFD900' ? 'text-black' : 'text-white'}
            />
          </IconButton>
        </Link>

        <motion.h1
          className="text-3xl font-bold"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {project.title}
        </motion.h1>
      </header>
      <div className="p-5 flex flex-col justify-center align-middle gap-4">
        <motion.p
          className="text-xl mb-5 flex gap-2 items-center"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
        >
                    {(project.images[0].icon) && (<img src={project.images[0].src} alt={project.images[0].alt} className='h-10 w-10'></img>) }

          {project.description}
        </motion.p>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className="flex gap-2 flex-wrap"
        >
          {project.tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-gray-200 px-3 py-1 rounded text-lg flex items-center gap-2"
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
            >
              {((tag === 'EN COURS') || (tag === 'IN PROGRESS')) && <BuildIcon className="text-xs" />}
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-lg"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          {project.presentation}
        </motion.p>
        {project.links && (
          <ul className="">
            {project.links.map((link, index) => (
              <li
              key={index}>
              <motion.a
                href={link.ref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg  underline relative "
                style={{color : project.color}}
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
              >
                {link.text}
                <OpenInNewIcon
                className="absolute top-0 right-0 transform translate-x-2/3 scale-50 -translate-y-1/3"
 />
              </motion.a>
              </li>
            ))}
          </ul>
        )}
      </div>
      

      {/* Section pour l'image principale et les miniatures */}
      <motion.div
              initial={{ opacity: 0 }} // Starting state: invisible
              ref={ref}
              animate={ { opacity: 1 } }
              transition={{ duration: 1.5, ease: 'easeOut',delay : 0.9 }} 
              className="p-4 flex flex-col gap-4">
        {/* Image principale */}
        {mainImage && (
          <div className="w-full p-4 flex justify-center rounded-xl" style={{backgroundColor : project.color + 33}}>
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              className="w-auto h-auto rounded-lg object-cover max-h-[70vh]"
            />
          </div>
        )}

        {/* Miniatures */}
        <div className="flex gap-2 overflow-x-auto sm:justify-center">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              style={{
                border: mainImage === image ? `4px solid ${project.color}` : '1px solid #d1d5db',
              }}
              className={`cursor-pointer rounded-lg w-24 h-24 object-cover `}
              onClick={() => setMainImage(image)} // Au clic, définir cette image comme principale
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default FicheDesc;
