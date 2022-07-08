import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const CheckoutForm = ({ bookingData }) => {
    const [clientSecret, setClientSecret] = useState('');
    const { _id, price, userName, userEmail, totalPrice } = bookingData;
    const [transaction, settransactionId] = useState('')
    const [processing, setProcessing] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    //sending price
    useEffect(() => {
        fetch('https://equipo-fullstack-app.herokuapp.com/create-payment-intent', {
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

        setProcessing(true);
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        address: {
                            city: "DHAKA",

                        },
                        name: userName,
                        email: userEmail
                    },
                },
            },
        );

        if (intentError) {
            toast.error(intentError?.message || "");
            success('')
            setProcessing(false)
        } else {
            setSuccess("Congratulation Payment done !");
            console.log(paymentIntent);
            settransactionId(paymentIntent.id);

            // getting details about payment
            const paymentDetails = {
                itemId: _id,
                transactionId: paymentIntent.id
            }

            fetch(`https://equipo-fullstack-app.herokuapp.com/payment/cart/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Token ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentDetails)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })
        }
        if (error) {
            toast.error(error?.message || "");
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        navigate('/dashboard')
    }



    return (
        <div>

            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '10px',
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
                {success && <p>Your transactionId id : <span className='text-purple-400 text-xl'>{transaction}</span></p>}
            </form>
        </div>
    );
};

export default CheckoutForm;