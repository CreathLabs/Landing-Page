import React from "react";
import Hero from "../Common/Hero";
import Frame from "../../public/Frame.png";
import MobileFrame from "../../public/MobileFrame.png";
import Team from "../About/Team";
import Roles from "./Roles";

const Careers = () => {
  return (
    <div className="w-full bg-black ">
      <Hero Frame={Frame} Mobile={MobileFrame} bg="" bgMobile="">
        <>
          <div className="font-Playfair font-bold text-[25px] space-x-6 leading-[83px]  md:text-5xl ">
            <span>Become a Creathor</span>
          </div>
          <h1 className="max-w-[780px] text-secondary font-Manrope font-normal !mb-9 text-center text-[17px] leading-[45px] md:text-2xl md:!leading-10 ">
            Learn about new product features, the latest in technology,
            solutions, and updates.
          </h1>
        </>
      </Hero>
      <div className="hidden md:block">
        <Team limit={4} />
      </div>
      <div className="block md:hidden">
        <Team limit={2} />
      </div>
      <Roles />
    </div>
  );
};

export default Careers;
