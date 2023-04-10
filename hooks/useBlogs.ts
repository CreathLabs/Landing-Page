import axios from "axios";
import React, { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState<any>([]);

  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    return data;
  };
  const getPublications = async (userId: string) => {
    const { data } = await axios.post("/api/publications", { userId });
    return data;
  };

  useEffect(() => {
    getUser().then((res) => {
      getPublications(res.id).then((publications) => {
        console.log(blogs);
        setBlogs(publications);
      });
    });
  }, []);

  return {
    blogs,
  };
};

export default useBlogs;
