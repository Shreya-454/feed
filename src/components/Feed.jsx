"use client"
import { useState } from "react";
import { Logo } from "./common/Icons";
import Image from "next/image";

export default function Feed() {
  const [tab, setTab] = useState("tab1");

  function openTab(selectedTab) {
    setTab(selectedTab);
  }

  return (
    <div>
      <div className="max-w-[393px] mx-auto w-full bg-lightGreen pt-[72px] px-4">
        <div className="flex justify-between mb-6">
          <p className="font-inter text-[#052E16] text-[22px] font-bold">
            Feed
          </p>
          <div className="h-[27px] bg-[#F0FDF4] flex items-center justify-between pl-[6px] pr-1 py-2 border border-solid border-[#052E160D] rounded-[4px]">
            <Logo />
            <select
              name="numbers"
              id="account"
              className="text-[#052E16] focus:border-none focus:outline-none text-base"
            >
              <option value="one">#36985</option>
              <option value="one">#36986</option>
              <option value="one">#36987</option>
              <option value="one">#36988</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-white py-1 px-4 rounded-[4px] justify-center max-w-[183px] mx-auto mb-[22px]">
          <Image
            src="/assets/svg/timeSvg.svg"
            width={12}
            height={12}
            alt="timer"
          />
          <p className="text-xs text-[#052E16] font-bold">
            25m 12s <span className="font-normal">to next battle</span>
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => openTab("tab1")}
            className={`text-darkGreen  text-base leading-[100%] px-10 py-2 border border-solid  rounded-[4px] ${
              tab === "tab1" ? "bg-[#F0FDF4] opacity-100 shadow-[inset_2px_2px_0px_0px_#0C0A0980] border-[#166534]" : "bg-transparent opacity-50 shadow-[1px_1px_0px_0px #052E1633] border-[#052E1633]"
            }`}
            id="tabbtn"
          >
            All
          </button>
          <button
            onClick={() => openTab("tab2")}
            className={`text-darkGreen text-base leading-[100%] px-[6px] py-2 border border-solid border-[#052E1633] rounded-[4px] ${
              tab === "tab2" ? "bg-[#F0FDF4] opacity-100 shadow-[inset_2px_2px_0px_0px_#0C0A0980]  border-[#166534]" : "bg-transparent opacity-50 shadow-[1px_1px_0px_0px #052E1633] border-[#052E1633] "}`}
            id="tabbtn"
          >
            Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}
