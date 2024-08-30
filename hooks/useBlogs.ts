import axios from "axios";
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
const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // const getUser = async () => {
  //   const { data } = await axios.get("/api/user");
  //   return data;
  // };
  const getBlogs = async () => {
    const { data } = await axios.get("https://creath.tech/api/blogs");
    return data;
  };

  useEffect(() => {
    getBlogs().then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return {
    blogs,
  };
};

export default useBlogs;
