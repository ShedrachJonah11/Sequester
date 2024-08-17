"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../images/logo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-10 ">
          <Image src={Logo} alt="Logo" className="h-10 w-auto" />
          <div className="hidden md:flex space-x-10">
            <a href="#" className="hover:underline font-medium text-white">
              Products
            </a>
            <a href="#" className="hover:underline font-medium text-white">
              About
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-7"
          >
            Sign in
          </a>
          <a
            href="#"
            className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}
