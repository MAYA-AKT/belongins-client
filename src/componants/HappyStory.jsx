import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const HappyStory = () => {

const reviews = [
    {
        id: 1,
        name:'Jane D.',
        item: "Wallet",
        story:"I lost my wallet last week, and within 2 days, I found it thanks to this platform. The finder contacted me, and I got it back safely!",
        date:"5 Sept 2025"
    },
    {
        id: 2,
        name:'Ahmed R.',
        item: "Laptop",
        story:"I was worried about losing my laptop, but a kind stranger reported it here. The process was smooth and fast!",
        date:"3 Sept 2025"
    },
    {
        id: 3,
        name:'Maria S.',
        item: "Necklace",
        story:"I never thought I’d get my lost necklace back. Thanks to this platform, I was reunited with it in just 1 day!",
        date:"1 Sept 2025"
    },

    

];
     return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-8xl mx-auto bg-white  py-20">
           
            <div className="">
                <img
                    src="https://i.ibb.co.com/nMmM0GSD/images-q-tbn-ANd9-Gc-Qt-Ea-Vg-0-BVx-RDkkuc-Hh6-LPQUq-W6z0-ORBu-OWQ-s.jpg"
                    alt="Fresh Food"
                    className="w-full h-auto md:h-[300px] rounded-lg shadow-md object-cover"
                />
            </div>

           
            <div className="w-full lg:w-1/2 max-w-xl text-gray-700">
                <h2 className="text-3xl font-semibold mb-6 text-center lg:text-left">
                    Fresh Food. <span className="text-green-800 font-bold">Our Success Storys</span>
                </h2>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="bg-white rounded-lg p-6 my-2 shadow-md">
                                <div className="flex items-center gap-2 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-green-500 text-xl">★</span>
                                    ))}
                                </div>
                                <p className="mb-4 font-bold">{review.name}</p>
                                <p className="font-semibold text-[#598678]">{review.item}</p>
                                <p className=" text-gray-400 my-2">{review.story}</p>
                                <p className="font-semibold ">{review.date}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HappyStory;