import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanity';
import { Fade } from "react-awesome-reveal";

const Skills = () => {
    const [skillsData, setSkillsData] = useState([]);

    const getSkillsData = async () => {
        return await client.fetch(`*[_type == "skills"] | order(_createdAt asc)`)
    }

    useEffect(() => {
        getSkillsData().then((data) => {
            setSkillsData(data)
        }).catch((error) => {
            console.log("error fetching skills: ", error)
        })
    }, [])

    return (
        <section className='max-w-5xl mx-auto'>
            <Fade direction="down" triggerOnce>
                <h3 className="tracking-[20px] mx-auto text-center mb-14 uppercase text-gray-400 text-4xl">
                    Skills
                </h3>
            </Fade>

            {skillsData.length > 0 && (
                skillsData.map((category) => (
                    <div key={category} className="mb-4">
                        <Fade direction="up" triggerOnce>
                            <div className="flex items-center content-start mb-2">
                                <span className="mx-2 text-gray-400">{category.categoryName}</span>
                                <hr className="flex-grow border-gray-800" />
                            </div>
                            <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                                {category.skillsItems.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="skill-card"
                                        style={{ backgroundImage: `url('${urlFor(skill.image).url()}')` }}
                                    >
                                        <span className='w-screen bg-gray-700 opacity-50 dark:opacity-70 px-2 py-3 md:p-5 rounded-xl '>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Fade>
                    </div>
                ))
            )}
        </section>
    );
};

export default Skills;