import React from 'react';
import { NavLink } from 'react-router';

const AllItemsCard = ({ item }) => {
    const { _id, thumbnail, title, postType, category, date, description, location } = item;
    return (
        <>

            <NavLink to={`/details/${_id}`}>

                <div className="h-full">
                    <div className="flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1 bg-white hover:shadow-lg rounded-lg overflow-hidden">
                        {/* Thumbnail */}
                        <div className="relative h-48">
                            <img
                                src={thumbnail}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-[#568F87] text-white text-xs px-2 py-1 rounded-full">
                                {postType}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col flex-grow">
                           <div className=' flex justify-between'>
                             <h3 className="text-lg font-semibold text-[#568F87] truncate">{title}</h3>
                             <p className='text-gray-400 text-sm'>{date}</p>
                           </div>
                            <p className="flex-grow text-sm text-gray-500">{description}</p>

                            {/* Footer always sticks to bottom */}
                            
                                <p className="mr-2 text-sm text-gray-400">Category: <span className='text-[#568F87]'>{category}</span></p>
                                <p className="mr-2 text-sm text-gray-400">Location: <span className='text-[#568F87]'>{location}</span></p>
                            
                        </div>
                    </div>
                </div>


            </NavLink>
        </>

    );
};

export default AllItemsCard;