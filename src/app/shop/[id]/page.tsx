'use client'
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar'
import {  useGetProductByIdQuery } from '@/services/productApi';
import { Product } from '@/types/product';
import { fixImageUrl } from '@/utility/fixURL';
import { Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'
import ExtraInfo from '../component/ExtraInfo';
import ProductByCategory from '../component/ProductByCategory';

const SingleProduct = () => {
    const param = useParams()
    const id = param.id as string
    const { data, isLoading, isError } = useGetProductByIdQuery(id);
    const [categoryName,setCategoryName] = React.useState('')
    const product =data?.data as Product | undefined
console.log(categoryName)
    const imgeUrl =fixImageUrl(product?.images[0])
    
    if (isLoading) return <div className="flex justify-center"><Loader/></div>;
    if (isError || !product ) return <p>Something went wrong!</p>;

  return (
      <div>
          <Navbar/>
          <div className='container mx-auto lg:h-[560px] flex flex-col md:flex-row justify-between gap-5 my-10 px-5 lg:px-0'>
              <figure className='w-full max-w-[580px] mx-auto lg:h-[550px] border border-gray-300 shadow-md bg-gray-200 rounded-md'>
                <Image
                    src={`${imgeUrl}`}
                    alt={product?.productName}
                    width={500}
                      height={500}
                      unoptimized
                    className='w-full h-full object-cover bg-[#460d0d]'
                />
              </figure>
              <div className="w-full max-w-[580px] lg:h-[550px] mx-auto space-y-2 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                
                <div className="text-sm text-gray-500">
                      <span>{'category'}</span>
                </div>
                <h1 className=" text-5xl font-bold text-gray-800">{product?.productName}</h1>
                <div className="product-rating flex items-center space-x-2 text-sm text-gray-600">
                    <span className="font-medium">5.0</span> 
                    <span>(1 review)</span>
                </div>
                <div className=" text-3xl font-semibold text-[#FF6A1A]">
                      <span>${ product?.price}/kg</span>
                </div>
                <p className=" text-gray-700">
                    {product?.description}
                </p>
                <div className=" space-y-2 flex items-center">
                    <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700">Quantity : </label>
                    <div className="quantity-control flex items-center space-x-2">
                        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">-</button>
                        <input 
                            type="number" 
                            id="quantity" 
                            defaultValue={1} 
                            className="w-16 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">+</button>
                    </div>
                    <span className="text-sm text-gray-500">/kg</span>
                </div>
                <div className=" flex flex-col md:flex-row gap-3 md:gap-5 items-end">
                    <button className="w-full flex items-center gap-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-yellow-600">
                     <Heart/><span>   Save as favorite</span>
                    </button>
                    <button className="w-full flex items-center gap-4 px-4 py-2 bg-[#FF6A1A] text-white rounded hover:bg-green-600">
                      <ShoppingCart/>  <span>Add to cart</span>
                    </button>
                </div>
            </div>
          </div>
          <ExtraInfo product={product} />
          <ProductByCategory categoryId={product?.categoryId } setCategoryName={setCategoryName} />
      </div>
  )
}

export default SingleProduct