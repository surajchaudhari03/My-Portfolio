import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { client } from "../sanity";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  const getExperienceData = async () => {
    return await client.fetch(`*[_type == "projects"] | order(title asc) {
      title,
      image,
      githubUrl,
      projectUrl,
      technologies
    }`)
  }

  useEffect(() => {
    getExperienceData().then((data) => {
      setProjectsData(data)
    }).catch((error) => {
      console.log("error fetching projects: ", error)
    })
  }, [])

  return (
    <section className='max-w-5xl mx-auto'>
      <Fade direction="down" triggerOnce>
        <h3 className="tracking-[18px] mx-auto text-center mb-14 uppercase text-gray-400 text-4xl">
          Projects
        </h3>
      </Fade>
      <div className="grid md:grid-cols-3 justify-center gap-4">
        {projectsData.length > 0 && (
          <ProjectCard projectsData={projectsData} />
        )}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-[#cbd5e1] bg-slate-700 hover:bg-slate-600 dark:hover:bg-slate-600 duration-500">More Projects</button>
      </div>
    </section>
  )
};

export default Projects;