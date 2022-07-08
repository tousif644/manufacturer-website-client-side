import React from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const ShowAllUsers = ({ index, data, refetch }) => {
    const { userEmail, role } = data;
    const [user] = useAuthState(auth);
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${userEmail}`, {
            method: "PUT",
            headers: {
                authorization: `Token ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin")
                }
            })
            .then(data => {
           console.log(data);
            })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{userEmail}</th>
            <td>
                {role !== 'admin' && <button className='btn btn-accent btn-xs mx-2 text-white' onClick={makeAdmin}>Make Admin</button>}
            </td>
        </tr>
    );
};

export default ShowAllUsers;