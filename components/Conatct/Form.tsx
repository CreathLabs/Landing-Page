import React from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";
import TextArea from "../Common/TextArea";

const Form = () => {
  return (
    <form className="w-full p-4 xl:p-8 bg-[#1D1D1D] rounded-[20px] space-y-7 xl:space-y-8  ">
      <h1 className=" text-xl xl:text-[26px] font-bold font-Playfair leading-[50px] ">
        Drop a message here
      </h1>
      <div className="w-full space-y-6 xl:space-y-8">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Input placeholder="Subject of message" />
        <TextArea placeholder="Write your message here....." />
      </div>
      <div className="w-full !mt-12">
        <Button text="Send Message" width="100%" />
      </div>
    </form>
  );
};

export default Form;
