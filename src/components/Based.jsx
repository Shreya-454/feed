"use client";
import React, { useState, useEffect } from 'react';
import CommonBtn from "./common/CommonBtn";
import { basedCarddata,} from "./common/Helper";
import Image from 'next/image';

const Based = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const openModal = (content, cursor) => {
        if (cursor === 'cursor-not-allowed' || cursor === '3' || cursor === '9') {
            return false;
        } else {
            setModalContent(content);
            setIsModalOpen(true);
            return true;
        }
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
        setIsSecondModalOpen(true);
    };

    const closeSecondModal = () => {
        setIsSecondModalOpen(false);
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
                                    onClick={() => openModal()}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             {isModalOpen && (
                <div className='fixed inset-0 backdrop-blur-[10px] max-w-[393px] bg-[#9ED2AECC] mx-auto flex items-center justify-center z-50 left-0 top-0'>
                    <div className='bg-lightGreen rounded-[16px] p-2 max-w-[361px] w-full mx-auto overflow-hidden'>
                        <div className='max-w-[344px] rounded-lg p-4 bg-offWhite'>
                            <div className=' flex items-center gap-2 mb-[18px]'>
                            <Image src="/assets/svg/popup1.svg" alt="popupsvg" width={22} height={28}/>
                                <span className=' font-bold text-base leading-5 text-darkGreen'>Asphyxiated</span>
                                <span className=' font-normal text-xs leading-[14.52px] tracking-[1%] p-[2px_6px] rounded bg-lightGreen text-darkGrey'>id: 679</span>
                            </div>
                            <div className=' flex flex-col gap-2'>
                                <div className=' flex items-center gap-2'>
                                <div className='border-[1px] border-solid border-lightGrey1 px-[6px] pt-[3px] pb-[5px] w-[24px] h-[24px] rounded-[4px] '>
                                            <Image src="/assets/svg/popup2.svg" alt="popupsvg" width={10} height={16}  />
                                        </div>
                                    <span className=' font-normal text-base leading-5 text-darkGrey'>11</span>
                                </div>
                                <div className=' flex items-center gap-2'>
                                <div className='border-[1px] border-solid border-lightGrey1 px-[6px] py-[5px] w-[24px] h-[24px] rounded-[4px] '>
                                            <Image src="/assets/svg/shield.svg" alt="popupsvg" width={12} height={14} />
                                        </div>
                                    <span className=' font-normal text-base leading-5 text-darkGrey'>10</span>
                                </div>
                                <div className=' flex items-center gap-2'>
                                <div className='border-[1px] border-solid border-lightGrey1 px-[6px] pt-[7px] pb-[5px] w-[24px] h-[24px] rounded-[4px] '>
                                            <Image src="/assets/svg/popup3.svg" alt="popupsvg" width={15} height={13} className='mb-3' />
                                        </div>
                                    <span className=' font-normal text-base leading-5 text-darkGrey'>2d 2h 24m 30s</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={closeModal} className='mt-1 p-2 rounded-[8px] w-full max-h-[48px] shadow-[1px_1px_0px_0px_#16653480] flex items-center justify-center py-[10.5px] font-bold text-[22px] leading-[26.63px] tracking-[1%] text-[#F0FDF4] bg-Green hover:bg-lightGreen hover:text-Green border-transparent border border-solid hover:border-Green duration-300'>Ok</button>
                    </div>
                </div>
            )}

            {isSecondModalOpen && (
                <div className='fixed inset-0 bg-[#9ED2AECC] max-w-[393px] mx-auto backdrop-blur-[10px] flex items-center justify-center z-50'>
                    <div className='bg-lightGreen rounded-[16px] p-2 max-w-[361px] w-full mx-auto overflow-hidden'>
                        <div className='max-w-[344px] rounded-lg p-4 bg-offWhite'>
                            <p className=' font-bold text-base leading-5 text-darkGreen'>Rules</p>
                            <p className=' mt-4 text-base font-normal leading-5 text-black'>You can attack a pet above your level every 30mins and earn 0.5% of their rewards.
                                <span className=' block'>  A pet can only be attacked once per hour.</span></p>
                        </div>
                        <button onClick={closeSecondModal} className='mt-1 px-2 rounded-[8px] w-full max-h-[48px] shadow-[1px_1px_0px_0px_#16653480] flex items-center justify-center py-[10.5px] font-bold text-[22px] leading-[26.63px] tracking-[1%] text-[#F0FDF4] bg-Green hover:bg-lightGreen hover:text-Green border-transparent border border-solid hover:border-Green duration-300'>
                          Ok</button>
                    </div>
                </div>
            )}
        </>
    );
}
export default Based;
