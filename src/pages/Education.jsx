import React from "react";
import EducationCard from "../components/EducationCard";

const Education = () => (
  <section className="max-w-5xl mx-auto">
    <h2 className="text-5xl font-bold text-center my-12 ">MY TIMELINE</h2>
    {/* <h2 className="text-4xl font-bold m-12">EDUCATION</h2> */}
    <div className=" gap-6 flex flex-col">
      
        <EducationCard />
      
    </div>
  </section>
);

export default Education;