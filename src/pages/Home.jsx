import React from 'react';
import LatestFindLostItems from '../componants/LatestFindLostItems';
import Banner from '../componants/Banner';

const Home = () => {
    return (
        <div className=''>
            <div>
                <Banner/>
            </div>
            <div className='my-10'>
                <LatestFindLostItems />
            </div>
        </div>
    );
};

export default Home;