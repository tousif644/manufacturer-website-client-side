import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import makeAdmin from '../Hooks/makeAdmin';
import Footer from '../Shared/Footer';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = makeAdmin(user);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <h1 className='text-3xl text-secondary text-center my-4 mb-2' >Welcome To  Dashboard <span className='text-primary'>{user.displayName}</span></h1>
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/review">Review</Link></li>
                        {
                            admin && <li><Link to="/dashboard/users">All users</Link></li>

                        }
                        {
                            admin && <li><Link to="/dashboard/orders">All Orders</Link></li>
                        }

                        {
                            admin && <li><Link to="/dashboard/add-item">Add Tool</Link></li>
                        }
                        <li><Link to="/dashboard/payment-history">Payment History</Link></li>
                    </ul>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;