import React from 'react';

const ShowAllOrders = ({ datas, index }) => {
    const { toolName, userName, userEmail, price, quantity ,totalPrice} = datas
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>{toolName}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>${totalPrice}</td>
            <td>
                <button className='btn btn-xs btn-error text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default ShowAllOrders;