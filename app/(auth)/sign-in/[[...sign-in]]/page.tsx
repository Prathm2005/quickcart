import React from 'react';
import { SignIn } from '@clerk/nextjs'; 

const Signin = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      
      <SignIn />
    </div>
  );
};

export default Signin;
