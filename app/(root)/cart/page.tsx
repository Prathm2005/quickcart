"use client";
import React from "react";
import { Rootestate } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { addItem, CartItem, removeItem } from "@/store/cardSlice";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PaymentDetails {
  id?: string;
  status?: string;
 
}

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: Rootestate) => state.cart.items);
  const totalquantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const vat = (+totalPrice * 0.15).toFixed(2);
  const totalpricevat = (+totalPrice + +vat).toFixed(2);

  const additemhandler = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const removeitemhandler = (id: number) => {
    dispatch(removeItem({ id }));
  };

  const { user } = useUser();

  const handlePaymentSuccess = (details: PaymentDetails) => {
    console.log("Payment Successful:", details);
  };

  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!PAYPAL_CLIENT_ID) {
    throw new Error("Missing PAYPAL_CLIENT_ID environment variable");
  }

  return (
    <div className={"mt-8 min-h-[60vh]"}>
      {items.length === 0 && (
        <div className={"flex items-center w-full h-[80vh] flex-col justify-center"}>
          <Image
            src="/images/cart.svg"
            alt="empty_cart"
            width={400}
            height={400}
            className={"object-cover mx-auto"}
          />
          <h1 className={"mt-8 text-2xl font-semibold"}>Cart Is Empty</h1>
          <Link href="/">
            <Button className={"mt-4"}>Shop Now</Button>
          </Link>
        </div>
      )}
      {items.length > 0 && (
        <div className={"md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12"}>
          <div className={"rounded-lg shadow-md overflow-hidden xl:col-span-4"}>
            <h1 className={"p-4 text-xl sm:text-3xl font-bold text-white bg-gray-700"}>
              Your cart ({totalquantity} items)
            </h1>
            {items.map((item) => (
              <div key={item.id}>
                <div className={"flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10"}>
                  <div>
                    <Image src={item.image} alt={item.title} width={180} height={180} />
                  </div>
                  <div>
                    <h1 className={"md:text-xl text-base font-bold text-black"}>{item.title}</h1>
                    <h1 className={"md:text-lg text-sm font-semibold"}>Category: {item.category}</h1>
                    <h1 className={"md:text-2xl text-lg font-bold text-blue-950"}>${item.price}</h1>
                    <h1 className={"md:text-lg text-sm font-semibold"}>Quantity: {item.quantity}</h1>
                    <div className={"flex items-center mt-4 space-x-2"}>
                      <Button onClick={() => additemhandler(item)}>Add</Button>
                      <Button onClick={() => removeitemhandler(item.id)} variant={"destructive"}>
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={"xl:col-span-2"}>
            <div className={"bg-indigo-950 sticky top-[25vh] p-6 rounded-lg"}>
              <h1 className={"text-center mt-8 mb-8 text-white text-2xl font-semibold"}>Summary</h1>
              <div className={"w-full h-[1.2px] bg-white bg-opacity-20"}></div>
              <div className={"flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between"}>
                <span>SubTotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className={"flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between"}>
                <span>VAT</span>
                <span>${vat}</span>
              </div>
              <div className={"flex mb-6 text-xl uppercase font-semibold text-white items-center justify-between"}>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className={"w-full h-[1.2px] bg-white bg-opacity-20"}></div>
              <div className={"flex mt-6 mb-6 text-xl uppercase font-semibold text-white items-center justify-between"}>
                <span>Total</span>
                <span>${totalpricevat}</span>
              </div>

              {user ? (
                <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID }}>
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                          {
                            amount: {
                              value: totalpricevat,
                              currency_code: "USD",
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={async (data, actions) => {
                      if (actions.order) {
                        const details = await actions.order.capture();

                        const paymentDetails: PaymentDetails = {
                          id: details.id || "",
                          status: details.status || "unknown", 
                          
                        };

                        handlePaymentSuccess(paymentDetails);
                      } else {
                        console.error("Order is not defined.");
                      }
                    }}
                  />
                </PayPalScriptProvider>
              ) : (
                <Link href="/sign-in">
                  <Button className={"bg-orange-500 w-full "}>Sign-In To Proceed</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
