"use client";

import { Product } from '@/typing';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { HeartIcon, ShoppingBagIcon, StarIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cardSlice';
import { useToast } from '@/hooks/use-toast';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);
  const {toast} =useToast()


  const dispatch =useDispatch();

const addcart=(product:Product)=>{
  toast({
    description:"Item Add to Your cart",
    variant:'success'
  })
  dispatch(addItem(product));

}
  return (
    <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 bg-white">
      <Link href={`/product/product-details/${product.id}`}>
        <div className="w-full h-[200px] relative cursor-pointer group overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <p className="mt-4 text-xs uppercase text-gray-500">{product.category}</p>

      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-md md:text-lg font-semibold mt-2 cursor-pointer hover:text-blue-500 transition-colors duration-300 truncate">
          {product.title}
        </h1>
      </Link>

      <div className="flex items-center mt-3">
        {ratingArray.map((_, index) => (
          <StarIcon key={index} size={18} fill="currentColor" className="text-yellow-500" />
        ))}
      </div>

      <div className="flex items-center mt-2 space-x-4">
        <p className="text-lg font-semibold text-gray-800">${product.price}</p>
        <p className="text-sm line-through text-gray-400">${(product.price + 10).toFixed(2)}</p>
      </div>

      <div className="flex justify-between items-center mt-4 space-x-4">
        <Button onClick={()=>{addcart(product)}} size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white transition duration-300">
          Add to Cart
          <ShoppingBagIcon className="ml-2" size={18} />
        </Button>
        <Button size="icon" className="bg-red-600 hover:bg-red-700 text-white transition duration-300">
          <HeartIcon size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
