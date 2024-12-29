import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BuildIcon from '@mui/icons-material/Build';

const CarouselItem = ({ project, language }) => {
  const { id, title, description, tags, images } = project;
  
  return (
    <Link
      to={`/project/${id}/`}
      className="relative flex flex-none w-full h-full bg-cover bg-center items-center justify-center overflow-hidden cursor-pointer"
      style={{ backgroundImage: `url(${images[0].src})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]"></div>
      <div className="relative z-[2] text-white m-20 flex flex-col flex-wrap gap-3">
        <h2 className="text-4xl font-extrabold m-0">{title}</h2>
        <p className="text-lg">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="bg-white/20 px-3 py-1 rounded text-lg flex items-center gap-2">
               {((tag === "EN COURS") || (tag === "IN PROGRESS")) && <BuildIcon className='text-xs' />} {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CarouselItem;
