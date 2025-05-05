import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
    return (
        <section className="container max-w-[1215px] mx-auto h-[650px] mt-16  flex flex-col md:flex-row  md:items-start gap-6  bg-white ">
            {/* Left Side: Image */}
            <div className="w-full h-full ">
                <Image
                    src="/about_Img3.png"
                    alt="About Fresh Harvest"
                    width={500}
                    height={500}   
                    className="w-full h-full rounded-lg"
                />
            </div>

            {/* Right Side: Details */}
            <div className="w-full h-full md:flex flex-col justify-center items-start p-4 md:p-0 ">
                <div className='md:w-[470px] space-y-2 md:space-y-4'>
                    <div className="inline-block px-2 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[18px] font-semibold ">
                    About us
                    </div>
                    <h2 className="text-[30px] md:text-[45px] font-semibold text-gray-800">About Fresh Harvest1</h2>
                    <p className="text-gray-600 text-[13px] md:text-[14px]">
                        Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.
                    </p>
                    <button className="  border border-[#FF6A1A]  bg-white  font-semibold px-16 py-2 rounded hover:bg-[#FF6A1A] hover:text-black text-[#FF6A1A] transition">
                        Read More
                    </button>
                </div>
               
            </div>

        </section>
    );
};

export default AboutSection;