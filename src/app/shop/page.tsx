'use client';
import { useGetCategoryQuery, useGetProductsQuery } from '@/services/productApi';
import ProductCard from './component/ProductCard';
import { Product } from '@/types/product';
import CommonTitle from '@/components/CommonTitle';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import NotFound from './component/NotFound';
import { CategoryType } from '@/types/categoryType';

export default function Shop() {
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
    console.log(allProduct)


  if (isLoading || isPending) return <div className="flex justify-center"><Loader/></div>;
  if (error || categoryError) return <p className="p-4 text-red-500">Failed to load products.</p>;

    return (
        <section >
            <Navbar/>
            <div className="text-center mb-8  space-y-3 md:space-y-4 ">
                <CommonTitle
                    content2='Our Fresh Products'
                    content3='We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.'
                    style_div='inline-block px-0 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[20px] font-semibold'
                    style_h='text-3xl lg:text-5xl font-extrabold'
                    style_p='text-gray-600 max-w-xl mx-auto'
                />
                <div className="flex justify-center mt-6 gap-3 md:space-x-4">
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
        
        {
            show === 'Drinksss' && allProduct.length === 0 ? <NotFound /> :
                    
            <div className="container mx-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      </section>
  );
}
