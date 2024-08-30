import useBlogs from "@/hooks/useBlogs";
import React from "react";
import BlogCard from "../Common/BlogCard";
import Pagination from "../Common/Pagination";

const BlogList = () => {
  const { blogs } = useBlogs();

  return (
    <div className=" w-full contain pb-6 space-y-6 " data-aos="fade-up">
      <h1 className=" heading ">Recent Blog Posts</h1>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] ">
        {blogs.map((blog) => (
          <BlogCard id={blog.id} key={blog.id.toString()} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center !mt-16">
        <Pagination itemsPerPage={6} page={1} totalItems={12} />
      </div>
    </div>
  );
};

export default BlogList;
