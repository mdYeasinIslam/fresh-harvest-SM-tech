import React from 'react';
import Navbar from './Navbar';

const Banner = () => {
    return (
        <div className=" w-full h-[810px] md:h-[1000px] bg-cover bg-center" style={{ backgroundImage: "url('/bannerBg.png')" }}>
            <Navbar />
            <div  className="relative w-[660px] h-[390px] text-left left-28 top-20  space-y-8 border">
                
                <div className='space-y-4'>
                     <h5 className='  py-1 px-4 bg-[#749B3F1A] w-68'>
                    <span className='text-[#749B3F] font-medium lg:text-[20px]'>Welcome to Fresh Harvest</span>
                </h5>
                <h1 className="text-7xl font-semibold text-[#212337]">Fresh Fruits and Vegetables</h1>
                <p className="mt-4 text-lg text-green-600">
                    At Fresh Harvest, we are passionate about providing you with the freshest
                    and most flavorful fruits and vegetables.
                </p>
               </div>
                <button className=" bg-[#FF6A1A] text-white px-6 py-3 rounded text-[18px] font-semibold transition-transform transform hover:scale-105 duration-500 hover:bg-[#e55a0f] shadow-lg hover:shadow-xl">
                    Shop Now
                </button>
            </div>
            <div>
                hello
            </div>
           
        </div>
    );
};

export default Banner;
