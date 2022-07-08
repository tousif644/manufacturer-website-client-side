import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowManageTools = ({ datas, refetch, index }) => {
    const { _id, name } = datas

    const handleDelete = () => {
        fetch(`http://localhost:5000/tools/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Token ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td><button className='btn btn-xs btn-error text-white' onClick={() => handleDelete()}>delete</button></td>
        </tr>
    );
};

export default ShowManageTools;