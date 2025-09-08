import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';


const SignIn = () => {
    const { signinUser } = use(AuthContext);
    const [message, setMessage] = useState('');
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        setMessage('');

        // firebase auth
        signinUser(email, password)
            .then(res => {
                alert('user login successfully');

                console.log(res.user);


            }).catch(err => {
                console.log(err.message);
                setMessage(err.message);

            })

    }
    return (
        <>
            <div className=" flex items-center h-screen justify-center ">
                <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-center text-[#568F87] mb-6">
                        Sign in
                    </h2>
                    <form onSubmit={handleSignIn} className="space-y-4">


                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
                            />
                        </div>


                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
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
                            Sign in
                        </button>
                        
                        <div className='flex justify-between text-sm'>
                            <p className='text-[#335752]'>Don't have an account? please </p>
                            <Link to='/auth/signup' className='text-blue-600'>Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignIn;