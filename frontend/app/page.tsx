import Connect from "@/components/Connect";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
      <Header/>
      <Hero/>
      <Features/>
      <Connect/>
      <Footer/>
    </div>
  );
}
// 1b172b