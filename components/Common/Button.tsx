import React from "react";

const Button: React.FC<{
  text: string;
  px?: string;
  action?: () => any;
  width?: string;
}> = ({ text, px, action, width }) => {
  return (
    <button
      onClick={action}
      style={{
        width: width ? width : "",
      }}
      className={`text-primary text-base md:text-[17px] !h-fit tracking-wide z-30 font-bold py-[14px]  ${
        px ? px : "px-10"
      }  btn_bg w-full md:w-fit hover:outline outline-[#00EAFC]/30 rounded-md `}
    >
      {text}
    </button>
  );
};

export default Button;
