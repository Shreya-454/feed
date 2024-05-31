import React from 'react';
import Image from "next/image";
import { CommonBtnArrow } from './Icons';

const CommonBtn = ({ text }) => {
  return (
    <button 
          className='bg-[#F0FDF4] shadow-[inset_2px_2px_0px_0px_#0C0A0980] border-[#166534] text-base leading-[100%] px-[16px] py-[10px] border border-solid  rounded-[4px] transition-all duration-300 ease-linear' 
    >
      {text} 
    </button>
  );
}

export default CommonBtn;