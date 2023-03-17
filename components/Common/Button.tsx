import React from "react";

const Button: React.FC<{ text: string; px?: string }> = ({ text, px }) => {
  return (
    <button
      className={`text-primary text-base md:text-[17px] !h-fit tracking-wide z-30 font-bold py-[14px]  ${
        px ? px : "px-10"
      }  bg-primary/[13%] w-full md:w-fit rounded-md `}
    >
      {text}
    </button>
  );
};

export default Button;
