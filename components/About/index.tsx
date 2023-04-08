import React from "react";
import Hero from "../Common/Hero";
import Mission from "./Mission";
import Partners from "../Home/Partners";
import Blogs from "../Home/Blogs";
import Team from "./Team";
import Join from "./Join";
import Vision from "./Vision";

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
          <h1 className="max-w-[600px] font-Manrope text-secondary text-center text-[17px] leading-[45px] md:text-[22px] md:!leading-10 ">
            At Creath, we are passionate about the potential of blockchain
            technology to transform the way businesses and individuals interact
            and transact. Our team of experienced professionals brings together
            expertise in blockchain development, finance, and entrepreneurship
            to create innovative solutions that meet the needs of our clients
            and partners.
          </h1>
        </>
      </Hero>
      <div className="container max-w-screen-lg text-center mx-auto px-6 pt-16 space-y-6 flex flex-col items-center">
        <h1 className=" text-secondary font-Manrope font-normal !mb-9  text-base leading-[45px] md:!text-xl md:!leading-10 ">
          We believe in the power of decentralized networks to promote
          transparency, security, and efficiency, and we strive to harness this
          power through our products and services. From blockchain-based payment
          systems to smart contract development and auditing, we offer a range
          of solutions that leverage the latest advances in blockchain
          technology to deliver tangible results.
        </h1>
        <h1 className=" text-secondary font-Manrope font-normal !mb-9  text-base leading-[45px] md:!text-xl md:!leading-10 ">
          Creath is committed to providing exceptional service and support to
          our clients, and we believe in building long-term partnerships based
          on trust and mutual success. Whether you&apos;re a startup looking to
          integrate blockchain into your business model or an established
          enterprise seeking to optimize your operations, we are here to help
          you unlock the full potential of blockchain technology.
        </h1>
      </div>
      <Mission />
      <Vision />
      <div className="hidden md:block">
        <Team limit={10} />
      </div>
      <div className="block md:hidden">
        <Team limit={10} />
      </div>
      <Join />
      <Partners />
      <Blogs />
    </div>
  );
};

export default About;
