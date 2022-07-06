import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const ShowCartItems = ({ cart, index, refetch }) => {
    const { _id, price, toolName, quantity, totalPrice } = cart;
    const [user] = useAuthState(auth);

    const handleDelete = (email) => {
        fetch(`http://localhost:5000/cart/${email}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Deleted successfully");
                    refetch()
                }
            })
    }


    return (
        <>
            {/* <div className='flex justify-center items-center mx-auto my-3 p-4 shadow-lg w-max'>
                <p className='mx-2 badge-lg badge-outline badge-accent'>{index + 1}</p>
                <p className='mx-2'>{toolName}</p>
                <p >{price} x {quantity} = {(totalPrice.toFixed(2))}</p>
                
            </div> */}

            <tr>
                <th>{index + 1}</th>
                <td>{toolName}</td>
                <td >${price}</td>
                <td>{quantity}</td>
                <td>${(totalPrice).toFixed(2)}</td>
                <td>
                    <button className='btn btn-accent btn-xs text-white mx-2'>Pay</button>
                    <button className='btn btn-error btn-xs text-white' onClick={() => handleDelete(user.email)}>Delete</button></td>
            </tr>
        </>
    );
};

export default ShowCartItems;