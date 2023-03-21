import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { AccordionProps } from "./Accordion";

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionProps;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`w-full pt-9 pb-1 border-b border-[#737477]/80 space-y-4  `}
    >
      <div
        className="w-full flex cursor-pointer justify-between items-center"
        onClick={btnOnClick}
      >
        <h1 className=" font-Playfair text-lg md:text-xl font-semibold ">
          {" "}
          {data.title}
        </h1>
        {!isOpen && (
          <Icon
            width={20}
            height={20}
            icon="clarity:plus-circle-solid"
            className={` transition-all duration-200 ease-linear ${
              isOpen ? "hidden" : "block"
            }`}
          />
        )}
        {isOpen && (
          <Icon
            width={20}
            height={20}
            icon="clarity:minus-circle-solid"
            className={` transition-all duration-200 ease-linear ${
              isOpen ? "block" : "hidden"
            }`}
          />
        )}
      </div>

      <div
        className={`  transition-all duration-300 ease-linear overflow-hidden `}
        style={{
          height: isOpen ? contentRef.current?.clientHeight + "px" : "0px",
        }}
      >
        <div className="!pb-2" ref={contentRef}>
          <h1 className="text-base text-gray leading-[30px] ">
            {data.content}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
