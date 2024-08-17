import Image from "next/image";
import img from "../images/heroimg.avif";

export default function Hero() {
  return (
    <div className="flex justify-center items-center">
      <section className="relative md:rounded-xl justify-center items-center w-full md:w-[72%] bg-indigo-900 text-white">
        <div className="w-full h-[550px] overflow-hidden ">
          <Image
            src={img}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-30 md:rounded-xl"
          />
        </div>
        <div className="absolute w-full inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Protect Your Writing, <br />
            <span className="">Preserve Your Privacy</span>
          </h1>
          <p className="text-lg max-w-[800px] md:text-xl mb-8">
            Sequester empowers you to write freely, without judgment on your
            methods. Because what matters is the quality of your work, not how
            you created it.
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <a
              href="#"
              className="bg-white text-indigo-600 font-bold py-4 px-6 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Get started
            </a>
            <a
              href="#"
              className="bg-indigo-500 text-white font-bold py-4 px-6 rounded-lg opacity-80 hover:bg-indigo-700 transition duration-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
