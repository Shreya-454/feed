"use client"
import { useState } from "react";
import { Logo } from "./common/Icons";
import Image from "next/image";
import Content from "./common/Content";
import Based from "./Based";

export default function Feed() {
  const [tab, setTab] = useState("tab1");

  function openTab(selectedTab) {
    setTab(selectedTab);
  }

  return (
    <div>
      <div className=" pt-[72px] px-4 h-full ">
        <div className="flex justify-between mb-[23px]">
          <p className="font-inter text-darkGreen text-[22px] font-bold leading-1lg">
            Feed
          </p>
          <div className="h-[27px] bg-offWhite flex items-center justify-between pl-[6px]  py-2 border border-solid border-fadeGreen rounded-[4px] gap-2">
            <Logo />
            <div class="select-container">
    <select id="mySelect" class="focus:outline-none text-darkGreen bg-transparent text-base leading-1lg pr-4">
      <option value="value1">#36985</option>
      <option value="value2">#36986</option>
      <option value="value3">#36987</option>
      <option value="value4">#36987</option>
    </select>
  </div>
          </div>
        </div>
        {tab === "tab1" && (
       <div className="flex items-center gap-1 bg-white py-1 px-4 rounded-[4px] justify-center max-w-[183px] mx-auto mb-5 ">
       <Image
         src="/assets/svg/timeSvg.svg"
         width={12}
         height={12}
         alt="timer"
       />
       <p className="text-xs text-[#052E16] font-bold leading-1lg" >
         25m 12s <span className="font-normal">to next battle</span>
       </p>
     </div>
            )}
               {tab === "tab2" && (
       <div className="flex items-center gap-1 bg-offWhite py-1 px-4 rounded-[4px] justify-center max-w-[139px] mx-auto mb-5">
       <Image
         src="/assets/svg/readySvg.svg"
         width={12}
         height={12}
         alt="timer"
       />
       <p className="text-xs text-[#052E16] font-bold leading-1lg">
       Ready<span className="font-normal"> to battle</span>
       </p>
     </div>
            )}
        <div className="flex justify-center gap-2 mb-4">
          <button
            onClick={() => openTab("tab1")}
            className={`text-darkGreen  max-w-[98px] h-8 text-base px-10 py-2 border border-solid  leading-1md rounded-[4px] ${
              tab === "tab1" ? "bg-[#F0FDF4] opacity-100 shadow-[inset_2px_2px_0px_0px_#0C0A0980] border-[#166534]" : "bg-transparent opacity-50 shadow-[1px_1px_0px_0px_#052E1633] border-[#052E1633]"
            }`}
            id="tabbtn"
          >
            All
          </button>
          <button
            onClick={() => openTab("tab2")}
            className={`text-darkGreen text-base leading-1md max-w-[109px] h-8  px-[6px] py-2 border border-solid border-[#052E1633] rounded-[4px] ${
              tab === "tab2" ? "bg-[#F0FDF4] opacity-100 shadow-[inset_2px_2px_0px_0px_#0C0A0980]  border-[#166534]" : "bg-transparent opacity-50 shadow-[1px_1px_0px_0px_#052E1633] border-[#052E1633] "}`}
            id="tabbtn"
          >
            Leaderboard
          </button>
          
        </div>
        {tab === "tab1" && (
         <Content/>
            )}
                 {tab === "tab2" && (
       <Based/>
            )}
      </div>
    </div>
  );
}
