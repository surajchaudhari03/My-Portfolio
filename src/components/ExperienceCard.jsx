import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ExperienceCard = ({ experience }) => {
    return (
        <>
            <Fade direction="up" triggerOnce>
                <div className="mt-20">
                    {experience?.map((item, index) => (
                        <div key={index} className="flex flex-col mb-4 gap-4 h-full md:flex-row">

                            <div className="flex items-center justify-center bg-slate-300 rounded-lg shadow-md mx-4 dark:bg-slate-700 ">
                                <img
                                    className="rounded-full w-44 mx-auto"
                                    src={item?.image} alt='experience'
                                />
                            </div>
                            
                            <div className="hidden md:flex flex-col items-center gap-2">
                                <i className='fa-solid fa-briefcase text-2xl text-slate-300 dark:text-slate-500'></i>
                                <div className="w-1 h-full bg-slate-200 dark:bg-slate-400"></div>
                            </div>

                            <div
                                className="md:w-2/3 bg-slate-300 rounded-lg shadow-md mx-4 dark:bg-slate-700"
                            >
                                <div className='gap-2 ml-8 mb-2 md:mb-1 md:flex'>
                                    <h4 className="text-2xl text-gray-700 dark:text-gray-300 font-bold mb-1 md:mb-2">
                                        {item?.role}
                                    </h4>
                                    <p className="text-md text-gray-500 dark:text-gray-400 font-semibold md:mt-2">{item.company}</p>
                                </div>

                                <span className='ml-8 text-sm bg-slate-500 rounded-md px-2 py-1 md:ml-8'>{item.duration}</span>

                                <ul className="text-md text-gray-700 dark:text-white font-light text-left list-disc py-4 pl-8 md:mx-2">
                                    {item?.description.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </>
    )
}

export default ExperienceCard