"use client";

import { Button } from '@/components/ui/button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem, addItem } from '@/store/cardSlice';
import { Product } from '@/typing';
import { useToast } from "@/hooks/use-toast";

const AddCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  
  const addCartHandler = (item: Omit<CartItem, 'quantity'>) => {
    dispatch(addItem(item));
    toast({
      description: "Item added to your cart",
      variant: "success",
    });
  };

  return (
    <Button 
      onClick={() => addCartHandler({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        image: product.image,
        rating: product.rating,
      })}
      className={"mt-6 mb-4"}
    >
      ADD TO CART
    </Button>
  );
};

export default AddCart;
