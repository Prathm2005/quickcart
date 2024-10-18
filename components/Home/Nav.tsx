import React from 'react';
import Link from 'next/link';
import Searchbox from '../Helper/Searchbox';
import { HeartIcon, UserIcon } from 'lucide-react';
import Shopcart from '../Helper/Shopcart';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Nav = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-gray-50 shadow-md"> 
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        <Link href="/" className="flex items-center">
          <h1 className="text-4xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
            QuickCart
          </h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Searchbox />
          <HeartIcon size={26} className="text-gray-600 hover:text-blue-600 cursor-pointer transition duration-300" />
          <Shopcart />
          
          <SignedIn>
            <UserButton />
          </SignedIn>
        
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} className="text-gray-600 hover:text-blue-600 cursor-pointer transition duration-300" />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Nav;
