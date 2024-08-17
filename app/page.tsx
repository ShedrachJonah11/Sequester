import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
    </main>
  );
}
