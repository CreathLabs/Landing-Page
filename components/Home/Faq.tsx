import React from "react";
import Accordion from "../Common/Accordion";

const accordionItems = [
  {
    title: "What is Creath?",
    content: (
      <h1 className="text-base text-gray leading-[30px] ">
        Creath is a next-generation tech company that delivers Web3, FinTech,
        PropTech, and Blockchain services. Our platform has an integrated
        marketplace built on the Ethereum Blockchain. This marketplace will
        serve as a gallery for artists to display their digitized artworks to a
        diverse global audience.
      </h1>
    ),
  },
  {
    title: "Is there a free trial available?",
    content: (
      <h1 className="text-base text-gray leading-[30px] ">
        Creath is a next-generation tech company that delivers Web3, FinTech,
        PropTech, and Blockchain services. Our platform has an integrated
        marketplace built on the Ethereum Blockchain. This marketplace will
        serve as a gallery for artists to display their digitized artworks to a
        diverse global audience.
      </h1>
    ),
  },
  {
    title: "Is there a free trial available?",
    content: (
      <h1 className="text-base text-gray leading-[30px] ">
        Creath is a next-generation tech company that delivers Web3, FinTech,
        PropTech, and Blockchain services. Our platform has an integrated
        marketplace built on the Ethereum Blockchain. This marketplace will
        serve as a gallery for artists to display their digitized artworks to a
        diverse global audience.
      </h1>
    ),
  },
  {
    title: "Is there a free trial available?",
    content: (
      <h1 className="text-base text-gray leading-[30px] ">
        Creath is a next-generation tech company that delivers Web3, FinTech,
        PropTech, and Blockchain services. Our platform has an integrated
        marketplace built on the Ethereum Blockchain. This marketplace will
        serve as a gallery for artists to display their digitized artworks to a
        diverse global audience.
      </h1>
    ),
  },
];

const Faq = () => {
  return (
    <div
      className="pt-10 pb-20 md:pb-40 space-y-10 md:space-y-14  contain "
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
