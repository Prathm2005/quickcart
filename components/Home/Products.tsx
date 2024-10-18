"use client";
import { getProducts } from '@/Request/requests';
import { Product } from '@/typing';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      try {
        const products: Product[] = await getProducts();
        setProducts(products);
      } catch (error) {
        setError("Failed to load products. Please try again.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div id="products" className={"pt-17 pb-14"}> 
      <h1 className={"text-center font-bold text-2xl"}>All Products Here</h1>

      {loading ? (
        <div className={"flex justify-center items-center mt-16"}>
          <Loader size={45} className={"animate-spin"} />
        </div>
      ) : error ? (
        <div className={"text-red-500 text-center mt-16"}>
          {error}
        </div>
      ) : (
        <div className={"w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8"}>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
