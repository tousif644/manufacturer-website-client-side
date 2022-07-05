import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const ShowCartItems = ({ cart, index }) => {
    const { _id, price, toolName, quantity, totalPrice } = cart;
    const [user] = useAuthState(auth);
    let cartQuantity = [cart].length;

    const handleDelete = (email) => {
        fetch(`http://localhost:5000/cart/${email}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    console.log(data);
                    toast.success("Deleted successfully");
                } 
            })
    }


    return (
        <>
            {cartQuantity === 0 ? <h1>Cart is Empty</h1> : ""}
            <div className='flex justify-center items-center mx-auto my-3 p-4 shadow-lg w-max'>
                <p className='mx-2 badge-lg badge-outline badge-accent'>{index + 1}</p>
                <p className='mx-2'>{toolName}</p>
                <p className='mx-2 rounded badge-md badge-primary text-white'>{price} x {quantity} = {(totalPrice.toFixed(2))}</p>
                <button className='btn btn-error btn-xs text-white' onClick={() => handleDelete(user.email)}>Delete</button>
            </div>
        </>
    );
};

export default ShowCartItems;