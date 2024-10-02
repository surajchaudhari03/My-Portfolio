import React from 'react';
import { urlFor } from '../sanity';
import { Fade } from 'react-awesome-reveal';

const EducationCard = ({ educationData }) => {
    return (
        <>
            <Fade direction="up" triggerOnce>
                {educationData.map((education, index) => (
                    <div key={index} className="flex mb-4 gap-4 h-full">
                        
                        <div className="hidden md:flex flex-col items-center gap-2">
                            <i className='fa-solid fa-graduation-cap text-2xl text-slate-300 dark:text-slate-500'></i>
                            <div className="w-1 h-full bg-slate-200 dark:bg-slate-400"></div>
                        </div>

                        <div className="w-full mx-auto p-6 rounded-lg borde border-gray-300 bg-slate-300 shadow-md dark:bg-slate-700 dark:border-gray-600">
                            <div className="flex items-center pb-2 border-b border-gray-300 dark:border-gray-700 transition-all duration-300">
                                <img
                                    alt="University logo"
                                    className="w-12 h-12 rounded-full mr-4"
                                    height="50"
                                    src={urlFor(education.logo).url()}
                                    width="50"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold">{education.title}</h2>
                                    <p className="text-sm text-gray-400">{education.institution}</p>
                                </div>
                            </div>
                            <p className="flex items-center my-4 py-2 text-gray-400 border-b border-gray-400 dark:border-gray-500">
                                <i className="fas fa-map-marker-alt mr-2" />
                                {education.type}
                            </p>
                            <p className="flex items-center my-4 py-2 text-gray-400 border-b border-gray-400 dark:border-gray-500">
                                <i className="fas fa-clock mr-2" />
                                {education.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </Fade>
        </>
    );
};

export default EducationCard;