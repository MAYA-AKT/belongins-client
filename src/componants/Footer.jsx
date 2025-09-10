import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#568F87] text-white py-10 ">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                    
                    <div>
                        <h2 className="text-2xl font-bold">Belongins</h2>
                        <p className="mt-2 text-sm">
                            A platform to connect individuals who have lost belongings
                            with those who may have found them.
                        </p>
                    </div>

                    
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/lost" className="hover:underline">Report Lost Item</a></li>
                            <li><a href="/found" className="hover:underline">Report Found Item</a></li>
                            <li><a href="/browse" className="hover:underline">Browse Items</a></li>
                            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Contact</h3>
                        <p className="text-sm">Email: support@lostfound.com</p>
                        <p className="text-sm">Phone: +880 1407533436</p>

                       
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-gray-200">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className="text-center text-xs mt-10 border-t border-white/20 pt-5">
                    © {new Date().getFullYear()} Lost & Found. All rights reserved.
                </div>
            </footer>

        </div>
    );
};

export default Footer;