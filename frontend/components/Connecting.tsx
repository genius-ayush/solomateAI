import Link from "next/link";
import { pricing } from "../constants";
// import Button from "./Button";
import { Button } from "./ui/button";

const Connecting = () => {
  return (
    <div className="flex justify-center gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 text-center"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          

          <Link href="/auth"><Button variant="ghost" className="text-purple-200 hover:text-color-1 hover:bg-n-8 border-1  lg:flex bg-n-8 uppercase font-code font-semibold mx-auto">
          Create your first companion
        </Button></Link>

          
        </div>
      ))}
    </div>
  );
};

export default Connecting;
