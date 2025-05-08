import React from 'react'
import DarkModeToggler from './DarkModeToggler';
import { Link } from 'react-router-dom';

export default function NavBar({ title, home = "Home", about }) {
    return (
        <nav className="bg-slate-800 dark:bg-[#0f0f11] text-white justify-between flex-row flex p-2.5 items-center">
            <div className="max-w-7xl  py-1 flex items-center gap-3">
                <Link to="/" className="hover:text-blue-400 dark:hover:text-blue-900 transition duration-300 text-xl font-extrabold text-slate-800 uppercase bg-amber-50 dark:bg-amber-100  rounded-[0.5rem] p-0.5 px-2">{title}</Link>
                <ul className="flex space-x-8 text-xl">
                    <li>
                        <Link to="/" className="hover:text-blue-400 dark:hover:text-blue-900 transition duration-300 ">{home}</Link>
                    </li>
                    <li>
                        <Link to="/About" className="hover:text-blue-400 dark:hover:text-blue-900 transition duration-300">{about}</Link>
                    </li>
                </ul>
            </div>
            <div className='py-1 justify-center items-center flex'>
                <DarkModeToggler />
            </div>
        </nav>
    );
}



