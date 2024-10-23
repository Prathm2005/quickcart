"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const images = [
    "/images/Home4.jpg",
    "/images/Home5.jpg",
    "/images/Home1.jpg",
    "/images/Home2.jpg",
    "/images/tv.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3500); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center items-center bg-gray-50 relative">
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-xl sm:text-2xl mt-0 md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            MEGA SALE <span className="text-red-500">Special</span> Offer Up To{" "}
            <span className="text-orange-500">75%</span> Off
          </h1>

          <p className="hidden md:block text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Discover unbeatable deals on our top-quality products! Our MEGA SALE
            features exclusive discounts of up to 75% off on a wide range of items, from
            trendy apparel to essential home goods. Whether you're looking to revamp
            your wardrobe or upgrade your living space, now is the perfect time to shop.
            Don't miss out on these limited-time offers — grab your favorites before
            they're gone!
          </p>

          <div className="my-6 lg:hidden relative overflow-hidden">
            <div className="relative w-full h-[300px] flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
              {images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Sale Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>

          <div className="flex mt-6 items-center space-x-4">
            <Link href="#products">
              <Button size="lg" className="bg-green-700 text-white hover:bg-green-800 transition duration-300">
                Shop Now
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-red-700 text-white hover:bg-red-800 transition duration-300"
              onClick={() => (window.location.href = 'mailto:prathmesh.malunjkar02@gmail.com?subject=Contact Inquiry')}
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Image
            src="/images/front.jpg"
            alt="Hero Image"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
