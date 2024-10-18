"use client";
import { Button } from "../ui/button";
import Image from "next/image"; 
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center items-center bg-gray-50 relative">
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            MEGA SALE <span className="text-red-500">Special</span> Offer Up
            To <span className="text-orange-500">75%</span> Off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Discover unbeatable deals on our top-quality products! Our MEGA SALE
            features exclusive discounts of up to 75% off on a wide range of items,
            from trendy apparel to essential home goods. Whether you&apos;re looking 
            to revamp your wardrobe or upgrade your living space, now is the perfect 
            time to shop. Don&apos;t miss out on these limited-time offers — grab your favorites 
            before they&apos;re gone!
          </p>
          <div className="flex mt-6 items-center space-x-4">
            <Link href="#products">
              <Button size="lg" className="bg-green-700 text-white hover:bg-green-800 transition duration-300">
                Shop Now
              </Button>
            </Link>
            <Button size="lg" className="bg-red-700 text-white hover:bg-red-800 transition duration-300"
             onClick={() => window.location.href = 'mailto:prathmesh.malunjkar02@gmail.com?subject=Contact Inquiry'}
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
