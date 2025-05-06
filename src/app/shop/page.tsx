'use client';
import { useGetProductsQuery } from '@/services/productApi';
import ProductCard from './component/ProductCard';
import { Product } from '@/types/product';

export default function Shop() {
  const { data: products, error, isLoading } = useGetProductsQuery();
    const productsData = products?.data as Product[]
  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Failed to load products.</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productsData?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
