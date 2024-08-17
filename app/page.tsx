import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Product from "./components/Product";
import Why from "./components/Why";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <Hero />
      <Product />
      <Why />
      <Footer />
    </main>
  );
}
