
import { Outlet } from 'react-router';
import Header from './Header';

const Authentication = () => {
    return (
        <div>
           <Header/>
            <Outlet/>
        </div>
    );
};

export default Authentication;