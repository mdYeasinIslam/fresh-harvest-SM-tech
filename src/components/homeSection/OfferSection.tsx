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
        { src: '/images/offer/Group.png', alt: 'Group', className: 'absolute right-0 top-0 w-1/2 h-full' },
        { src: '/images/offer/Group2.png', alt: 'Group', className: 'absolute left-0 bottom-0 w-1/2 h-full' },
        { src: '/images/offer/leaf1.png', alt: 'Leaf 1', className: 'absolute left-0 bottom-0' },
        { src: '/images/offer/leaf2.png', alt: 'Leaf 2', className: 'absolute right-0 bottom-0' },
        { src: '/images/offer/leaf3.png', alt: 'Leaf 3', className: 'absolute right-1/3 top-0' },
    ];

    return (
        <div className="relative container mx-auto lg:h-[570px] 2xl:h-[640] flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg bg-[url('/images/offer/offerBG1.jpg')] md:bg-[url('/images/offer/offerBg2.png')] bg-cover bg-no-repeat">
            {/* Background Images */}
            {backgroundImages.map((image, index) => (
                <div className={image.className} >
                    <Image key={index} src={image.src} alt={image.alt} width={500} height={500} className={'w-full h-full max-w-lg mx-auto md:mx-0' } />
                </div>
            ))}
           

            {/* Left Side: Offer Information */}
            <div className="relative left-20 text-center md:text-left space-y-4">
                <div className="inline-block px-2 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[18px] font-semibold">
                    Special Offer
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[80px] font-bold text-gray-800 mt-2">
                    Seasonal Fruit Bundle
                </h1>
                <p className="text-lg text-gray-600 mt-4">
                    Discount up to <span className="text-green-600 font-bold">80% OFF</span>
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                    {countdownItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg">
                            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                            <span className="text-sm text-gray-600">{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <button className="text-2xl font-semibold px-3 py-1 rounded-full border bg-[#176D38] text-white">
                        CODE : <span className="text-[#FAC714]">FRESH25</span>
                    </button>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="absolute right-24 bottom-16">
                <Image
                    src="/images/offer/fruits.png"
                    alt="Seasonal Fruit Bundle"
                    width={500}
                    height={500}
                    className="w-full h-full max-w-lg mx-auto md:mx-0"
                />
            </div>
        </div>
    );
};

export default OfferSection;

