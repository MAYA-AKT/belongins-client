import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='md:w-9/12 mx-auto  min-h-screen'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;