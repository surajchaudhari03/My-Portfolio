import React, { useState, useEffect } from "react";
import EducationCard from "../components/EducationCard";
import { client } from "../sanity";
import Certificates from "../components/Certificates";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  const getDetailsData = async () => {
    return await client.fetch(`*[_type == "education"] | order(_createdAt desc) {
      title,
      institution,
      duration,
      type,
      logo
    }`)
  }

  useEffect(() => {
    getDetailsData().then((data) => {
      setEducationData(data)
    }).catch((error) => {
      console.log("error fetching education: ", error);
    })
  }, [])

  return (
    <section className='max-w-5xl mx-auto'>
      <Fade direction="down" triggerOnce>
        <h3 className="tracking-[10px] md:tracking-[20px] mx-auto text-center mb-14 uppercase text-gray-400 text-4xl">
          Education
        </h3>
      </Fade>

      <div className="grid md:grid-cols-2 gap-12">
        {educationData.length > 0 && (
          <EducationCard educationData={educationData} />
        )}
      </div>

      <Certificates />
    </section>
  )
};

export default Education;