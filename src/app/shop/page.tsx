'use client';
import { useGetProductsQuery } from '@/services/productApi';
import ProductCard from './component/ProductCard';
import { Product } from '@/types/product';
import CommonTitle from '@/components/CommonTitle';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';

export default function Shop() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const productsData = products?.data as Product[]
  if (isLoading) return <div className="flex justify"><Loader/></div>;
  if (error) return <p className="p-4 text-red-500">Failed to load products.</p>;

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
        
        <div className="container mx-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsData?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
  );
}
