import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => (
  <section className="max-w-5xl mx-auto ">
    <h2 className="text-5xl font-bold text-center my-12 "> MY PROJECTS</h2>
    <div className="gap-6 flex flex-wrap justify-center p-4">
      
        <ProjectCard />
      
    </div>
  </section>
);

export default Projects;