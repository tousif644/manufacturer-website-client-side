import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from './../../firebase.init';
import Loading from '../Pages/Misc/Loading';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let sigInError;


    // log the data from form
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    };
    if (user || gUser) {
        navigate(from, { replace: true });
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        sigInError = (
            <p className='text-red-500'>{error.message.slice(10, -1)}</p>
        )
    }

    return (
        <div className='flex justify-center  h-screen items-center'>
            <div class="card w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Login 🔧🔨</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                            value="Login"
                        />
                    </form>
                    <p>{sigInError}</p>
                    <p>New to Equipo ? <Link to="/register" className='text-secondary'>Create an Account</Link></p>
                    {/* Login Form */}
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-outline capitalize'><img src="https://i.ibb.co/WvWqqqr/pngwing-com.png" alt="" width={25} className="mx-2" />  Sign in with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;