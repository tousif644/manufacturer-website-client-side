import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
const CheckoutForm = ({ bookingData }) => {
    const [clientSecret, setClientSecret] = useState('');
    const { price, userName, userEmail, totalPrice } = bookingData;
    const [transiction, setTransiction] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState('');


    //sending price
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Token ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);


        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })


        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        address: {
                            city: "DHAKA",

                        },
                        name: 'tousiftasrik',
                        email: 'hellothere@gmail.com'
                    },
                },
            },
        );

        if (intentError) {
            toast.error(intentError?.message || "");
            success('')
        } else {
            setSuccess("Congratulation Payment done !");
            console.log(paymentIntent);
            setTransiction(paymentIntent.id);
        }
        if (error) {
            toast.error(error?.message || "");
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    }



    return (
        <div>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button className='btn btn-accent my-2 text-white' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-accent'>{
                    success
                }</p>
                {success && <p>Your transiction id : <span className='text-purple-400 text-xl'>{transiction}</span></p>}
            </form>
        </div>
    );
};

export default CheckoutForm;