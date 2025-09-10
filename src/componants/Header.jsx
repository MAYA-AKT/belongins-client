import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
 import { toast } from 'react-toastify';
const Header = () => {
    const { user, singOutUser } = use(AuthContext);

    const handleSignOut = () => {
        singOutUser()
            .then(() => {
                toast.success('user successfully sign out');
            }).catch(err => {
                console.log('sign out err', err);
                 toast.error(err)
            })
    }


    return (
        <div className='pt-3'>
            <div className="navbar w-full md:p-0 px-4 md:w-9/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="  menu menu-sm dropdown-content bg-base-100  z-1 h-screen top-0 w-60  shadow">
                            <NavLink  to='/' className=''>Home</NavLink>
                            <NavLink to='/lost-found'>Lost & Found</NavLink>
                        </ul>
                    </div>
                    <h1 className='text-[#568F87] text-2xl font-bold'>Belongins</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <NavLink to='/' className=' font-bold text-[#5da097]'>Home</NavLink>
                        <NavLink to='/lost-found' className='text-[#5da097] font-bold'>Lost & Found Items</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="photo"
                                        title={user?.displayName}
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 py-6 px-4 space-y-2 shadow">
                                <NavLink to='/add-items' className='text-[#5da097] font-bold'>Add Lost&Found Item</NavLink>
                                <NavLink to='/recoverd-items' className='text-[#5da097] font-bold'>All Recovered Items</NavLink>
                                <NavLink to='/my-items' className='text-[#5da097] font-bold'>Manage My Items</NavLink>

                                 <button onClick={handleSignOut} className='btn my-2 bg-[#568F87] text-white'>Sign Out</button> 
                                        
                                



                            </ul>
                        </div> : <NavLink to='/auth/signup' className='text-[#5da097] font-bold'>SignUp</NavLink>
                  }

                </div>
            </div>
        </div>
    );
};

export default Header;


