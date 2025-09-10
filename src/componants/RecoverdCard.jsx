import React from 'react';
import { IoLocation } from "react-icons/io5";
const RecoverdCard = ({ item }) => {
    console.log(item);

    const { date, location, email, name } = item;
    return (
        <>
            <div className='bg-white'>
                <div className="flex justify-between p-8 ">
                    

                    <div className="">
                        <p className="text-lg font-semibold text-[#568F87]">{name}</p>
                        <p className="text-sm text-gray-400">{email}</p>

                    </div>
                    <div className='flex justify-end flex-col space-y-2'>
                        <span className="text-sm text-gray-400">{date}</span>
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Recovered</span>
                    </div>
                </div>
                <p className='border-1 border-gray-200' />
                <div className='flex justify-end px-2 py-1'>
                    <p className="text-sm text-[#568F87] flex items-center gap-2">
                        <span><IoLocation /></span>
                        {location}
                    </p>
                </div>
            </div>

        </>
    );
};

export default RecoverdCard;