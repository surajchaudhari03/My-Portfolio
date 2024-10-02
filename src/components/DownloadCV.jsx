import React, { useState, useEffect } from 'react'
import { client, urlFor } from '../sanity';

const DownloadCV = () => {

    const [cvData, setCvData] = useState([]);

    const fetchQuery = `*[_type == "downloadCV"]`

    useEffect(() => {
        const fetchCV = async () => {
            try {
                const response = await client.fetch(fetchQuery)
                setCvData(response)
            } catch (error) {
                console.log("error fetching CV: ", error);
            }
        }

        fetchCV();
    }, [])

    console.log(cvData)

    return (
        <a href="https://drive.google.com/file/d/1sH3xjX29Wb3OaoDSbmMVAdoA_Ey_LZAb/view?usp=sharing" target='_blank' rel="noreferrer" >
            <button class="animated-button">
                <i class="fa fa-download download-left"></i>
                <span class="text">Download CV</span>
                <span class="circle"></span>
                <i class="fa fa-download download-right"></i>
            </button>
        </a>
    )
}

export default DownloadCV