import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ShowCartItems = ({ cart, index, refetch, setDeletingItems }) => {
    const { _id, price, toolName, quantity, totalPrice } = cart;
    console.log(cart.userEmail);

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{toolName}</td>
                <td >${price}</td>
                <td>{quantity}</td>
                <td>${(totalPrice).toFixed(2)}</td>
                <td>
                    {(cart.price && !cart.paid) && <Link to={`/dashboard/payment/${_id}`} className='btn btn-accent btn-xs text-white mx-2'>Pay</Link>}
                    {(cart.price && cart.paid) && <span className='text-orange-500 text-xl capitalize mx-2'>paied</span>}
                    <label onClick={() => setDeletingItems(cart)} for="delete-confirm-modal" class=" btn btn-xs modal-button btn-error text-white">Delete</label></td>
            </tr>
        </>
    );
};

export default ShowCartItems;