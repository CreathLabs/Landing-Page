import axios from "axios";
import React, { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState<any>([]);

  const getUser = async (token: string) => {
    const { data } = await axios.get("https://api.medium.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.id;
  };

  useEffect(() => {
    const token = process.env.TOKEN;
    if (!token) {
      return;
    }

    getUser(token).then((user) => {
      console.log(user);
    });
  }, []);

  return {};
};

export default useBlogs;
