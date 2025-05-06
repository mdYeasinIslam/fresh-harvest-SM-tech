import { Product } from '@/types/product';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={product?.images[0]} alt={product?.productName} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{product?.productName}</h2>
      <p className="text-gray-700">${product.price}</p>
    </div>
  );
};

export default ProductCard;
