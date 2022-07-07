import React from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const DeleteUserModal = ({ deletingUser, refetch, setDeletingUser }) => {
    const { userEmail, role } = deletingUser;
    const [user] = useAuthState(auth);
    const deleteUser = (email) => {
        fetch(`http://localhost:5000/users/${email}`, {
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
                console.log(data);
                user.delete();
                toast.success("User deleted successfully")
                refetch()
                setDeletingUser(null)

            })
    }
    return (
        <div>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete ?</h3>
                    <p class="py-4">Role of this account {role === 'admin' ? <p>Admin</p> : <p className='text-secondary'>Mango People</p>}</p>
                    <div class="modal-action">
                        <button onClick={() => deleteUser(userEmail)} className='btn btn-accent text-white'>Delete</button>
                        <label for="my-modal-6" class="btn btn-error text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteUserModal;