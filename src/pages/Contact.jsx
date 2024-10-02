import React, { useState, useEffect } from 'react'
import ContactForm from '../components/ContactForm'
import { Fade } from 'react-awesome-reveal'
import { client } from '../sanity'
import DownloadCV from '../components/DownloadCV'

async function getDetailsData() {
    return await client.fetch(`*[_type == "contact"]`)
}

const Contact = () => {
    const [detailsData, setDetailsData] = useState([])

    useEffect(() => {
        getDetailsData().then((data) => {
            setDetailsData(data)
        }).catch((error) => {
            console.log("error fetching contact details: ", error);
        })
    }, [])

    return (
        <div class="flex flex-col items-center justify-center min-h-screen gap-10">

            <Fade direction="down" triggerOnce>
                <h3 className="tracking-[10px] md:tracking-[20px] mx-auto mb-8 text-center uppercase text-gray-800 dark:text-gray-400 text-3xl">
                    Contact Me
                </h3>
            </Fade>

            <div class="flex flex-col md:flex-row justify-between text-center gap-10">
                <Fade direction='down' triggerOnce>
                    {detailsData.length > 0 && (
                        detailsData.map((data) => (
                            data.details.map((item, index) => (
                                <div key={index} class="text-center mb-4">
                                    <i className={`${item.icon} text-4xl dark:text-slate-400 `}></i>
                                    <p className="text-sm dark:text-slate-400">{item.type}</p>
                                    <p>{item.name}</p>
                                </div>
                            ))
                        ))
                    )}
                </Fade>
            </div>

            <div className='flex flex-col items-center gap-10 mt-4'>
                <div id="social-links" className="space-x-4">
                    <a href="https://github.com/surajchaudhari03"><i className="fab fa-github text-2xl"></i></a>
                    <a href="https://www.linkedin.com/in/surajchaudhari03"><i className="fab fa-linkedin text-2xl"></i></a>
                </div>
                <DownloadCV />
            </div>

            <ContactForm />

        </div>
    )
}

export default Contact