import React from "react";

const Button = ({ text, bgColor, color }) => {
  return (
    <button
      className=" w-full h-[90%] px-[3%] py-[5px] mr-[4%] rounded-[6px] "
      style={{ backgroundColor: bgColor, color: color }}
    >
      {text}
    </button>
  );
};

export default Button;
