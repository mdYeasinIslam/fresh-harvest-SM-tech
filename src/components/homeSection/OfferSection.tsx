import Image from 'next/image';
import React from 'react';

const OfferSection = () => {
    const countdownItems = [
        { value: '03', label: 'Days' },
        { value: '18', label: 'Hour' },
        { value: '54', label: 'Min' },
        { value: '21', label: 'Second' },
    ];

    const backgroundImages = [
        { src: '/images/offer/Group.png', alt: 'Group', className: 'hidden md:block  absolute right-0 top-0 w-1/2 h-full' },
        { src: '/images/offer/Group2.png', alt: 'Group', className: 'hidden md:block  absolute left-0 bottom-0 w-1/2 h-full' },
        { src: '/images/offer/leaf1.png', alt: 'Leaf 1', className: 'hidden md:block  absolute left-0 bottom-0' },
        { src: '/images/leaf2.png', alt: 'Leaf 2', className: 'hidden md:block  absolute md:max-w-sm lg:max-w-xl right-0 bottom-0' },
        { src: '/images/leaf3.png', alt: 'Leaf 3', className: 'hidden md:block  absolute md:right-1/4 lg:right-1/3 top-0' },
        { src: '/images/offer/offerBG1.jpg', alt: 'Background image for sm device', className: ' md:hidden absolute top-0 w-full h-full ' },
    ];

    return (
        <section className="relative md:bg-[url('/images/offer/offerBg2.png')] md:bg-cover md:bg-no-repeat bg-white">
            <div className="relative container mx-auto my-10
       h-[620px] md:h-[550px] 2xl:h-[640] md:flex flex-col md:flex-row items-center justify-between  rounded-lg shadow-lg   ">
                { /* Background Images */}
            
                {backgroundImages?.map((image, index) => (
                    <div
                        key={index}
                        className={`${image?.className}`}
                    >
                        <Image
                            src={image?.src}
                            alt={image?.alt}
                            width={500}
                            height={500}
                            className="w-full h-full md:max-w-lg md:mx-0"
                        />
                    </div>
                 ))}

            {/* Left Side: Offer Information */}
            <div className="relative py-24 h-full  md:left-20 place-items-center md:place-items-start text-center  md:text-left space-y-4">
                <div className="inline-block px-2 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[18px] font-semibold">
                    Special Offer
                </div>
                <h1 className="text-5xl xl:text-7xl 2xl:text-[80px] font-bold text-gray-800 mt-2">
                    Seasonal Fruit Bundle
                </h1>
                <p className="text-[32px] md:text-lg text-black md:text-gray-600 font-semibold w-2/3 md:w-full mt-4">
                    Discount up to <span className="text-[#FF6A1A] md:text-green-600 font-bold">80% OFF</span>
                </p>
                <div className="flex  md:justify-start space-x-4 mt-6">
                    {countdownItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg">
                            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                            <span className="text-sm text-gray-600">{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <button className=" md:text-3xl font-bold px-4 md:px-3 py-1 md:py-1 rounded-full border bg-[#176D38] text-white">
                        CODE : <span className="text-[#FAC714]">FRESH25</span>
                    </button>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="hidden lg:block absolute right-0 bottom-24 lg:right-20  lg:bottom-20 xl:right-28">
                <Image
                    src="/images/offer/fruits.png"
                    alt="Seasonal Fruit Bundle"
                    width={500}
                    height={500}
                    className="w-full h-full  lg:w-lg mx-auto xl:mx-0"
                />
            </div>
           </div>
            
        </section>
    );
};

export default OfferSection;

