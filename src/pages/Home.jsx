import React from 'react';
import LatestFindLostItems from '../componants/LatestFindLostItems';
import Banner from '../componants/Banner';
import HappyStory from '../componants/HappyStory';
import { useTitle } from '../hooks/useTitle';
import Starts from '../componants/Starts';

const Home = () => {

    // dynamic title
    useTitle('home');



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
            <div className='mt-15'>
                <Starts/>
            </div>
        </div>
    );
};

export default Home;