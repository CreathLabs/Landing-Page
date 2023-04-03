import React from "react";
import Hero from "../Common/Hero";

import Team from "../About/Team";
import Roles from "./Roles";

const Careers = () => {
  return (
    <div className="w-full bg-black ">
      <Hero bg="" bgMobile="">
        <>
          <div className="font-Playfair font-bold text-[25px] space-x-6 leading-[83px]  md:text-5xl ">
            <span>Become a Creathor</span>
          </div>
          <h1 className="max-w-[780px] text-secondary font-Manrope font-normal !mb-9 text-center text-[17px] leading-[45px] md:text-2xl md:!leading-10 ">
            Join us on our mission to transform the blockchain industry with our
            groundbreaking solutions that have the potential to create a
            significant impact on the world. We extend an invitation to be a
            part of our journey towards this revolution.
          </h1>
        </>
      </Hero>
      <Roles />
    </div>
  );
};

export default Careers;
