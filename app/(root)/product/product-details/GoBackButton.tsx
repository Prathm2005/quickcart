"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center hover:underline mt-4 ml-3"
      onClick={() => router.back()}
    >
      <div className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
        <ArrowLeft size={24} />
      </div>
    </button>
  );
};

export default GoBackButton;
