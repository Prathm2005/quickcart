import React from 'react';
import { SignUp } from '@clerk/nextjs'; // Import Clerk's SignUp component

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}

export default Signup;
