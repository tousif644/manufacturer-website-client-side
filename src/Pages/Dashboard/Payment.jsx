import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from './../../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../Misc/Loading';

const Payment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const url = `http://localhost:5000/payment/cart/${id}`;
    const { data: bookingData, isLoading } = useQuery('bookingData', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Token ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(bookingData);
    return (
        <div>
            <div>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row">
                        <div class="card flex-shrink-0  shadow-xl bg-base-100">
                            <div class="card-body">
                                <div class="card  bg-base-100 shadow-xl">
                                    <div class="card-body">
                                        <h2 className='text-xl text-accent'>Hello ,{bookingData.userName}</h2>
                                        <h2 class="card-title"> Pay for : <span className='text-orange-500'>{bookingData.toolName}</span></h2>
                                        {<p>Please Pay : <span className='text-red-400'>${bookingData.price}</span>
                                        </p> }
                                    </div>
                                </div>
                            </div>
                            {/* <div className='card-body capitalize'>
                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm bookingData={bookingData} />
                                    </Elements>
                                </div> */}
                        </div>
                        {/* Gateway images */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;