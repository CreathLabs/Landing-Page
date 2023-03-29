import React from "react";
import Hero from "../Common/Hero";
import Mission from "./Mission";
import Partners from "../Home/Partners";
import Blogs from "../Home/Blogs";
import Team from "./Team";
import Join from "./Join";

const About = () => {
  return (
    <div className="w-full bg-black ">
      <Hero
        bg="md:bg-[url('/background-about.svg')]"
        bgMobile="bg-[url('/background-about.svg')]"
      >
        <>
          <div className="font-Playfair font-bold text-[25px] space-x-6 leading-[83px]  md:text-5xl ">
            <span>About Us</span>
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
      <div className="hidden md:block">
        <Team limit={8} />
      </div>
      <div className="block md:hidden">
        <Team limit={4} />
      </div>
      <Join />
      <Partners />
      <Blogs />
    </div>
  );
};

export default About;
