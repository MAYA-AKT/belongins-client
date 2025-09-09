import React from 'react';
import { NavLink } from 'react-router';

const LatestFindLostItemCard = ({ item }) => {
    const {_id, thumbnail, title, postType, category } = item;
   

    return (
        <NavLink to={`/details/${_id}`}>
            <div className="transform transition-transform duration-400 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="relative h-48">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className=' absolute top-2 left-2 bg-[#568F87]  text-white text-xs px-2 py-1 rounded-full'>
                        {postType}
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#568F87] truncate">{title}</h3>
                    <div className="mt-2 text-sm text-gray-600">
                        <span className="mr-2 ">Category : {category}</span>

                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default LatestFindLostItemCard;