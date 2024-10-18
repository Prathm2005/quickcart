import React from 'react';
import { getSingleProduct, getProductByCategories } from '@/Request/requests';
import Image from 'next/image';
import { Product } from '@/typing';
import { StarIcon } from 'lucide-react';
import Addcart from './add-cart';
import ProductCard from '@/components/Home/ProductCard';
import GoBackButton from '../GoBackButton'; 

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  try {
    const singleProduct: Product = await getSingleProduct(id);

    if (!singleProduct) {
      return <div className="text-center mt-10">Product not found!</div>;
    }

    const relateProduct: Product[] = await getProductByCategories(singleProduct?.category);

    const num = Math.round(singleProduct?.rating?.rate || 0);
    const starArray = new Array(num).fill(0);

    return (
      <div className={"mt-21"}>
        <div className="mb-4">
          <GoBackButton /> 
        </div>

        <div className={"w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4"}>
          <div className={"col-span-3 mb-6 lg:mb-0"}>
            <Image src={singleProduct?.image} alt={singleProduct?.title} width={400} height={400} />
          </div>

          <div className={"col-span-4"}>
            <h1 className={"lg:text-3xl text-2xl font-bold text-black"}>{singleProduct?.title}</h1>
            <div className={"mt-2 flex items-center space-x-2"}>
              <div className={"flex items-center"}>
                {starArray.map((_, index) => (
                  <StarIcon key={index} size={20} fill={"blue"} />
                ))}
              </div>
              <p className={"text-base text-gray-700 font-semibold"}>({singleProduct?.rating?.count} Reviews)</p>
            </div>
            <span className={"w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-200 mb-4"}></span>
            <h1 className={"lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold"}>
              ${singleProduct?.price?.toFixed(2)}
            </h1>
            <p className={"mt-4 text-base text-black opacity-100"}>{singleProduct?.description}</p>
            <p className={"mt-2 text-sm text-black opacity-70 font-semibold"}>Tag: QuickCart</p>
            <p className={"mt-2 text-sm text-black opacity-70 font-semibold"}>Category: {singleProduct?.category}</p>
            <Addcart product={singleProduct} />
          </div>
        </div>

        <div className={"w-4/5 mt-16 mx-auto"}>
          <h1 className={"text-2xl text-black font-semibold "}>Products Related To It</h1>
          <span className={"h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-200 mb-4"}></span>
          <div className={"mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"}>
            {relateProduct.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching product data:', error);
    return <div className="text-center mt-10">Failed to load product details. Please try again later.</div>;
  }
};

export default ProductDetails;
