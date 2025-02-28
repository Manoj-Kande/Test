import React, { useState } from "react";

const Header = () => {

    const [liState,setLiState]=useState("");
    const menuItems = ["Refer", "Benefits", "FAQs", "Support"];

  return (
    <div className="w-[70%] h-[40px] mx-[15%] md:w-[50%]  md:h-[40px] md:mx-[25%] md:my-[4px] mt-[4%]" >
      <div className="flex flex-row  items-center w-full h-full my-[2px] bg-[#1A73E81C]/100 rounded-[40px]  ">
        <ul className="w-full flex flex-row justify-around items-center ">
            {
                menuItems.map((item)=>(
                    <div className="flex flex-col items-center" >
                        <li className={`cursor-pointer ${liState===item?"text-[#1A73E8]" : ""}`} onClick={()=>setLiState(item)} >{item}</li>
                        <div className={`  bg-[#1A73E8]  w-[6px] h-[6px] rounded-[6px] ${liState!=item? "hidden":""} ` } ></div>
                    </div>
                ))
            }
        </ul>
      </div>
    </div>
  );
};

export default Header;
