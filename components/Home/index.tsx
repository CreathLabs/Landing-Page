import Image from "next/image";
import React from "react";
import Frame from "../../public/Frame.png";
import MobileFrame from "../../public/MobileFrame.png";
import Button from "../Common/Button";
import Hero from "../Common/Hero";
import Product from "../Common/Product";
import Blogs from "./Blogs";
import Faq from "./Faq";
import Partners from "./Partners";
import Products from "./Products";
import Services from "./Services";

const Home = () => {
  return (
    <div className="w-full bg-black ">
      <Hero
        bg="md:bg-[url('/background.svg')]"
        bgMobile="bg-[url('/mobile.svg')]"
      >
        <>
          <div className="font-Playfair font-bold text-[25px] space-x-2 md:space-x-6 leading-[83px]  md:text-5xl ">
            <span>Creativity</span> <span>X</span> <span>Innovation</span>
          </div>
          <h1 className="max-w-[600px] font-Manrope text-secondary !mb-9 text-center text-[17px] leading-[45px] md:text-2xl md:!leading-10 ">
            Creath is a diverse team of highly skilled professionals with
            creative visualisation forging a new model of culture and value in
            web3.
          </h1>
          <Button text="Contact Us" px="px-16" />
        </>
      </Hero>
      <Services />
      <Partners />
      <Products />
      <Faq />
      <Blogs />
    </div>
  );
};

export default Home;

//
//
