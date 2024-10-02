import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { client } from '../sanity'

function Navbar() {
    const [navigationData, setNavigationData] = useState([])

    const navigationQuery = `*[_type == "navigation"] | order(_createdAt asc) {
        name,
        to,
        icon
    }`

    useEffect(() => {
        const fetchCertificateData = async () => {
            try {
                await client.fetch(navigationQuery)
                    .then((data) => {
                        setNavigationData(data);
                    })
            } catch (error) {
                console.log("error fetching navigation: ", error)
            }
        }

        fetchCertificateData();
    }, [])

    return (
        <nav className="fixed bottom-0 w-full p-2 bg-slate-200 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent z-50 md:top-16 md:right-0 md:w-16 md:bg-none">
            <Fade direction='right' triggerOnce>
                <div className='flex w-11/12 mx-auto justify-center gap-4 md:gap-8 md:flex-col md:mt-16 '>
                    {navigationData.map((menu, index) => (
                        <NavLink key={index} to={menu.to}
                            className={({ isActive }) =>
                                `${isActive ? "bg-slate-600 dark:bg-slate-400 rounded-full flex justify-center w-10" : ""}`
                            }
                        >
                            <button class="menuBtn dark:text-slate-600 dark:border-slate-600 dark:before:bg-[#475569]">
                                <i class={menu.icon}></i>
                            </button>
                        </NavLink>
                    ))}
                </div>
            </Fade>

        </nav>
    );
}

export default Navbar;