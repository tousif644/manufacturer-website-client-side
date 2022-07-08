import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Misc/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// stripe key 
const stripePromise = loadStripe('pk_test_51LHV3jIBnoUPe5R3c7bnaMMN4UWyxDH5oYhopuRxya3lG8RxGDWmpuXPTPagtIr0tB4mq6CHJPaBCYggagzHpxPZ00Iqqx9bvb')

const Payment = () => {
    const { id } = useParams();
    const url = `https://equipo-fullstack-app.herokuapp.com/payment/cart/${id}`;
    const { data: bookingData, isLoading } = useQuery('bookingData', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Token ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const { toolName, userName, totalPrice } = bookingData
    return (
        <div>
            <div>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row">
                        <div class="card flex-shrink-0  shadow-xl bg-base-100">
                            <div class="card-body">
                                <div class="card  bg-base-100 shadow-xl">
                                    <div class="card-body">
                                        <h2 className='text-xl text-accent'>Hello ,{userName}</h2>
                                        <h2 class="card-title"> Pay for : <span className='text-orange-500'>{toolName}</span></h2>
                                        {<p>Please Pay : <span className='text-red-400'>${totalPrice}</span>
                                        </p>}
                                    </div>
                                </div>
                            </div>
                            <div className='card-body capitalize w-96'>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm bookingData={bookingData} />
                                </Elements>
                            </div>
                        </div>
                        {/* Gateway images */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;