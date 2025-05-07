import Loader from '@/components/Loader';
import { useGetCategoryQuery, useGetProductsQuery } from '@/services/productApi';
import { Product } from '@/types/product';
import React, { useEffect } from 'react'
import ProductCard from './ProductCard';
import CommonTitle from '@/components/CommonTitle';
import { CategoryType } from '@/types/categoryType';

type Prop = {
    categoryId: string
    setCategoryName: (name:string) => void
}

const ProductByCategory = ({ categoryId ,setCategoryName}: Prop) => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const { data: category, error:categoryError, isLoading: isPending } = useGetCategoryQuery();

    const productsData = products?.data as Product[]
    const categoryData = category?.data as CategoryType[]
    useEffect(() => {
        const categoryName = categoryData?.find((catName) =>catName.id === categoryId )?.categoryName
       console.log(categoryName)
        setCategoryName(categoryName as string);
    }, [categoryId])


     const filteredProducts = productsData?.filter((product) => {
        return product.categoryId === categoryId;
     });
    
    console.log(categoryData)
    if (isPending ||isLoading ) return <div className="flex justify-center"><Loader/></div>;
    if (error || categoryError) return <p className="p-4 text-red-500">Failed to load products.</p>;
    if (!filteredProducts) return <p className="p-4 text-red-500">No products found.</p>;

  return (
      <div className='container mx-auto my-20 px-5 space-y-5'>
          <div className='text-center'>
              <CommonTitle
                  content1='Our Fresh Products'
                    content2='Related Products'
                    
                    style_div='inline-block px-0 py-0 bg-[#749B3F1A] text-[#749B3F] rounded-full text-[20px] font-semibold'
                    style_h='text-3xl lg:text-5xl font-extrabold'
                    style_p='text-gray-600 max-w-xl mx-auto'
                />
          </div>
         
          <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {filteredProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
          </div>
      </div>
  )
}

export default ProductByCategory