import React from 'react';
import LatestFindLostItems from '../componants/LatestFindLostItems';
import Banner from '../componants/Banner';
import HappyStory from '../componants/HappyStory';

const Home = () => {
    return (
        <div className=''>
            <div>
                <Banner/>
            </div>
            <div className='mt-20'>
                <LatestFindLostItems />
            </div>
            <div>
                {/* Happy Recoveries  */}
                <HappyStory/>
            </div>
        </div>
    );
};

export default Home;