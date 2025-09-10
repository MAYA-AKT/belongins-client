import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen '>
           
            <div className=' fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
                <Header />
            </div>

           
            <main className='flex-grow md:w-9/12 w-11/12 mx-auto my-10'>
                <Outlet />
            </main>

           
            <Footer />
        </div>
    );
};

export default Root;