import React from 'react';
import '../App.css';


const Navbar = () => {



    return (
        <div className="navbar bg-base-300 shadow-sm w-full rounded-lg">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><h1>Viswanath</h1></a>
            </div>
            <div className="flex-none">
                {/* Hamburger menu for mobile */}
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>About Me</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                {/* Horizontal menu for desktop */}
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li><a>About Me</a></li>
                    <li><a>Projects</a></li>

                    <li><a>Blog</a></li>
                </ul>
            </div>
        </div>
    );

}

export default Navbar;