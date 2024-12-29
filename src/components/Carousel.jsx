import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion, useInView } from 'framer-motion';
import CarouselItem from './CarouselItem';

const Carousel = ({ projects, onColorChange, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 }); // L'élément doit être au moins à 20% visible

  const [hasBeenInView, setHasBeenInView] = useState(false); // State to lock visibility

  // Lock visibility when the carousel enters the viewport
  useEffect(() => {
    if (isInView) {
      setHasBeenInView(true); // Once visible, lock visibility
    }
  }, [isInView]);

  useEffect(() => {
    if (onColorChange && projects[currentIndex]) {
      onColorChange(projects[currentIndex].color); // Pass the current project's color
    }
  }, [currentIndex, projects, onColorChange]);
  // Detect screen size
  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind "md" breakpoint
    };

    updateScreenSize(); // Set initial value
    window.addEventListener('resize', updateScreenSize); // Listen for window resize
    return () => window.removeEventListener('resize', updateScreenSize); // Cleanup
  }, []);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  // Define swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: isSmallScreen ? handleNext : undefined, // Only swipe on small screens
    onSwipedRight: isSmallScreen ? handlePrev : undefined,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      className="w-full"

    >
      <h2 className="text-4xl font-bold">{language === 'fr' ? 'Mes projets' : 'My Projects'}</h2>
      <motion.div
        initial={{ opacity: 0 }} // Starting state: invisible
        animate={hasBeenInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }} // Smooth fade-in over 1 second
        className="rounded-xl relative overflow-x-hidden w-full h-[90vh]"
        {...swipeHandlers} // Add swipe handlers unconditionally
      >
        <div
          className="overflow-visible flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <CarouselItem key={project.id} project={project} language={language} />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className={" absolute top-2/4 translate-y-[-50%] bg-transparent text-white text-[4rem] cursor-pointer z-[3] p-3 left-3"}
          ref={ref}
        ></div>
        <button
          className={`hidden min-[390px]:block absolute top-2/4 translate-y-[-50%] bg-transparent text-white text-[4rem] cursor-pointer z-[3] p-3 left-3 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          onClick={handlePrev}
          aria-label="Slide précédent"
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <button
          className={`hidden min-[390px]:block absolute top-2/4 translate-y-[-50%] bg-transparent text-white text-[4rem] cursor-pointer z-[3] p-3 right-3 ${currentIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          onClick={handleNext}
          aria-label="Slide suivant"
          disabled={currentIndex === projects.length - 1}
        >
          &gt;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-5 left-2/4 translate-x-[-50%] flex gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 cursor-pointer rounded-full ${index === currentIndex ? 'bg-white' : 'bg-slate-300'
                }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel;
