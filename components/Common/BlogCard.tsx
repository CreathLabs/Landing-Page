import { truncate } from "@/helper";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface Blog {
  id: Number,
  title: string,
  description: string,
  content: string,
  cover_image: string,
  created_at: string,
  updated_at: string
}

const BlogCard: React.FC<{ id: Number }> = ({ id }) => {
  const [hoverd, setHovered] = useState(false);
  const [blog, setBlog] = useState<Blog | null>(null);

  const router = useRouter();

  const getBlogDetails = async () => {
    const { data } = await axios.get(`https://creath.tech/api/blogs/${id}`);
    return data;
  };

  useEffect(() => {
    getBlogDetails().then((res) => {
      setBlog(res.data);
    });
  }, [id]);

  return (
    <>
      {blog && (
        <Link
          href={`https://art.creath.io/blog/${blog.id}`}
          target="_blank"
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className=" relative w-full h-[293px] md:h-[434px] overflow-hidden rounded-[10px] cursor-pointer "
        >
          <Image
            src={blog.cover_image}
            fill
            className={`object-cover rounded-[10px] transition-all  ease-in-out duration-500 ${
              hoverd ? "scale-105" : ""
            } `}
            alt="Blog_image"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full blog_overlay flex items-end px-3 md:px-6 ">
            <div className=" md:py-4 flex flex-col space-y-3 md:space-y-4 ">
              <h1 className=" font-Playfair text-xl md:text-[27px] font-semibold ">
                {blog.title}
              </h1>
              <h3 className=" text-base md:text-xl  font-light leading-[28px] md:leading-[40px] ">
                {truncate(blog.description, 60, 48)}
              </h3>
              <h4 className=" text-sm md:text-lg tracking-wide text-primary font-semibold md:leading-[45px] ">
                {moment(blog.updated_at).format("LL")}
              </h4>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default BlogCard;
