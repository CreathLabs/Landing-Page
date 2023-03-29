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
          <h1 className="heading text-center">
            Have a project? <br /> We Can Help You
          </h1>
          <Form />
        </div>
      </Hero>
      <Faq />
    </div>
  );
};

export default Contact;
