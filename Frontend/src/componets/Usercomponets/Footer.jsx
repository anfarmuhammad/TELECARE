import React from "react";
import Logo from "/src/assets/user/logo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="TeleCare Logo" className="w-20 h-auto mb-4" />
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaXTwitter className="cursor-pointer hover:text-gray-300" />
            <FaYoutube className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-300">About us</li>
            <li className="cursor-pointer hover:text-gray-300">Our Medical Review Team</li>
            <li className="cursor-pointer hover:text-gray-300">Blogs</li>
            <li className="cursor-pointer hover:text-gray-300">Careers</li>
            <li className="cursor-pointer hover:text-gray-300">Press</li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="font-bold text-lg mb-2">Customer Care</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
            <li className="cursor-pointer hover:text-gray-300">FAQ</li>
            <li className="cursor-pointer hover:text-gray-300">Support</li>
            <li className="cursor-pointer hover:text-gray-300">Get TeleCare</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-10 border-t border-gray-500 pt-4">
        Copyright © 2025, TeleCare - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

