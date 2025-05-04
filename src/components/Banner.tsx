import React from 'react';

const Banner = () => {
    return (
        <div className="bg-green-100 relative">

            <div className="relative text-left py-16 px-4 bg-green-50">
                <h1 className="text-4xl font-bold text-green-700">Fresh Fruits and Vegetables</h1>
                <p className="mt-4 text-lg text-green-600">
                    At Fresh Harvest, we are passionate about providing you with the freshest
                    and most flavorful fruits and vegetables.
                </p>
                <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500">
                    Shop Now
                </button>
                <div className="mt-10 bg-green-200 p-6 rounded shadow-md inline-block">
                    <p className="text-green-700 font-semibold">Special Offer</p>
                    <h2 className="text-2xl font-bold text-green-800">Fresh Salad</h2>
                    <p className="text-green-600">Up to 70% off</p>
                    <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
                        Code: FRESH70
                    </button>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                    <img src="/path-to-app-store-logo.png" alt="App Store" className="h-12" />
                    <img src="/path-to-google-play-logo.png" alt="Google Play" className="h-12" />
                </div>
                {/* <img
                    src="/leap.png"
                    alt="Leaf"
                    className="bg-white absolute top-4 left-4 w-16 h-16"
                /> */}
            </div>
            <img
                src="/banner-img.png"
                alt="Right Side"
                className="absolute top-0 right-0 w-1/3 h-full object-cover"
            />
        </div>
    );
};

export default Banner;