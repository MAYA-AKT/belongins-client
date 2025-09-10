
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Authentication = () => {
    return (
        <div className='flex flex-col min-h-screen '>
            {/* Header */}
             <div className='bg-white'>
                  <Header />

             </div>
            {/* Main Content */}
            <main className='flex-grow md:w-9/12 w-11/12 mx-auto py-6'>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Authentication;