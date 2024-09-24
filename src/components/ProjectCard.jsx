import React from "react";
import ProjectData from '../details.json';

const ProjectCard = () => {
  return (
    <>
      {ProjectData.projects.map((card, index) => (
        <div key={index} className="w-72 border border-gray-300 dark:border-gray-700 rounded-lg p-4 text-sm">
          <div className="flex items-center space-x-2 mb-4">
            <img src={card.logo} alt="Logo" className="w-10 h-10 rounded-full" width="40" height="40" />
            <a href={card.githubUrl}>🔗</a>
          </div>

          <h2 className="text-xl font-bold mb-2">{card.title}</h2>

          {/* <div className="flex items-center text-gray-400 mb-2">
            <i className="fas fa-users mr-2"></i>
            <span>{card.type}</span>
          </div> */}

          {/* <div className="flex items-center text-gray-400 mb-4">
            <i className="fas fa-clock mr-2"></i>
            <span>{card.year}</span>
          </div> */}

          {/* <p className="text-gray-400 mb-4">{card.description}</p>    */}

          <div className="flex space-x-2 mt-4">
            {card.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-400 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;