import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LatestFindLostItemCard from './LatestFindLostItemCard';

const LatestFindLostItems = () => {
    const [latestItems, setLatestItems] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_apiUrl}/get-items`)
            .then(res => {

                setLatestItems(res.data);
            }).catch(err => {
                console.log('get item err', err);

            })
    }, [])
    return (
        <div>
            <h1 className='text-xl text-[#568F87] my-7'>Latest Find & Lost Items</h1>
            {
                latestItems.length === 0 ? <p>Loading...</p> :

                    <div className=" ">
                        <div className="grid md:grid-cols-6 grid-cols-2 gap-4">
                            {latestItems.map(item => (
                                <LatestFindLostItemCard key={item._id} item={item} />
                            ))}
                        </div>
                    </div>


            }
            <button>See All</button>
        </div>
    );
};

export default LatestFindLostItems;

// flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-2 scrollbar-hide