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
        <div>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100  z-1 h-screen top-0 w-60  shadow">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/lost-found'>Lost & Found</NavLink>
                        </ul>
                    </div>
                    <h1>Belongins</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/lost-found'>Lost & Found Items</NavLink>
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
                                <NavLink to='/add-items'>Add Lost&Found Item</NavLink>
                                <NavLink to='/recoverd-items'>All Recovered Items</NavLink>
                                <NavLink to='/my-items'>Manage My Items</NavLink>

                                 <button onClick={handleSignOut} className='btn'>Sign Out</button> 
                                        
                                



                            </ul>
                        </div> : <NavLink to='/auth/signup'>SignUp</NavLink>
                  }

                </div>
            </div>
        </div>
    );
};

export default Header;


