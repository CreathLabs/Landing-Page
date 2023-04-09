import { useRouter } from "next/router";
import React from "react";
import Button from "../Common/Button";

const Join = () => {
  const router = useRouter();
  return (
    <div className="h-[375px] relative w-full bg-[url('/team.svg')] bg-no-repeat bg-cover ">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full join_overlay ">
        <div className="contain h-full">
          <div className="h-full w-full flex flex-col items-center justify-center space-y-14 ">
            <div className="flex flex-col space-y-4 items-center">
              <h1 className="heading">Join the Team</h1>
              <h2 className="text-xl text-center leading-10 ">
                Turning unskilled individuals into expert web3{" "}
              </h2>
            </div>

            <Button
              text="Join our Team"
              px="px-16"
              action={() => router.push("/company/careers")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
