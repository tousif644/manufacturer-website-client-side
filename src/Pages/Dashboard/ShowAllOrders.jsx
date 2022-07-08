import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from './../../../firebase.init';
import { toast } from 'react-toastify';

const ShowAllOrders = ({ datas, index, refetch, setDeletingItems }) => {
    const { _id, toolName, userName, userEmail, price, quantity, totalPrice } = datas

    const navigate = useNavigate();
    const handleDelete = (email) => {
        fetch(`https://equipo-fullstack-app.herokuapp.com/cart/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Token ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403 || res.status === 401) {
                toast.error("Can't Delete");
                navigate('/');
                signOut(auth);
                localStorage.removeItem('accessToken')
            }
        })
            .then(data => {
                if (data.success) {
                    toast.success("Successfully deleted")
                }
                refetch();
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>{toolName}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>${totalPrice}</td>
            <td> {(datas.price && !datas.paid) && <p className=' text-accent mx-2'>Pending</p>}
                {(datas.price && datas.paid) && <span className='text-orange-500 text-xl capitalize mx-2'>paied</span>}</td>
            <td>

                <label onClick={() => setDeletingItems(datas)} for="delete-confirm-modal" class=" btn btn-xs modal-button">Delete</label>
                {/* <button className='btn btn-xs btn-error text-white' onClick={() => handleDelete(userEmail)}>Delete</button> */}
            </td>
        </tr>
    );
};

export default ShowAllOrders;