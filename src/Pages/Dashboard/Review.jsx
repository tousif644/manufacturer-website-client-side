import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { toast } from 'react-toastify';
const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    toast.error("Error")
                }
            }).then(data => {
                console.log(data);
            })
        console.log(data);
    };
    const [user] = useAuthState(auth);
    return (
        <div className='flex justify-center   items-center'>
            <div class="card w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Give a review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" value={user.displayName} class="input input-bordered w-full max-w-xs" {...register("name", { required: true, maxLength: 50 })} />
                        <textarea placeholder='Write your review' className='input input-bordered w-full max-w-xs my-5' {...register("description", {
                            required: {
                                value: true,
                                message: "Description about review required"
                            }
                        })}></textarea>
                        {errors.description?.type === 'required' && <span className='label-text-alt text-red-500 text-xl'>{errors.description?.message}</span>}
                        <input type="submit" className='btn btn-accent text-white' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;