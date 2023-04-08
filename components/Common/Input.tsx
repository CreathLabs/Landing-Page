import React from "react";

const Input: React.FC<{
  placeholder: string;
  name: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}> = ({ placeholder, name, onChange, value }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      className="w-full outline-none bg-transparent py-2 text-[15px]  xl:text-lg text-gray placeholder:text-gray focus:text-white  border-b border-gray focus:border-white border-0"
    />
  );
};

export default Input;
