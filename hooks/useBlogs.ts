import axios from "axios";
import React, { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState<string[]>([]);

  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    return data;
  };
  const getBlogs = async (userId: string) => {
    const { data } = await axios.post("/api/blogs", { userId });
    return data;
  };

  useEffect(() => {
    getUser().then((res) => {
      getBlogs(res.id).then((res) => {
        console.log(res.blogs);
        setBlogs(res.blogs);
      });
    });
  }, []);

  return {
    blogs,
  };
};

export default useBlogs;
