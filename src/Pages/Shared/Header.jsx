import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <div class="navbar bg-primary text-white  px-14 sticky">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            <li><Link to="">Item 1</Link></li>
                            <li tabindex="0">
                                <Link to="" class="justify-between">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul class="p-2 bg-primary">
                                    <li><Link to="">Submenu 1</Link></li>
                                    <li><Link to="">Submenu 2</Link></li>

                                </ul>
                            </li>

                            <li><Link to="">Item 3</Link></li>
                            <p className="text-neutral font-bold pl-3" style={{ fontSize: "1px" }}>Customer Service
                                <br />
                                (+880 01923456787)
                            </p>
                        </ul>
                    </div>
                    <Link to="/" class="btn btn-ghost normal-case text-3xl">EQUIPO</Link>
                </div>
                <div class="navbar-end hidden lg:flex mx-0">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to="/home">Home</Link></li>
                        <li tabindex="0">
                            <Link to='/allTools'>
                                Our Tools
                            </Link>
                        </li>
                        <li><Link to="">Blogs</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="">Dashboard</Link></li>
                    </ul>
                    <Link to="/login" class="btn btn-secondary ">Log in</Link>
                    {/* <p className="text-neutral font-bold pl-3" style={{ fontSize: "1px" }}>Customer Service
                        <br />
                        (+880 01923456787)
                    </p> */}
                </div>

                <div className='lg:hidden navbar-end'>
                    <Link to="" class="btn btn-secondary lg:hidden">Log in</Link>
                </div>

            </div>
        </div>
    );
};

export default Header;