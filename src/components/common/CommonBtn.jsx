import React from 'react';
import Image from "next/image";

const CommonBtn = ({ text, icon, className, type, ...props }) => {
  return (
    <button
      className={`flex items-center gap-5 bg-lightGreen shadow-[1px_1px_0px_0px_#0C0A0980] w-[100px] border-[#166534] text-xs leading-[100%] px-[12px] py-[9.5px] border border-solid rounded-[4px] transition-all duration-300 ease-linear ${className}`}
      {...props}
    >
      {icon && <Image src={icon} alt={`${text} icon`} width={12} height={14} />}
      <span>{text}</span>
    </button>
  );
}

export default CommonBtn;
