import React from "react";
import { urlFor } from "../sanity";
import { Icon } from '@iconify/react'
import { Fade } from "react-awesome-reveal";

const ProjectCard = ({ projectsData }) => {
  return (
    <>
      {projectsData.map((card, index) => (
        <Fade direction="up" triggerOnce>
          <div key={index} className="w-76 min-h-full border border-gray-300 dark:border-gray-700 rounded-lg p-4 text-sm">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={urlFor(card.image).url()}
                alt="Logo"
                className="w-10 h-10 rounded-full" width="40" height="40"
              />
              <a href={card.githubUrl}>🔗</a>
            </div>

            <h2 className="text-xl text-slate-600 dark:text-slate-400 font-bold mb-2">{card.title}</h2>

            <div className="flex space-x-2 mt-4">
              {card.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-200 dark:bg-gray-700 text-2xl p-2 rounded-full">
                  <Icon icon={tech.class} />
                  {/* <p className="text-xs text-gray-400">{tech.name}</p> */}
                </span>
              ))}
            </div>
          </div>
        </Fade>
      ))}
    </>
  );
}

export default ProjectCard;