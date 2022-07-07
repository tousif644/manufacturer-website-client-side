import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const ShowCartItems = ({ cart, index, refetch,setDeletingItems }) => {
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
            <tr>
                <th>{index + 1}</th>
                <td>{toolName}</td>
                <td >${price}</td>
                <td>{quantity}</td>
                <td>${(totalPrice).toFixed(2)}</td>
                <td>
                    <button className='btn btn-accent btn-xs text-white mx-2'>Pay</button>
                    <label onClick={() => setDeletingItems(cart)} for="delete-confirm-modal" class=" btn btn-xs modal-button btn-error text-white">Delete</label></td>
            </tr>
        </>
    );
};

export default ShowCartItems;