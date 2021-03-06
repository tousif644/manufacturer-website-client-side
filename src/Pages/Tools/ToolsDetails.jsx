import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ToolsDetailsHook from './../Hooks/ToolsDetailsHook';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { toast } from 'react-toastify';
const ToolsDetails = () => {
    const [quantity, setQuantity] = useState(2);
    const [user] = useAuthState(auth);
    console.log(user);
    const { serviceId } = useParams()
    console.log(serviceId);
    const [tools] = ToolsDetailsHook(serviceId);
    const { price } = tools;
    console.log(tools);
    let total = quantity * price;
    {/* <button type="button" onClick={() => setCount((count) => count + 1)}>
count is: {count}
</button> */}

    const bookingData = {
        toolId: tools._id,
        toolName: tools.name,
        userName: user.displayName,
        userEmail: user.email,
        price: tools.price,
        quantity: quantity,
        totalPrice: total,
    }

    const postToDb = () => {
        fetch(`https://equipo-fullstack-app.herokuapp.com/cart`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Token ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Ordered Successfully !!")
                }
            })
    }
    return (
        <div>
            <p className='lg:text-xl px-2'><Link to="/home">👈 Back to home</Link></p>
            <h1 className='lg:text-4xl underline font-bold text-center my-2'>Product Details</h1>
            <div class="hero min-h-screen mx-auto ">
                <div class="hero-content  flex-col lg:flex-row">
                    <img src={tools.image} class="w-8/12 rounded-lg" />
                    <div>
                        <h1 class="lg:text-5xl  text-sm font-bold">{tools.name}</h1>
                        <p class="py-6 lg:text-3xl text-secondary text-sm">Price ${tools.price}</p>
                        {/* <p>Total : </p> */}
                        <p>
                            <span className='lg:text-2xl'>Quantity :</span>
                            <button className='lg:btn lg:btn-square mx-3 btn-sm' onClick={
                                () => {
                                    if (quantity > 2) {
                                        setQuantity((quantity) - 2)
                                    }
                                }}> - </button>
                            {quantity}

                            <button className='lg:btn btn-square mx-3' onClick={() => {
                                if (quantity < 50) {
                                    setQuantity((quantity) + 2)
                                }
                            }}>+</button>
                        </p>
                        <p className='lg:text-3xl '>Stock left : {tools.stock - quantity}</p>

                        <p className='lg:text-xl my-3'>Total : ${(total.toFixed(2))}</p>
                        <button className='lg:btn btn-sm btn-secondary rounded lg:btn-secondary mx-2 lg:text-white text-white' onClick={postToDb}>Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToolsDetails;