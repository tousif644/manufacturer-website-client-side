import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    return (
        <div className=''>
            <div class="navbar bg-primary text-white  ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li>
                                {
                                    user && <Link to="/dashboard">Dashboard</Link>
                                }
                                {
                                    user && <p className='mx-2 text-secondary'>user : {user?.displayName}</p>
                                }
                            </li>
                        </ul>
                    </div>
                    <Link to="/" class="btn btn-ghost normal-case lg:text-3xl sm:text-xs">EQUIPO</Link>
                </div>
                <div class="navbar-center hidden lg:flex ">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to="/home">Home</Link></li>
                        <li tabindex="0">
                            <Link to='/allTools'>
                                Our Tools
                            </Link>
                        </li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li>
                            {
                                user && <Link to="/dashboard">Dashboard</Link>
                            }
                        </li>




                    </ul>
                </div>
                <div className='navbar-end '>
                    {
                        user && <p className='mx-2 text-secondary hidden lg:flex '>user : {user?.displayName}</p>
                    }

                    {
                        user ? <button className='lg:btn lg:btn-secondary lg:text-white btn-sm btn-secondary text-white text-xs' onClick={logOut}>Log out</button> : <Link to="login" className='btn btn-secondary text-white lg:rounded'>Log in</Link>
                    }
                    <label for="my-drawer-2" class=" drawer-button lg:hidden mx-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                </div>

            </div>
        </div>
    );
};

export default Header;