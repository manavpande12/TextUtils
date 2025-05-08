import React from 'react';
import { useDarkMode } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function DarkModeToggler() {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
        <button onClick={() => setDarkMode(!darkMode)} className='bg-white dark:bg-[#0f0f11] rounded-[0.5rem]  font-bold text-black dark:text-white text-xl cursor-pointer shadow-md hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300 px-5 py-0.5 uppercase'>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
    );
}