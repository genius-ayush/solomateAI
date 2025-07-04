import Section from "./Section";
// import { smallSphere, stars } from "../assets";
import { smallSphere , stars } from "@/public/assets";
import Heading from "./Heading";
// import PricingList from "./PricingList";
// import { LeftLine, RightLine } from "./design/Pricing";
import Image from "next/image";
// import PricingList from "./Connecting";
import Connecting from "./Connecting";

const Connect = () => {
  return (
    <Section crosses
    crossesOffset="lg:translate-y-[5.25rem]"
     className="overflow-hidden" id="contactUs">
      <div className="container relative z-2">


        <Heading
          tag="Welcome to SoloMate"
          title="Connect. Ask. Discover."
        />

        <div className="relative">
          
          <Connecting/>
        </div>

        
      </div>
    </Section>
  );
};

export default Connect;
