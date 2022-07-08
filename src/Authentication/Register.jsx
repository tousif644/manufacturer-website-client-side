import React from 'react';
import { useForm } from "react-hook-form";
import auth from './../../firebase.init';
import Loading from '../Pages/Misc/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import useToken from '../Pages/Hooks/useToken';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const  [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ]= useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle,gUser, gError, gLoading ] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updatError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);

    // log the data from form


    const naviagate = useNavigate();
    let regError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (error || gError || updatError) {
        regError = (
            <p>{error.message || gError.message || updatError.message}</p>
        )
    }
    if (token) {
        naviagate('/allTools')
    }

    const onSubmit = async (data) => {
        console.log(data.name,data.email,data.password);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
    };
    return (
        <div className='flex justify-center  h-screen items-center'>
            <div class="card w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Register 🧰📝</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Name */}
                        <div class="form-control w-full max-w-xs ">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Enter your name" class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "name should be 6 character long or longer"
                                    }
                                })} />
                            {errors.name?.type === 'required' && <span className='label-text-alt text-red-500 text-xl'>{errors.name?.message}</span>}

                            {errors.name?.type === 'pattern' && <span className='label-text-alt text-red-500 text-xl'>{errors.name?.message}</span>}
                        </div>
                        {/* Name*/}




                        {/* Email */}
                        <div class="form-control w-full max-w-xs ">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: "Match the requirement"
                                    }
                                })} />
                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 text-xl'>{errors.email?.message}</span>}

                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 text-xl'>{errors.email?.message}</span>}
                        </div>
                        {/* Email */}


                        {/* Password */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" class="input input-bordered  w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password need to be 6 character long"
                                    }
                                })}
                            />
                            {errors.password?.type === 'required' && <span className='label-text-alt text-red-500 text-xl'>{errors.password.message}</span>}

                            {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500 text-xl'>{errors.password.message}</span>}
                        </div>
                        {/* Password */}
                        <input
                            className="btn btn-primary w-full max-w-xs my-3 capitalize text-white"
                            type="submit"
                            value="Register"
                        />
                    </form>
                    <p>{regError}</p>
                    <p>Already have an account ? <Link to="/login" className='text-secondary'>Login</Link></p>
                    {/* Login Form */}
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-outline capitalize'><img src="https://i.ibb.co/WvWqqqr/pngwing-com.png" alt="" width={25} className="mx-2" />  Sign in with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Register;