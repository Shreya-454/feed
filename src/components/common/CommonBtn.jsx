import React from 'react';
import Image from "next/image";

const CommonBtn = ({ text, icon, className, gap, type, ...props }) => {
  // Define type-based styles
  const typeStyles = {
    secondary: 'bg-lightGreen opacity-[50%] shadow-[0px_0px_0px_0px_#0C0A0980] pointer-events-none',
  };

  return (
    <button
      className={`flex items-center ${typeStyles[type]} shadow-[1px_1px_0px_0px_#0C0A0980] border-[#166534] text-base leading-[100%] px-[16px] py-[10px] border border-solid rounded-[4px] transition-all duration-300 ease-linear ${className}`}
      {...props}
    >
      {icon && <Image src={icon} alt={`${text} icon`} width={16} height={16} style={{ marginRight: gap }} />}
      <span>{text}</span>
    </button>
  );
};

export default CommonBtn;
