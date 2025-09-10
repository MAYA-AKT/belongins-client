import React from 'react';
import Lottie from "lottie-react";
import error from '../assets/lottiereact/Page Not Found 404.json';
import Header from '../componants/Header';
import { useTitle } from '../hooks/useTitle';

const ErrorPage = () => {

    //    add dynamic title 
 useTitle('error');

    return (
        <div className=''>
          <Header/>
            <div className='w-9/12 my-10 mx-auto'>
                <Lottie animationData={error}></Lottie>
            </div>
        </div>
    );
};

export default ErrorPage;