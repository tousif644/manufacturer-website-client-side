import React from 'react';
import { toast } from 'react-toastify';

const ShowAllUsers = ({ index, data, refetch }) => {
    const { userEmail, role } = data;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${userEmail}`, {
            method: "PUT",
            headers: {
                authorization: `Token ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Successfully made an admin");
                console.log(data)
                refetch();
            })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{userEmail}</th>
            <td>
                {role !== 'admin' && <button className='btn btn-accent btn-xs mx-2 text-white' onClick={makeAdmin}>Make Admin</button>}
                <button className='btn btn-error btn-xs text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default ShowAllUsers;