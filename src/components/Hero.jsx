"use client"
import { useState } from "react";
import Feed from "./Feed";
import { Accountheart, FeedIcon, Navlogo, SwapArrows } from "./common/Icons";
import Image from "next/image";

export default function Hero() {
    const [tab, setTab] = useState("tab1");

    function openNav(selectedTab) {
      setTab(selectedTab);
    }
    return(
        <div>
<div className="max-w-[393px] mx-auto w-full bg-lightGreen h-screen relative">
   {tab === "tab1" && (
      <Feed/>
              )}
   <div className="flex bg-[#F0FDF4] py-2 px-[21.5px] fixed bottom-0 border-t  border-solid border-[#16653433]">
   <button  onClick={() => openNav("tab1")}  className={`  rounded-[4px] w-[70px] h-[53px] flex flex-col justify-center items-center ${
    tab === "tab1"?"opacity-100 bg-lightGreen":"opacity-80 bg-transparent "
   }`}>
    <FeedIcon/>
    <span className="text-darkGreen text-[11px] font-normal ">Feed</span>
   </button>
   <button  onClick={() => openNav("tab2")}  className={`  rounded-[4px] w-[70px] h-[53px] flex flex-col justify-center items-center ${
    tab === "tab2"?"opacity-100 bg-lightGreen":"opacity-80 bg-transparent "
   }`}>
  <Image src="/assets/svg/exploreIcon.svg" width={28} height={32} alt="explore"/>
    <span className="text-darkGreen text-[11px] font-normal ">Explore</span>
   </button>
   <button  onClick={() => openNav("tab3")}  className={`  rounded-[4px] w-[70px] h-[53px] flex flex-col justify-center items-center ${
    tab === "tab3"?"opacity-100 bg-lightGreen":"opacity-80 bg-transparent "
   }`}>
<Navlogo/>
    <span className="text-darkGreen text-[11px] font-normal ">My Pets</span>
   </button>
   <button  onClick={() => openNav("tab4")}  className={`  rounded-[4px] w-[70px] h-[53px] flex flex-col justify-center items-center ${
    tab === "tab4"?"opacity-100 bg-lightGreen":"opacity-80 bg-transparent "
   }`}>
<SwapArrows/>
    <span className="text-darkGreen text-[11px] font-normal ">Swap</span>
   </button>
   <button  onClick={() => openNav("tab5")}  className={`  rounded-[4px] w-[70px] h-[53px] flex flex-col justify-center items-center ${
    tab === "tab5"?"opacity-100 bg-lightGreen":"opacity-80 bg-transparent "
   }`}>
<Accountheart/>
    <span className="text-darkGreen text-[11px] font-normal ">Account</span>
   </button>
   </div>
 </div>
        </div>
    )
}