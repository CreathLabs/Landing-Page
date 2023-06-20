import React from "react";
import Hero from "../Common/Hero";
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
          <div className="font-Playfair font-bold text-2xl sm:text-[25px] space-x-2 md:space-x-6 leading-[83px]  md:text-5xl ">
            <span>Creativity</span> <span>X</span> <span>Innovation</span>
          </div>
          <h1 className="max-w-[600px] font-Manrope text-secondary !mb-9 text-center text-[17px] leading-[45px] md:text-[22px] md:!leading-10 ">
            Creath is a diverse team of highly skilled professionals with
            creative visualisation forging a new model of culture and value in
            web3.
          </h1>
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
