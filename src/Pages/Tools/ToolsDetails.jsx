import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ToolsDetailsHook from './../Hooks/ToolsDetailsHook';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { toast } from 'react-toastify';
const ToolsDetails = () => {
    const [user] = useAuthState(auth);
    const { serviceId } = useParams()
    console.log(serviceId);
    const [tools] = ToolsDetailsHook(serviceId);
    console.log(tools);


    const bookingData = {
        toolId: tools._id,
        toolName: tools.name,
        userName: user.displayName,
        userEmail: user.email,
        price: tools.price

    }

    const postToDb = () => {
        fetch(`http://localhost:5000/cart`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Added to cart")
                }
            })
    }
    return (
        <div>
            <h1>Product Details</h1>
            <div class="hero min-h-screen mx-auto ">
                <div class="hero-content  flex-col lg:flex-row">
                    <img src={tools.image} class="w-8/12 rounded-lg" />
                    <div>
                        <h1 class="text-5xl font-bold">{tools.name}</h1>
                        <p class="py-6 text-3xl text-secondary">Price {tools.price}</p>
                        {/* <p>Total : </p> */}
                        <p>Quantity : <button className='btn btn-square mx-3'>-</button> {tools.quantity} <button className='btn btn-square mx-3'>+</button> </p>
                        <p>Total : </p>
                        <button class="btn btn-primary text-white my-2">Proceed to checkout</button>
                        <button className='btn btn-secondary mx-2 text-white' onClick={postToDb}>Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToolsDetails;