import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-6  bg-white">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2">
                <Image
                    src="/about_Img3.png"
                    alt="About Fresh Harvest"
                    width={500}
                    height={500}   
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>

            {/* Right Side: Details */}
            <div className="w-ful h-full md:w-1/2 text-center md:text-left place-content-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About Fresh Harvest</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.
                </p>
                <button className="px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition">
                    Read More
                </button>
            </div>
        </section>
    );
};

export default AboutSection;