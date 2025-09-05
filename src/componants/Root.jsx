import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='md:w-10/12 mx-auto'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;