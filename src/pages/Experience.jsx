import React, { useState, useEffect } from 'react';
import { client } from '../sanity'
import ExperienceCard from '../components/ExperienceCard';
import { Fade } from "react-awesome-reveal";

async function getExperienceData() {
    return await client.fetch(`*[_type == "experience"]`)
}

const Experience = () => {
    const [experienceData, setExperienceData] = useState([]);

    useEffect(() => {
        getExperienceData().then((data) => {
            setExperienceData(data)
            console.log(data)
        }).catch((error) => {
            console.log("error fetching experience: ", error)
        })
    }, [])

    return (
        <section className='max-w-5xl mx-auto'>
            <Fade direction="down" triggerOnce>
                <h3 className="tracking-[10px] md:tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-4xl">
                    Experience
                </h3>
            </Fade>

            {experienceData.length > 0 && (
                <ExperienceCard experience={experienceData} />
            )}
        </section>
    )
}

export default Experience;