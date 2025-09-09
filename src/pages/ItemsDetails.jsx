import React from 'react';
import { useLoaderData } from 'react-router';

const ItemsDetails = () => {
    const item = useLoaderData();
    const { _id, thumbnail, title, postType, category, date, description, email, location, name, photo } = item.data;
   

    return (
        <div className=" bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row my-10 p-10">

            <div className="md:w-1/3 h-64 md:h-auto">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="p-6 flex-1 flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img src={photo} alt={name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                        <p className="text-sm text-gray-500">{email}</p>
                    </div>
                </div>
                <div className="text-xs text-[#568F87]">Post Date : {date}</div>
                {/* Body */}
                <div className="m-6 space-y-2">
                    <p className="text-lg font-semibold text-[#568F87]">{title}</p>
                    <p className="text-gray-500">Description : {description}</p>

                    <p className=" text-gray-500"> Category : <span className='text-[#568F87]'> {category}</span></p>

                    <p className=" text-gray-500"> PostType : <span className='text-[#568F87]'>{postType}</span></p>

                    <p className='text-gray-500'>Location : <span className='text-[#568F87]'>{location}</span></p>

                </div>

                {/* Footer */}

            </div>
        </div>

    );
};

export default ItemsDetails;