"use client";
import React, { useState } from 'react';
import CommonBtn from "./common/CommonBtn";
import { basedCarddata, shieldBtnpopup, BonkBtnpopup } from "./common/Helper";
import Image from 'next/image';

const Popup = ({ onClose, data, type }) => {
    return (
        <div onClick={onClose}>
            <div className="fixed inset-0 bg-cGreen bg-opacity-50 backdrop-blur-lg max-w-[393px] mx-auto flex justify-center items-center">
                <div className="bg-lightGreen w-full mx-[16.5px] p-2 rounded-[16px]">
                    <div className='bg-white p-4 rounded-[8px]'>
                        {type === "primary" ? (
                            data.map((item, index) => (
                                <div key={index}>
                                    <div className='flex items-center gap-2'>
                                        <Image src="/assets/svg/popup1.svg" alt="popupsvg" width={22} height={28} className='mb-[12px]' />
                                        <h4 className='font-bold text-darkBlue mb-[16px] text-base'>{item.heading}</h4>
                                        <div className='max-w-[52px] bg-lightGreen py-[2px] px-[8px] rounded-[4px] mb-[12px]'>
                                            <p className='text-darkGrey text-xs font-normal !leading-5lg text-nowrap'>id: 679</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <div className='border-[1px] border-solid border-lightGrey px-[6px] pt-[3px] pb-[5px] w-[24px] h-[24px] rounded-[4px] '>
                                            <Image src="/assets/svg/popup2.svg" alt="popupsvg" width={10} height={16} className='mb-[12px' />
                                        </div>
                                        <p className='font-normal text-base text-gray !leading-1lg'>{item.para}</p>
                                    </div>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <div className='border-[1px] border-solid border-lightGrey px-[6px] py-[5px] w-[24px] h-[24px] rounded-[4px] '>
                                            <Image src="/assets/svg/shield.svg" alt="popupsvg" width={12} height={14} className='pb-[8px]' />
                                        </div>
                                        <p className='font-normal text-base text-gray leading-1lg'>{item.para2}</p>
                                    </div>
                                    <div className='flex items-center gap-2 mb-1'>
                                        <div className='border-[1px] border-solid border-lightGrey px-[6px] pt-[7px] pb-[5px] w-[24px] h-[24px] rounded-[4px] '>
                                            <Image src="/assets/svg/popup3.svg" alt="popupsvg" width={15} height={13} className='mb-[12px' />
                                        </div>
                                        <p className='font-normal text-base text-gray leading-1lg'>{item.para3}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            data.map((item, index) => (
                                <div key={index}>
                                    <h4 className='font-bold text-darkGreen mb-[10px] text-base'>{item.heading}</h4>
                                    <p className='font-normal text-base text-black !leading-1lg'>{item.para}</p>
                                    <p className='font-normal text-base text-black leading-1lg'>{item.para2}</p>
                                </div>
                            ))
                        )}
                    </div>
                    <button onClick={onClose} className="w-full shadow-[1px_1px_0px_0px_#16653480] font-bold bg-Green text-2md rounded-[8px] py-[7.5px] mt-1 text-offWhite">Ok</button>
                </div>
            </div>
        </div>
    );
};
const Based = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [secondaryPopupVisible, setSecondaryPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState([]);
    const [popupType, setPopupType] = useState("primary");

    const handleBtnClick = (data, isSecondary = false) => {
        setPopupData(data);
        setPopupType(isSecondary ? "secondary" : "primary");
        if (isSecondary) {
            setSecondaryPopupVisible(true);
        } else {
            setPopupVisible(true);
        }
    };
    const handleClosePopup = () => {
        setPopupVisible(false);
        setSecondaryPopupVisible(false);
    };
    return (
        <>
            <div className="2xl:max-h-[70vh] max-h-[540px] h-full overflow-y-scroll">
          
<label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none outline-none border-none rounded-full peer dark:bg-Green peer-checked:after:translate-x-[1.5px] after:translate-x-[176%] after:content-[''] after:absolute after:top-[3.5px] after:start-[2px] after:bg-[#DCFCE7] shadow-[inset_2px_2px_0px_0px_#0C0A0980] peer-checked:shadow-[1px_1px_0px_0px_#16653480] duration-300
                        peer-checked:after:bg-Green peer-checked:after:shadow-[inset_2px_2px_0px_0px_#0C0A0980] after:rounded-full after:h-[9.6px] after:w-[9.6px] after:transition-all peer-checked:bg-[#F0FDF4]"></div>
  <span className="text-xs tracking-[0.01em] font-normal text-darkGreen pl-[6px] leading-1lg">Show Bonkable (32)</span>
</label>
<div className="mb-4">
    <label className="inline-flex cursor-pointer items-center">
      <input type="checkbox" value="" className="sr-only peer"/>
      <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none outline-none border-none rounded-full peer dark:bg-Green peer-checked:after:translate-x-[1.5px] after:translate-x-[176%] after:content-[''] after:absolute after:top-[3.5px] after:start-[2px] after:bg-[#DCFCE7] shadow-[inset_2px_2px_0px_0px_#0C0A0980] peer-checked:shadow-[1px_1px_0px_0px_#16653480] duration-300
                            peer-checked:after:bg-Green peer-checked:after:shadow-[inset_2px_2px_0px_0px_#0C0A0980] after:rounded-full after:h-[9.6px] after:w-[9.6px] after:transition-all peer-checked:bg-[#F0FDF4]"></div>
                        <span className="text-xs tracking-[0.01em] font-normal text-darkGreen pl-[6px] leading-1lg">My pets</span>
                    </label>
                </div>
                {basedCarddata.map((data, index) => (
                    <div key={index} className="bg-offWhite p-2 py-[6px] rounded-[4px] mb-1">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-[47px] bg-lightGreen text-black font-bold text-base !leading-1lg rounded-[4px] h-[34px] flex justify-center items-center">{data.digit}</div>
                                <div>
                                    <p className="font-bold text-base text-Green max-w-[150px] !leading-1lg">
                                        <span className="text-grey font-normal text-base !leading-1lg">Based.eth</span>
                                        <span className="text-lightGrey font-normal text-xs !leading-1lg"> id: 73</span> {data.content1}
                                        <span className="font-normal text-xs !leading-1lg"> pts</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <CommonBtn
                                    icon={data.icon}
                                    text={data.text}
                                    className={`${(index === 2 || index === 9 || index === 12) ? "!gap-2 opacity-50 pointer-events-none shadow-none" : ""}`}
                                    onClick={() => handleBtnClick(index % 2 === 0 ? shieldBtnpopup : BonkBtnpopup, index % 2 !== 0)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {popupVisible && <Popup onClose={handleClosePopup} data={popupData} type={popupType} />}
            {secondaryPopupVisible && <Popup onClose={handleClosePopup} data={popupData} type={popupType} />}
        </>
    );
}
export default Based;