import React from "react";
import arrow_svg from "../assets/arrow_svg.png";
import Button from "./Button";
import chevronUp from "../assets/chevron-up.svg.svg"
const ReferralBenefits = () => {
  return (
    <div className="w-full mt-[2%] h-[90vh] my-[2%] ">
      <p className=" py-[2%] text-center font-bold">
        What Are The <span className="text-blue-500">Referral Benefits?</span>
      </p>
      <div className="flex flex-col w-[70%] mx-[15%] h-[90%]  ">

        {/* Top Flex Row */}
        <div className="flex flex-row w-full h-[90%]">
          {/* Sidebar */}
          <div className="w-1/6 mx-[2%] my-[2.5%] shadow-2xl h-[90%] rounded-[8px] grid grid-cols-1 auto-rows-auto bg-white overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white text-[12px] font-semibold px-5 flex items-center justify-between">
              <span>ALL PROGRAMS</span>
              <img src={arrow_svg} alt="" className="ml-[4px]" />
            </div>

            {/* Sidebar Items */}
            <div className="text-[7px]">
              {[
                "PRODUCT MANAGEMENT",
                "STRATEGY & LEADERSHIP",
                "BUSINESS MANAGEMENT",
                "FINTECH",
                "SENIOR MANAGEMENT",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-5 py-4 hover:bg-gray-100 cursor-pointer border border-b border-gray-300"
                >
                  <span className="font-semibold text-gray-700">{item}</span>
                  <img src={arrow_svg} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-5/6 mx-auto my-4 shadow-2xl border border-blue-400 rounded-lg p-4">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-blue-100 text-blue-900 font-bold p-3 rounded-t-lg border-b border-blue-400">
              <div className="p-2">Programs</div>
              <div className="p-2 text-center">Referrer Bonus</div>
              <div className="p-2 text-center">Referee Bonus</div>
            </div>

            {/* Table Rows */}
            <div className="grid grid-cols-3 border-blue-400 border text-[12px]">
              {[
                {
                  program:
                    "🎓 Professional Certificate Program in Product Management",
                  referrer: "₹ 7,000",
                  referee: "₹ 9,000",
                },
                {
                  program:
                    "🎓 PG Certificate Program in Strategic Product Management",
                  referrer: "₹ 9,000",
                  referee: "₹ 11,000",
                },
                {
                  program:
                    "🎓 Executive Program in Data Driven Product Management",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
                {
                  program:
                    "🎓 Executive Program in Product Management and Digital Transformation",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
                {
                  program: "🎓 Executive Program in Product Management",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
              ].map((row, index) => (
                <React.Fragment key={index}>
                  <div className="p-3 flex items-center gap-2 border border-b border-gray-300">
                    {row.program}
                  </div>
                  <div className="p-3 flex justify-center items-center border border-b border-gray-300">
                    {row.referrer}
                  </div>
                  <div className="p-3 flex justify-center items-center border border-b border-gray-300">
                    {row.referee}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex flex-row justify-center items-center w-[17%] ml-[80%]  my-[2%]   ">
          <div className="flex flex-row justify-center items-center text-gray-900 w-[80%] h-full  border  border-gray-300 rounded-[12px] hover:text-blue-500  " >
            <Button text={"Show More"} color={"#B6B6B6"}  />
            <img src={chevronUp} alt="" className="w-[10%] h-[25%] mr-[22px] mt-[6px]" />
          </div>
        </div>

        <div className="w-[15%] h-[10%] mx-[45%]    rounded-[2px]  " >
          <Button text={"Refer Now"}
          
              bgColor={"#1A73E8"}
              color={"white"} ></Button>
        </div>
      </div>
    </div>
  );
};

export default ReferralBenefits;
