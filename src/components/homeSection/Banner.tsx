'use client';

import React from 'react';
import Navbar from '../Navbar';
import Image from 'next/image';

const BackgroundImage = () => (
    <div className="absolute top-0 left-0 h-full w-full">
        <Image
            src="/images/banner/bannerBg.png"
            alt="Banner Background"
            fill
            priority
            className="hidden md:flex object-right lg:object-center"
        />
        <Image
            src="/images/banner/Bg-smDevice.png"
            alt="Banner Background"
            fill
            priority
            className="flex md:hidden object-right lg:object-center"
        />
    </div>
);

const ForegroundContent = () => (
        <div className="relative z-10 w-full lg:w-[660px] lg:h-[390px] text-left md:left-0 lg:left-12 xl:left-20  top-10 md:top-14 lg:top-20 space-y-7 lg:space-y-8 px-4 md:px-10">
            <div className="space-y-4">
                <h5 className="py-1 px-4 bg-[#749B3F1A] inline-block rounded-xl">
                    <span className="text-[#749B3F] font-semibold text-[17px] md:text-[19px]">
                        Welcome to Fresh Harvest
                    </span>
                </h5>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#212337]">
                    Fresh Fruits <br />and Vegetables
                </h1>
                <p className="max-w-md text-[14px] text-[#212337]">
                    At Fresh Harvest, we are passionate about providing you with the freshest
                    and most flavorful fruits and vegetables.
                </p>
            </div>
            <button className="bg-[#FF6A1A] text-white px-6 py-3 rounded text-[18px] font-semibold transition-transform transform hover:scale-105 duration-500 hover:bg-[#e55a0f] shadow-lg hover:shadow-xl">
                Shop Now
            </button>
            <div className='relative md:left-32 lg:left-40 xl:left-48 w-[192px] md:w-[225px]  lg:w-[332px] flex border-2 border-[#749B3F] rounded-lg bg-[#EBEBEB] p-1'>
                <div className='lg:p-1'>
                    <h4 className='font-medium text-[8px] md:text-[11px] lg:text-[14px] text-[#176D38] '>Special Offer</h4>
                    <h1 className='text-[16px] md:text-xl lg:text-3xl font-medium '>Fresh Salad</h1>
                    <p className='text-[#176D38] text-[9px] lg:text-[16px] font-semibold'>Up to <span className='text-black text-[11px] lg:text-xl font-semibold border rounded-full border-red-500'> 70%</span> <span className='text-black'>off</span></p>
                    <button className='text-[9px] lg:text-[12px] font-semibold px-1 rounded-full  border bg-[#176D38] text-white'>CODE : <span className='text-[#FAC714]'>FRESH25</span> </button>
                </div>
                    <Image src="/images/banner/bannerImg2.png" alt="Banner" width={200} height={200} className='w-[86px] lg:w-[150px] h-[84px] lg:h-[150px]' />
            </div>
            <div className='relative top-24 lg:top-1 space-y-2'>
            <p>Download App :</p>
            <figure className=' flex gap-2 lg:gap-4'> 
            <Image
                src="/images/banner/appstore.png" alt="Banner" width={500}
                height={500} className='w-34 h-full' />
            
            <Image src="/images/banner/googleplay.png" alt="Banner"
                width={500}
                height={500} className='w-34 h-full' />
            </figure>
            </div>
         </div>
    
);

const Banner = () => {
    return (
        <div className="relative max-w-[1600px] mx-auto h-[810px] md:h-[900px] lg:h-[1000px]">
            <BackgroundImage />
            <Navbar />
            <ForegroundContent />
        </div>
    );
};

export default Banner;
