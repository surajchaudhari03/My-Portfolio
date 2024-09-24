import React from 'react'
import Details from '../details.json';

export default function About() {

    return (
            <section className='max-w-6xl flex flex-col md:flex-row items-center justify-center text-center md:ml-0 md:my-16'>
                <section className="md:w-1/3 flex justify-center items-center p-4">
                    <div className="">
                        <img src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Prfile"
                            className="w-44 md:w-60 rounded-full"
                        />
                    </div>
                </section>
                <section className='md:w-2/3 p-4 flex flex-col text-left'>
                    <h1 className="text-4xl md:text-6xl font-bold">{Details.personalDetails.name}</h1>
                    <p className="text-2xl font-semibold mt-4">{Details.personalDetails.designation}</p>
                    <p className='md:text-left text-lg my-4'>{Details.personalDetails.description}</p>
                    <div id="social-links" className=" space-x-4 mt-6">
                        <a href="https://github.com/surajchaudhari03"><i className="fab fa-github text-2xl"></i></a>
                        <a href="https://www.linkedin.com/in/surajchaudhari03"><i className="fab fa-linkedin text-2xl"></i></a>
                    </div>
                </section>
            </section>
    );
}