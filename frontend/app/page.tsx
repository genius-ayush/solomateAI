import Connect from "@/components/Connect";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

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