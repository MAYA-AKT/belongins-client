import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LatestFindLostItemCard from './LatestFindLostItemCard';
import { Link } from 'react-router';
import loadding from '../assets/lottiereact/loading.json';
import Lottie from 'lottie-react';

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
        <div className=''>
            <h1 className='text-xl text-[#568F87] my-5'>Latest Find & Lost Items</h1>
            {
                latestItems.length === 0 ? <Lottie animationData={loadding}></Lottie> :

                    <div className=" bg-white p-10 ">
                        <div className="grid md:grid-cols-6 grid-cols-2 gap-4">
                            {latestItems.map(item => (
                                <LatestFindLostItemCard key={item._id} item={item} />
                            ))}
                        </div>
                    </div>


            }
            <div className='flex justify-end my-10'>
                <Link to='/lost-found' className=' text-lg border-b text-[#568F87]'>See all</Link>
            </div>
        </div>
    );
};

export default LatestFindLostItems;

// flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-2 scrollbar-hide