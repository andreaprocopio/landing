import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu, GiTechnoHeart } from "react-icons/gi";
import { useState } from 'react';



const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                href="#"
                className="flex items-center space-x-2 rtl:space-x-reverse dark:text-white"
                >
                    <GiTechnoHeart size={30} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Andrea
                    </span>
                </a>
                <div className="flex md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick={() => { setShowMobileMenu(!showMobileMenu) }}
                    >
                    <GiHamburgerMenu size={20} />
                    </button>
                    <div className='flex dark:text-white items-center justify-center p-2 gap-3'>
                        <a href="https://github.com/andreaprocopio" className='hover:scale-110 transition' target='_blank'>
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/andrea-procopio-79a11b180/" className='cursor-pointer hover:scale-110 transition' target='_blank' >
                            <FaLinkedin size={20}  />
                        </a>
                    </div>
                </div>
                <div
                className={"items-center justify-between w-full md:flex md:w-auto md:order-1 " + (!showMobileMenu ? "hidden" : "")}
                id="navbar-sticky"
                >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a
                        href="#projects"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Projects
                    </a>
                    </li>
                    <li>
                    <a
                        href="#skills"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Skills
                    </a>
                    </li>
                    <li>
                    <a
                        href="#contact"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Contact
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar