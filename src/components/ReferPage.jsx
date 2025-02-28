import React from "react";
import img4 from "../assets/img_4_svg.svg";
import Button from "./Button";
const ReferPage = () => {
  return (
    <div className="flex flex-col justify-center w-full h-auto bg-[#a3c9ff]/65  ">
      <p className=" mt-[2%] text-center">
        How Do I <span className="text-blue-500  ">Refer?</span>
      </p>
      <div className="w-[50%] h-[10%] mx-[25%]   my-[20px] ">
        <img src={img4} alt="" className="w-full h-full " />
      </div>
      <div className="w-[10%] mx-[45%] my-[2%] items-center  rounded-[2px]  " >
        <Button text={"Refer Now"}
            bgColor={"#1A73E8"}
            color={"white"} ></Button>
      </div>
    </div>
  );
};

export default ReferPage;
