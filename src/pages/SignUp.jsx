import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
    const { createUser, updateUser, signInGoogle } = use(AuthContext);
    const [message, setMessage] = useState('');

    const handleSignUPWithGoogle = () => {
        signInGoogle()
            .then(() => {
                alert('google sign up success');
            }).catch(err => {
                console.log(err);

            })
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        setMessage('');
        // password verifiation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (passwordRegex.test(password) === false) {
            setMessage('password must have one lowercase one uppercase and at least 6 char.')
            return;
        }

        // firebase auth
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        console.log('user update success');

                    }).catch((err) => {
                        console.log('user update err', err);

                    })

            }).catch(err => {
                console.log(err);
                setMessage(err.message)

            })

    }
    return (
        <>
            <div className=" flex items-center h-screen justify-center ">
                <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-center text-[#568F87] mb-6">
                        Sign Up
                    </h2>
                    <form onSubmit={handleSignUp} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter your name"
                                className="mt-1 block w-full px-4 py-2  rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2  rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
                            />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                            <input
                                type="url"
                                name='photo'
                                placeholder="Enter your photo URL"
                                className="mt-1 block w-full px-4 py-2  rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2  rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <p className='text-red-500'>{message}</p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#568F87] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#4a8078] transition"
                        >
                            Sign up
                        </button>

                    </form>
                    <div className='my-3'>
                        <button
                        onClick={handleSignUPWithGoogle}
                        className="btn  bg-white text-black border-[#e5e5e5] w-full">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <div className='flex justify-between text-sm my-3'>
                        <p className='text-[#335752]'>Already have an account ? please  </p>
                        <Link to='/auth/signin' className='text-blue-600'>Sign In</Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;