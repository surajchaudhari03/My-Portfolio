import React, { useState, useEffect } from 'react'
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter';
import { client, urlFor } from '../sanity';
import DownloadCV from '../components/DownloadCV';

export default function About() {
    const [aboutData, setAboutData] = useState([]);

    const getAboutData = async () => {
        return await client.fetch(`*[_type == "about"] {
            greeting,
            name,
            image,
            roles,
            social,
            summary
        }`)
    }

    useEffect(() => {
        getAboutData().then((data) => {
            setAboutData(data)
        }).catch((error) => {
            console.log('error fetching about details: ', error)
        })
    }, [])

    return (
        <>
            {aboutData.length > 0 && (
                aboutData.map((data, index) => (
                    <section key={index} className='max-w-6xl flex flex-col gap-8 md:flex-row md:ml-6 md:my-16 md:gap-16'>
                        <section className="md:w-80 rounded-lg overflow-hidden">
                            <Fade direction='down' triggerOnce>
                                <div className="w-full h-72 md:h-96 bg-red-300">
                                    <img src={urlFor(data.image).url()}
                                        alt="Prfile"
                                        className="h-full w-full"
                                    />
                                </div>
                            </Fade>
                        </section>
                        <section className='md:w-2/3 flex flex-col text-left'>
                            <Fade direction='up' triggerOnce>
                                <h1 className="text-4xl md:text-5xl font-bold">
                                    {data.greeting}&nbsp;
                                    <span className='text-slate-700 text-5xl md:text-6xl font-extrabold'>{data.name}</span>
                                </h1>
                                <p className="text-2xl font-semibold mt-4">
                                    <Typewriter
                                        words={data.roles.map((item) => item.role)}
                                        loop={10}
                                        cursor
                                        delaySpeed={2000}
                                    />
                                </p>
                                <div className='text-slate-800 dark:text-slate-300'>
                                    {data.summary.map((item, index) => (
                                        <p key={index} className='md:text-left text-lg my-4'>{item.point}</p>
                                    ))}
                                </div>
                                <div className='flex flex-col items-center gap-8 mt-4 md:flex-row'>
                                    <DownloadCV />

                                    <div id="social-links" className=" space-x-4">
                                        <a href="https://github.com/surajchaudhari03"><i className="fab fa-github text-2xl"></i></a>
                                        <a href="https://www.linkedin.com/in/surajchaudhari03"><i className="fab fa-linkedin text-2xl"></i></a>
                                    </div>
                                </div>
                            </Fade>
                        </section>
                    </section>
                ))
            )}
        </>

    );
}