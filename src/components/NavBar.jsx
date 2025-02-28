import React from "react";
import img_crs from "/button_courses.svg";
import Link from "/Link.png";
import Button from "./Button";
const NavBar = () => {
  return (
    <div className="py-[1%]">
      <div className="flex justify-center items-center h-[50px] ">
        <div className="w-[70%] flex justify-between items-center h-[90%]">
          <div className="flex justify-around items-center w-1/3 h-full  ">
            <img src={Link} alt="" className="h-[80%] " />
            <div className="flex flex-row  items-center h-[80%] w-[40%]  mx-[3%]  bg-[#1A73E8] rounded-[10px] ">
              <button className=" ml-[20px] h-[100%] w-auto   pl-[18px] pr-[5px] py-[8px]   text-white ">
                Courses
              </button>
              <img
                src={img_crs}
                alt=""
                className="h-[30%] relative  top-[1.5px] border border-transparent"
              />
            </div>
          </div>
          <div className="flex  justify-end  items-center w-2/3 h-full ">
          <div className="flex  justify-around  items-center w-[80%]  h-full ">
          <p className="text-[#1A202C] Inter font-[500]" >Refer & Earn</p>
            <div className=" h-full w-[30%] flex flex-row justify-between  items-center " >
                <p className="text-[#1A202C] Inter font-[500]" >Resources</p>
                <p className="text-[#1A202C] Inter font-[500]" >About Us</p>

            </div>
            <div className=" flex justify-end items-center w-[40%] h-[100%]  ">
              <Button text={"Login"} bgColor={"#94A3B833"} color={"black"}  />
              <Button
                text={"Try For Free"}
                bgColor={"#1A73E8"}
                color={"white"}
              />
            </div>
          </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
