import { roles } from "@/data";
import React from "react";
import Role from "../Common/Role";

const Roles = () => {
  return (
    <div className="contain">
      <div className="pt-10 pb-12 space-y-10 ">
        <h1 className="heading">Open Roles</h1>
        <div className="flex flex-col space-y-8 w-full">
          {roles.map(({ title, type, description, where, id }, index) => (
            <Role
              key={index}
              type={type}
              description={description}
              title={title}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={index % 2 === 0 ? 0 : 300}
              where={where}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roles;
