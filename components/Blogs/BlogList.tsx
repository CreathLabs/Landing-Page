import { useRouter } from "next/router";
import React from "react";
import BlogCard from "../Common/BlogCard";
import Button from "../Common/Button";
import Pagination from "../Common/Pagination";

const BlogList = () => {
  const router = useRouter();
  return (
    <div className=" w-full contain pb-6 space-y-6 " data-aos="fade-up">
      <h1 className=" heading ">Recent Blog Posts</h1>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] ">
        {[...Array(6)].map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center !mt-16">
        <Pagination itemsPerPage={6} page={1} totalItems={12} />
      </div>
    </div>
  );
};

export default BlogList;
