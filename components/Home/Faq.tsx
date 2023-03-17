import { accordionItems } from "@/data";
import React from "react";
import Accordion from "../Common/Accordion";

const Faq = () => {
  return (
    <div
      className="pt-10 pb-20 lg:pb-32 space-y-10 md:space-y-14  contain "
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center space-y-2 justify-center">
        <h1 className=" heading ">Frequently Asked Questions</h1>
        <p className=" leading-[45px] font-light text-gray tracking-wide text-center text-[17px] md:text-xl  ">
          Everything you need to know about Creath
        </p>
      </div>
      <div className="w-full max-w-[1032px] mx-auto ">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default Faq;
