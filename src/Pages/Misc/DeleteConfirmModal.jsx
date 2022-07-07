import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingItems, refetch, setDeletingItems }) => {
    console.log(deletingItems);
    const { toolName, userName, userEmail } = deletingItems

    const handleDelete = (email) => {
        fetch(`http://localhost:5000/cart/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Token ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Deleted successfully");
                    refetch();
                    setDeletingItems(null)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete ? </h3>
                    <p class="py-4">
                        <ul>
                            <li>{toolName} ordered by <span className='text-secondary'>{userName}</span></li>
                        </ul>
                    </p>
                    <div class="modal-action">
                        <button className='btn btn-error text-white' onClick={() => handleDelete(userEmail)}>Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-accent text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;