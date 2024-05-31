import React from 'react';
import Image from "next/image";

const CommonBtn = ({ text, icon, className, gap, type, ...props }) => {

  return (
    <button
      className={`flex items-center gap-5 bg-lightGreen leading-1lg shadow-[1px_1px_0px_0px_#0C0A0980] w-[100px] h-[34px] border-[#166534] text-xs tracking-[0.01em] px-[12px] py-[9.5px] border border-solid rounded-[4px] transition-all duration-300 ease-linear ${className}`}

     
    >
      {icon && <Image src={icon} alt={`${text} icon`} width={16} height={16}  />}
      <span>{text}</span>
    </button>
  );
};

export default CommonBtn;
