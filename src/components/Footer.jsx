import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            Andrea Procopio
            . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
            <a href="#" className="hover:underline me-4 md:me-6">
                ↑
            </a>
            </li>
            <li>
            <a href="#projects" className="hover:underline me-4 md:me-6">
                Projects
            </a>
            </li>
            <li>
            <a href="#skills" className="hover:underline me-4 md:me-6">
                Skills
            </a>
            </li>
            <li>
            <a href="#contact" className="hover:underline">
                Contact
            </a>
            </li>
        </ul>
        </footer>
    )
}

export default Footer