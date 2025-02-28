import React from "react";
import imgs from "../assets/Anniversary (8) 4.png";
import img2 from "../assets/img_2_svg.svg";
import img3 from "../assets/img_3_svg.svg";
import Button from "./Button";
const Box = () => {
  return (
    <div className="flex items-center w-[60%] mx-[20%] h-[380px] my-[2%] bg-[#EEF5FF] rounded-[18px] shadow-2xl shadow-black-800/90">
      <div className="w-1/3  h-full mx-[12px] ">
        <img src={imgs} alt="" className="h-[15%] w-auto " />
        <div className=" w-full h-[50%]   mx-[8%] my-[8%]  ">
          <img
            src={img2}
            alt="img"
            className="flex flex-start w-[80%] h-full  "
          />
        </div>
        <div className=" flex justify-center items-center  w-[30%] h-[9%] ml-[6%] my-[10%]">
          <Button
            text={"Refer Now"}
            bgColor={"#1A73E8"}
            color={"white"}
          ></Button>
        </div>
      </div>
      <div className="w-2/3 mr-[12px] h-full">
        <div
          className="w-full h-full "
          style={{ backgroundImage: `url(${img3})`, backgroundSize: "auto 100%",backgroundRepeat:"no-repeat", }}
        >
            <div className="flex flex-col justify-between w-full h-full  " >
                <div className="flex flex-row justify-between w-full h-full " >
                    <img src={imgs} alt="" className="h-[30%] w-auto " />
                    <img src={imgs} alt="" className="h-[30%] w-auto " />
                </div>

                <div className="flex flex-row justify-between items-end w-full h-full " >
                    <img src={imgs} alt="" className="h-[30%] w-auto " />
                    <img src={imgs} alt="" className="h-[30%] w-auto " />
                </div>
            </div>
           
             
        </div>
      </div>
    </div>
  );
};

export default Box;
