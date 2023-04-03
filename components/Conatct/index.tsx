import React from "react";
import Faq from "../Home/Faq";
import Form from "./Form";
import Hero from "./Hero";

const Contact = () => {
  return (
    <div className="w-full">
      <Hero
        bg="md:bg-[url('/background.svg')]"
        bgMobile="bg-[url('/mobile.svg')]"
      >
        <div className="grid w-full items-center grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="max-w-[500px]">
            <h1 className="heading text-center">Get in touch with us!</h1>
            <h1 className=" text-secondary font-Manrope font-normal !mb-9 text-center text-[17px] leading-[45px] md:text-2xl md:!leading-10 ">
              Our support team will do their best to respond to you in a timely
              manner.
            </h1>
          </div>

          <Form />
        </div>
      </Hero>
      <Faq />
    </div>
  );
};

export default Contact;
