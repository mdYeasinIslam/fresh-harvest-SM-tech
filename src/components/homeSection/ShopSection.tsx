'use client'
import React, { useState } from 'react';
import CommonTitle from '../CommonTitle';
import Link from 'next/link';
import { useGetCategoryQuery, useGetProductsQuery } from '@/services/productApi';
import { Product } from '@/types/product';
import ProductCard from '@/app/shop/component/ProductCard';
import Loader from '../Loader';
import { CategoryType } from '@/types/categoryType';
import NotFound from '@/app/shop/component/NotFound';

const ShopSection = () => {
     const { data: products, error, isLoading } = useGetProductsQuery();
     
     const { data: category, error:categoryError, isLoading:isPending } = useGetCategoryQuery();
     const [allProduct ,setAllProduct] = useState<Product[]>([])
     const [show,setShow] = useState('All')
     
     const productsData = products?.data as Product[]
    const categoryData = category?.data as CategoryType[]

    const handleFilter = (id: string,name?:string) => {
        if(id === 'All'){
            setAllProduct([])
            setShow('All')
            return
        }
        else {
            setShow(name as string)
            const filteredProducts = productsData?.filter((product) => {
                return product.categoryId === id;
            });
            setAllProduct(filteredProducts as Product[])
        }
    }


      if (isLoading) return <div className="p-4 flex justify-center"><Loader/></div>;
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
               <div className="flex justify-center mt-6 gap-1 md:gap-3 md:space-x-4">
                    <button
                    onClick={()=>handleFilter('All')}
                        className={`px-3 md:px-4 py-2 rounded-md border ${
                                show === 'All'
                                    ? 'bg-[#749B3F] text-white'
                                    : 'bg-white text-gray-700 border-gray-300'
                            } hover:bg-[#749B3F] hover:text-white transition`}>
                        ALl
                    </button>
                    {categoryData?.map((category, index) => (
                        <button
                            onClick={()=>handleFilter(category?.id,category?.categoryName)}
                            key={index}
                            className={`px-3 md:px-4 py-2 rounded-md border ${
                                show === category?.categoryName
                                    ? 'bg-[#749B3F] text-white'
                                    : 'bg-white text-gray-700 border-gray-300'
                            } hover:bg-[#749B3F] hover:text-white transition`}
                        >
                            {category?.categoryName}
                        </button>
                    ))}
                </div>
            </div>

            {/* Second Part: Cards */}
            {
            show === 'Drinksss' && allProduct.length === 0 ? <NotFound /> :
                    
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                allProduct.length > 0 ? (
                    allProduct?.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    )))
                    : <>
                    {productsData?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                    </>
            }
            </div>
        }
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