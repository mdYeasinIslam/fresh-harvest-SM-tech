import Image from 'next/image';
import React from 'react';

const ShopSection = () => {
    return (
        <section className="container mx-auto bg-white my-44 px-4">
            {/* First Part: Title and Description */}
            <div className="text-center mb-8  space-y-3 md:space-y-4 ">
                <div className="inline-block px-0 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[20px] font-semibold ">
                    Our Products
                </div>
                <h2 className="text-3xl lg:text-5xl font-extrabold ">Our Fresh Products</h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
                </p>
                <div className="flex justify-center mt-6 gap-3 md:space-x-4">
                    {['All', 'Fruits', 'Vegetables', 'Salad'].map((category, index) => (
                        <button
                            key={index}
                            className={`px-3 md:px-4 py-2 rounded-md border ${
                                index === 0
                                    ? 'bg-[#749B3F] text-white'
                                    : 'bg-white text-gray-700 border-gray-300'
                            } hover:bg-[#749B3F] hover:text-white transition`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Second Part: Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow p-2"
                    >
                        {/* Image */}
                        <div className="h-[120px] md:h-52 bg-gray-200 rounded-md">
                            <Image
                                src={`/banner-img.png`}
                                alt={`Product ${index + 1}`}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Card Content */}
                        <div className="text-center p-2">
                            <h3 className="text-lg font-semibold ">Product {index + 1}</h3>
                            <p className="text-gray-600 ">$10.00</p>
                            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopSection;