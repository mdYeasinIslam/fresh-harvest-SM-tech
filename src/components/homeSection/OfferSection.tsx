import React from 'react';

const OfferSection = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg">
            {/* Left Side: Offer Information */}
            <div className="flex-1 text-center md:text-left">
                <p className="text-sm font-semibold text-green-600 uppercase">Special Offer</p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">Seasonal Fruit Bundle</h1>
                <p className="text-lg text-gray-600 mt-4">
                    Discount up to <span className="text-green-600 font-bold">80% OFF</span>
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
                        <p className="text-2xl font-bold text-gray-800">03</p>
                        <span className="text-sm text-gray-600">Days</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
                        <p className="text-2xl font-bold text-gray-800">18</p>
                        <span className="text-sm text-gray-600">Hour</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
                        <p className="text-2xl font-bold text-gray-800">54</p>
                        <span className="text-sm text-gray-600">Min</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
                        <p className="text-2xl font-bold text-gray-800">21</p>
                        <span className="text-sm text-gray-600">Second</span>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="text-gray-600">
                        CODE: <span className="text-green-600 font-bold">FRESH28</span>
                    </p>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 mt-8 md:mt-0">
                <img
                    className="w-full max-w-sm mx-auto md:mx-0"
                    src="/images/offer/fruits.png"
                    alt="Seasonal Fruit Bundle"
                />
            </div>
        </div>
    );
};

export default OfferSection;