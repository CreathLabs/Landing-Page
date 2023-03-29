import React from "react";

const Input: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full outline-none bg-transparent py-2 text-[15px]  xl:text-lg text-gray placeholder:text-gray focus:text-white  border-b border-gray focus:border-white border-0"
    />
  );
};

export default Input;
