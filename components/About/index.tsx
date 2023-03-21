import React from "react";
import Hero from "../Common/Hero";
import Frame from "../../public/Frame.png";
import MobileFrame from "../../public/MobileFrame.png";
import Mission from "./Mission";
import Partners from "../Home/Partners";
import Blogs from "../Home/Blogs";
import Team from "./Team";
import Join from "./Join";

const About = () => {
  return (
    <div className="w-full bg-black ">
      <Hero
        Frame={Frame}
        Mobile={MobileFrame}
        bg="md:bg-[url('/background-about.svg')]"
        bgMobile="bg-[url('/background-about.svg')]"
      >
        <>
          <div className="font-Playfair font-bold text-[25px] space-x-6 leading-[83px]  md:text-5xl ">
            <span>About Creath</span>
          </div>
          <h1 className="max-w-[780px] text-secondary font-Manrope font-normal !mb-9 text-center text-[17px] leading-[45px] md:text-2xl md:!leading-10 ">
            We are passionate about blockchain technology’s potential to
            transform the way businesses and individuals interact and transact.
            Our team of experienced professionals brings together expertise in
            blockchain development and finance to create innovative solutions.
          </h1>
        </>
      </Hero>
      <Mission />
      <Team />
      <Join />
      <Partners />
      <Blogs />
    </div>
  );
};

export default About;
