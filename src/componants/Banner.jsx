import React from 'react';
import bannar from '../assets/lottiereact/Contact Us.json';
import Lottie from 'lottie-react';
const Banner = () => {
    return (
        <div className="flex md:flex-row flex-col-reverse  items-center justify-between bg-[#acc2bf]  rounded-xl shadow-lg mt-12 ">
           
            <div className="  px-9 text-center md:text-left  md:ml-20 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">LOST AND FOUND</h1>
                <p className="text-gray-600  text-sm">
                    A platform to connect individuals who have lost personal belongings with those <br /> who may have found them.
                </p>
                <button className="mt-6 px-6 md:mb-0 mb-8 py-3 bg-[#6b9d92] hover:bg-[#598678] text-white font-semibold rounded-lg transition duration-300">
                    Get Started
                </button>
            </div>

           
            <div className="md:w-1/2">
                <Lottie animationData={bannar} loop={true} className="w-full h-64 md:h-96" />
            </div>
        </div>


    );
};

export default Banner;