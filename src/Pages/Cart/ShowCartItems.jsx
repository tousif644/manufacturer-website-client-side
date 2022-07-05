import React, { useState } from 'react';

const ShowCartItems = ({ cart, index }) => {
    const { _id, price, toolName, quantity,totalPrice } = cart;
    return (
        <div className='flex justify-center items-center mx-auto my-3 p-4 shadow-lg w-max'>
            <p className='mx-2 badge-lg badge-outline badge-accent'>{index + 1}</p>
            <p className='mx-2'>{toolName}</p>
            <p className='mx-2 rounded badge-md badge-primary text-white'>{price} x {quantity} = {(totalPrice.toFixed(2))}</p>

            <button className='btn btn-error btn-xs text-white'>Delete</button>
        </div>
    );
};

export default ShowCartItems;