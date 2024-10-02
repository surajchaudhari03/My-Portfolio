import React, { useState, useEffect } from 'react'
import { client } from '../sanity'
import CertificateCard from './CertificateCard'
import { Fade } from 'react-awesome-reveal'

const Certificates = () => {
    const [certificateData, setCertificateData] = useState([])

    const certificateQuery = `*[_type == "certificate"] | order(_createdAt asc) {
        title,
        platform,
        url,
        image
    }`

    useEffect(() => {
        const fetchCertificateData = async () => {
            try {
                await client.fetch(certificateQuery)
                    .then((data) => {
                        setCertificateData(data);
                    })
            } catch (error) {
                console.log("error fetching certificates: ", error)
            }
        }

        fetchCertificateData();
    }, [])

    return (
        <section className='my-20'>
            <Fade direction='down' triggerOnce>
            <h3 className="tracking-[10px] mx-auto text-center mb-10 uppercase text-gray-400 text-xl">
                Certifications
            </h3>
            </Fade>
            <div className='md:grid grid-cols-3 gap-6'>
                {certificateData.length > 0 && (
                    <CertificateCard certificateData={certificateData} />
                )}
            </div>
        </section>
    )
}

export default Certificates