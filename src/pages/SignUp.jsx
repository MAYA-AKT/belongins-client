import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
 import { toast } from 'react-toastify';
import { useTitle } from '../hooks/useTitle';
const SignUp = () => {
   
    //    add dynamic title 
 useTitle('sign-up');






    const { createUser, updateUser } = use(AuthContext);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
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
                toast.success('Successfully Create User');
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        console.log('user update success');
                       

                    }).catch((err) => {
                        console.log('user update err', err);

                    })
                navigate(location?.state || '/');
                console.log('location from signup', location?.state);


            }).catch(err => {
                console.log(err);
                setMessage(err.message)

            })

    }
    return (
        <>
            <div className=" flex justify-center my-10 md:p-0 ">
                <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-center text-[#568F87] ">
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
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm border-[#568F87] outline-[#568F87]"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm border-[#568F87] outline-[#568F87]"
                            />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
                            <input
                                type="url"
                                name='photo'
                                placeholder="Enter your photo URL"
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm border-[#568F87] outline-[#568F87]"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm border-[#568F87] outline-[#568F87]"
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