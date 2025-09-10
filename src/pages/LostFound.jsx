import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllItemsCard from '../componants/AllItemsCard';
import { useTitle } from '../hooks/useTitle';

const LostFound = () => {
   
    //    add dynamic title 
 useTitle('lost-found');


    const allItems = useLoaderData();
    const [items] = useState(allItems.data);
    console.log(items);
    
    return (
        <div className='my-20'>
            
           <div className='grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-6 p-2 '>
                {
                    items.map(item=> <AllItemsCard key={item._id} item={item} /> )
                }
            </div> 
        </div>
    );
};

export default LostFound;