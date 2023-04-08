import { useRouter } from "next/router";
import React from "react";
import BlogCard from "../Common/BlogCard";
import Button from "../Common/Button";

const Blogs = () => {
  const router = useRouter();
  return (
    <div className=" w-full contain pt-8 pb-6 space-y-6 " data-aos="fade-up">
      <h1 className=" heading ">Recent Blog Posts</h1>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] ">
        <BlogCard />
        <BlogCard />
      </div>
      <div className="w-full flex items-center justify-center !mt-16">
        <Button
          text="See More"
          px="px-16"
          width="100%"
          action={() => router.push("/blogs")}
        />
      </div>
    </div>
  );
};

export default Blogs;
