import React from 'react'
import { urlFor } from '../sanity'
import { Fade } from 'react-awesome-reveal'

const CertificateCard = ({ certificateData }) => {
  return (
    <>
      <Fade direction="up" triggerOnce>
        {certificateData.map((certificate, index) => (
          <div key={index} className='w-full h-full mb-6 md:max-w-72 mx-auto rounded-md overflow-hidden bg-slate-200 dark:bg-slate-700 '>
            <div className='relative'>
              <a href={certificate.url} target='_blank' rel='noopener noreferrer'>
                <div>
                  <img src={urlFor(certificate.image).url()} alt="" className='w-full max-h-28' />
                </div>
                <div className='absolute top-0 w-full h-full flex justify-center items-center hover:bg-black opacity-80 certificate-div'>
                  <p className='text-white text-center font-semibold text-lg uppercase hover-effect'>Certificate</p>
                </div>
              </a>
            </div>
            <div className='text-lg text-center p-1'>
              <h2 className='font-bold text-[#172554] dark:text-white'>{certificate.title}</h2>
              <p className='text-gray-400 font-medium text-sm'>{certificate.platform}</p>
            </div>
          </div>
        ))}
      </Fade>
    </>

  )
}

export default CertificateCard