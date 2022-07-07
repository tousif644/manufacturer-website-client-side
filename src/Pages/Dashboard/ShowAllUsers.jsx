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
                if (data.modifiedCount > 0) {
                    toast.success("Successfully made an admin");
                    console.log(data)
                    refetch();
                }
            })

    }


    const deleteUser = () => {
        fetch(`http://localhost:5000/users/${userEmail}`, {
            method: "DELETE",
            headers: {
                authorization: `Token ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Your are eligible to delete that user")
                }

            })

            .then(data => {
                user.delete();
                toast.success("User deleted successfully")
                refetch()
                
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{userEmail}</th>
            <td>
                {role !== 'admin' && <button className='btn btn-accent btn-xs mx-2 text-white' onClick={makeAdmin}>Make Admin</button>}
                <button className='btn btn-error btn-xs text-white' onClick={deleteUser}>Delete</button>
            </td>
        </tr>
    );
};

export default ShowAllUsers;