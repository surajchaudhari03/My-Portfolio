import React from 'react'

const DownloadCV = () => {

    return (
        <a href="https://drive.google.com/file/d/1sH3xjX29Wb3OaoDSbmMVAdoA_Ey_LZAb/view?usp=sharing" target='_blank' rel="noreferrer" >
            <button className="animated-button">
                <i className="fa fa-download download-left"></i>
                <span className="text">Download CV</span>
                <span className="circle"></span>
                <i className="fa fa-download download-right"></i>
            </button>
        </a>
    )
}

export default DownloadCV