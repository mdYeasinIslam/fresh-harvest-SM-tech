import React from 'react';

const ShopSection = () => {
    return (
        <section className="py-12 bg-gray-100">
            {/* First Part: Title and Description */}
            <div className="text-center mb-8 space-y-4 ">
                <div className="inline-block px-0 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[20px] font-semibold ">
                    Our Products
                </div>
                <h2 className="text-5xl font-extrabold ">Our Fresh Products</h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
                </p>
                <div className="flex justify-center mt-6 space-x-4">
                    {['All', 'Fruits', 'Vegetables', 'Salad'].map((category, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 rounded-md border ${
                                index === 0
                                    ? 'bg-[#749B3F] text-white'
                                    : 'bg-white text-gray-700 border-gray-300'
                            } hover:bg-green-500 hover:text-white transition`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Second Part: Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        {/* Image */}
                        <div className="h-40 bg-gray-200">
                            <img
                                src={`https://via.placeholder.com/150?text=Product+${index + 1}`}
                                alt={`Product ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Card Content */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">Product {index + 1}</h3>
                            <p className="text-gray-600 mb-4">$10.00</p>
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