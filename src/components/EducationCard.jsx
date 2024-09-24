import React from 'react';
import EducationData from '../details.json'

const EducationCard = () => {

    return (
        <>
            {EducationData.educationDetails.map(education => (
                <div
                    key={education.id}
                    className=" w-full md:max-w-xl mx-auto p-6 rounded-lg border dark:border-gray-600"
                >
                    <div className="card-inner p-2">
                        <div className="flex items-center pb-2 border-b dark:border-zinc-700 transition-all duration-300">
                            <img
                                alt="University logo"
                                className="w-12 h-12 rounded-full mr-4"
                                height="50"
                                src={education.logo}
                                width="50"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">{education.title}</h2>
                                <p className="text-sm text-gray-400">{education.university}</p>
                            </div>
                        </div>
                        {/* <p className="flex items-center my-4 py-2 text-gray-400 border-b dark:border-zinc-700">
                            <i className="fas fa-map-marker-alt mr-2" />
                            {education.location}
                        </p> */}
                        <p className="flex items-center my-4 py-2 text-gray-400 border-b dark:border-zinc-700">
                            <i className="fas fa-clock mr-2" />
                            {education.duration}
                        </p>
                        <div className="flex flex-wrap ">
                            {education.skills.map(skill => (
                                <span
                                    key={skill.id}
                                    className="bg-slate-100 text-gray-400 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 dark:bg-slate-700"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default EducationCard;