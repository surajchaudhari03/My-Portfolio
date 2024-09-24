import React from 'react';
import { NavLink } from 'react-router-dom';
import navData from '../details.json';
import '../styles/menuBtn.css';

function Navbar() {

    return (
        <nav className="fixed bottom-0 w-full p-2 bg-white dark:bg-gray-800 z-50 md:top-24 md:right-0 md:w-16 md:bg-none">
            <div className='flex w-11/12 mx-auto justify-between md:flex-col md:gap-8 md:mt-16'>
                {navData.navMenu.map((menu) => (
                    <NavLink key={menu.id} to={menu.to}
                        className={({ isActive }) =>
                            `${isActive ? "bg-zinc-00" : ""}`
                        }
                    >
                        <button class="btn dark:text-green-800 dark:border-green-900 dark:before:bg-green-800">
                            <i class={menu.class}></i>
                        </button>
                    </NavLink>
                ))}
            </div>

        </nav>
    );
}

export default Navbar;