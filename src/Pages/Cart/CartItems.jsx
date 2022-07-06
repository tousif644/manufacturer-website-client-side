import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import ShowCartItems from './ShowCartItems';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../Misc/Loading';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const CartItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const fetchData = () => {
        return axios.get(`http://localhost:5000/cart/${user.email}`, {
            method: "GET",
            headers: {
                'authorization': `Token ${localStorage.getItem('accessToken')}`
            }
        }).catch(function (error) {
            if (error.response.status === 403 || error.response.status === 401) {
                console.log(error.response.status);
                navigate("/home");
                signOut(auth);
                localStorage.removeItem("accessToken")
            } 
        })
    }

    
    const { isLoading, data, refetch } = useQuery('super-heroes', fetchData)
    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-end text-xl mx-4'>Your Ordered Item : {data?.data.length}</h1>
            <div>
                {
                    data?.data.length === 0 && <h1 className='text-xs badge rounded p-3'>Your Cart is empty order some</h1>
                }
            </div>
            <div class="mx-auto">
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.data.map((cart, index) => <ShowCartItems key={cart._id} cart={cart} index={index} refetch={refetch}></ShowCartItems>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CartItems;