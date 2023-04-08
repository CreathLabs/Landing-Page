import axios from "axios";
import React, { useState } from "react";
import Button from "../Common/Button";
import Input from "../Common/Input";
import TextArea from "../Common/TextArea";

const Form = () => {
  const initState = { name: "", email: "", subject: "", message: "" };
  const [data, setData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>(initState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setData(
      (prev) =>
        (prev = {
          ...prev,
          [e.target.name]: e.target.value,
        })
    );
  };

  const handleSubmit = async () => {
    const isEmpty = Object.keys(data).find(
      (key) => (data as any)[key] === "" || undefined || null
    );
    if (isEmpty) {
      return;
    }

    await axios.post("https://creath.tech/api/contact-us", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    setData(initState);
  };
  return (
    <form className="w-full p-4 xl:p-8 bg-[#1D1D1D] rounded-[20px] space-y-7 xl:space-y-8  ">
      <h1 className=" text-xl xl:text-[26px] font-bold font-Playfair leading-[50px] ">
        Drop a message here
      </h1>
      <div className="w-full space-y-6 xl:space-y-8">
        <Input
          placeholder="Your Name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <Input
          placeholder="Your Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Subject of message"
          name="subject"
          value={data.subject}
          onChange={handleChange}
        />
        <TextArea
          placeholder="Write your message here....."
          name="message"
          value={data.message}
          onChange={handleChange}
        />
      </div>
      <div className="w-full !mt-12">
        <Button text="Send Message" width="100%" action={handleSubmit} />
      </div>
    </form>
  );
};

export default Form;
