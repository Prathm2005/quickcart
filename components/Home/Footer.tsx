import React from "react";
import Image from "next/image";
import {  FaTwitter, FaInstagram, FaLinkedinIn,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={"bg-gray-900 text-white py-16"}>
      <div
        className={
          "w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-700"
        }
      >
        <div>
          <h1 className={"text-[30px] uppercase font-bold text-white mb-6"}>
            QuickCart
          </h1>
          <p className={"text-sm text-gray-400"}>
          QuickCart Office, Talegaon Dabhade, Pune, Maharashtra, 410507, India.
          </p>
          <p className={"text-sm mt-6 text-gray-400"}>
            (+91) 9356 7274 87 <br /> quickcart@gmail.com
          </p>
        </div>

        <div>
          <h2 className={"text-[20px] font-semibold mb-4  "}>Follow Us</h2>
          <div className={"flex space-x-4"}>
            <a href="https://www.instagram.com/prathamesh_malunjkar" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://x.com/PMalunjkar86260" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com/feed/" className="text-gray-400 hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/Prathm2005" className="text-gray-400 hover:text-white">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className={"mt-8 flex flex-col sm:flex-row items-center justify-between w-4/5 mx-auto"}>
        <p className="text-sm text-gray-500">© 2024 QuickCart. All Rights Reserved.</p>
        <Image src="/images/pay.svg" alt="pay" width={150} height={50} className="mt-4 sm:mt-0" />
      </div>
    </footer>
  );
};

export default Footer;

