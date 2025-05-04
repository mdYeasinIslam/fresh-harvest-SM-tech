import React from 'react';
import Navbar from './Navbar';

const Banner = () => {
    return (
        <div className="relative w-full h-[810px] md:h-[1000px] bg-cover bg-center" style={{ backgroundImage: "url('/bannerBg.png')" }}>
            <Navbar />
            <div id='content' className="relative z-10 text-left py-16 px-4">
                <h1 className="text-4xl font-bold text-green-700">Fresh Fruits and Vegetables</h1>
                <p className="mt-4 text-lg text-green-600">
                    At Fresh Harvest, we are passionate about providing you with the freshest
                    and most flavorful fruits and vegetables.
                </p>
                <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500">
                    Shop Now
                </button>
            </div>
           
        </div>
    );
};

export default Banner;
