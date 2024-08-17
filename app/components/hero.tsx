"use client";
import Image from "next/image";
import img from "../images/heroimg.avif";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-center items-center">
      <section className="relative md:rounded-xl justify-center items-center w-full md:w-[72%] text-white">
        <div className="w-full h-[550px] overflow-hidden ">
          <Image
            src={img}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-96 md:rounded-xl"
          />
          <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply md:rounded-xl"></div>
        </div>
        <div className="absolute w-full inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Protect Your Writing, <br />
            <span className="text-indigo-200">Preserve Your Privacy</span>
          </h1>
          <p className="text-xl md:max-w-[800px] max-w-[400px] p-2 text-indigo-200 md:text-xl mb-8">
            Sequester empowers you to write freely, without judgment on your
            methods. Because what matters is the quality of your work, not how
            you created it.
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-4 md:space-y-0 mt-2 w-full md:w-auto">
            <Button className="w-full md:w-auto bg-white text-indigo-600 font-bold py-6 px-8 rounded-md hover:bg-gray-200 transition duration-300">
              <Link href={"/#"} className="text-base font-light">
                Get Started
              </Link>
            </Button>
            <Button className="w-full md:w-auto bg-indigo-500 text-white font-bold py-6 px-8 rounded-md bg-opacity-60 hover:bg-indigo-700 transition duration-300">
              <Link href={"/#"} className="text-base font-light">
                Learn more
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
