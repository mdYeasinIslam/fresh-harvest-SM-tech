'use client'
import Image from 'next/image';
import React from 'react';
import CommonTitle from '../CommonTitle';
import Link from 'next/link';
import { useGetProductsQuery } from '@/services/productApi';
import { Product } from '@/types/product';
import ProductCard from '@/app/shop/component/ProductCard';

const ShopSection = () => {
     const { data: products, error, isLoading } = useGetProductsQuery();
      const productsData = products?.data as Product[]
      if (isLoading) return <p className="p-4">Loading...</p>;
      if (error) return <p className="p-4 text-red-500">Failed to load products.</p>;
    
    return (
        <section className="container mx-auto bg-white mt-44 px-4">
            {/* First Part: Title and Description */}
            <div className="text-center mb-8  space-y-3 md:space-y-4 ">
                <CommonTitle
                    content1=' Our Products'
                    content2='Our Fresh Products'
                    content3='We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.'
                    style_div='inline-block px-0 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[20px] font-semibold'
                    style_h='text-3xl lg:text-5xl font-extrabold'
                    style_p='text-gray-600 max-w-xl mx-auto'
                />
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
                {productsData?.slice(0,8)?.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
                <div className=' w-full text-center mt-8'>
                <Link href="/shop">
                     <button  className="cursor-pointer  border border-[#FF6A1A]  bg-white  font-semibold px-16 py-2 rounded hover:bg-[#FF6A1A] hover:text-black text-[#FF6A1A] transition">
                         See all products
                    </button>
                </Link>
                </div>
        </section>
    );
};

export default ShopSection;