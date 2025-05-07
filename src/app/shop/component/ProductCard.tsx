import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
// const fixImageUrl = (url: string) => {
//   if (!url) return ''; // fallback if url is undefined
//   return url.replace('i.ibb.co.com', 'i.ibb.co');
// };
const ProductCard =({ product }: { product: Product }) => {
//     const rawUrl = product?.images[0];
//   const imageUrl = fixImageUrl(rawUrl);
    return (
        <div>

            {/* <div className="border p-4 rounded shadow hover:shadow-lg">
            <Image src={`${imageUrl}`} width={500} height={500} unoptimized alt={product?.productName} className="w-full h-40 object-cover bg-[#F4F6F6]" />
            <h2 className="text-lg font-semibold mt-2">{product?.productName}</h2>
            <p className="text-gray-700">${product.price}</p>
            </div> */}

            <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow p-2 ">

                <div className="w-[149px] h-[120px] lg:w-[230px] lg:h-[200px] xl:w-[258px] xl:h-[208px] bg-gray-200 rounded-md mx-auto">
                    <Image
                        src={product?.images[0]}
                        alt={product?.productName}
                        width={500}
                        height={500}
                        unoptimized
                        className="w-full h-full "
                    />
                </div>

                <div className="text-center p-2">
                    <h3 className="text-lg font-semibold ">{product?.productName}</h3>
                    <p className="text-gray-600 ">${ product?.price}</p>
                    <Link href={`/shop/${product?.id}`} className="">
                        <button className="w-full border border-gray-300 bg-white text-black py-2 rounded hover:bg-[#FF6A1A] transition">
                            Add to Cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      
  );
};

export default ProductCard;
