import CommonBtn from "./common/CommonBtn";
import { basedCarddata } from "./common/Helper";

export default function Based () {
    return (
        <>
            <div className=" h-[70vh] overflow-y-scroll ">
          
<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-8 h-4 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-Green peer-checked:after:translate-x-[0] after:translate-x-[193%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:start-[2px] after:bg-[#DCFCE7] shadow-[inset_2px_2px_0px_0px_#0C0A0980] peer-checked:shadow-[1px_1px_0px_0px_#16653480] duration-300
   peer-checked:after:bg-Green peer-checked:after:shadow-[inset_2px_2px_0px_0px_#0C0A0980] after:rounded-full after:h-[9.6px] after:w-[9.6px] after:transition-all  peer-checked:bg-[#F0FDF4]"></div>
  <span class=" text-xs tracking-[0.01em] font-normal text-darkGreen pl-[6px] leading-1lg">Show Bonkable (32)</span>
</label>
<div className=" mb-4 mt-2">
    <label class="inline-flex  cursor-pointer  items-center">
      <input type="checkbox" value="" class="sr-only peer"/>
      <div class="relative w-8 h-4 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-Green peer-checked:after:translate-x-[0] after:translate-x-[193%]  after:content-[''] after:absolute after:top-[3px] after:start-[2px] after:bg-[#DCFCE7] shadow-[inset_2px_2px_0px_0px_#0C0A0980] peer-checked:shadow-[1px_1px_0px_0px_#16653480] duration-300
       peer-checked:after:bg-Green peer-checked:after:shadow-[inset_2px_2px_0px_0px_#0C0A0980] after:rounded-full after:h-[9.6px] after:w-[9.6px] after:transition-all  peer-checked:bg-[#F0FDF4]"></div>
      <span class=" text-xs tracking-[0.01em] font-normal text-darkGreen pl-[6px] leading-1lg">My pets</span>
    </label>
</div>

                {basedCarddata.map ((data, index) => {
                    return (
                        <div key={index}>
                            <div className="bg-offWhite p-2 py-[6px] rounded-[4px] mb-1">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <div className="w-[47px] h-[38px] bg-lightGreen text-black font-bold text-base leading-1lg rounded-[4px] flex justify-center items-center">{data.digit}</div>
                                        <div>
                                            <p className="font-bold text-base text-Green max-w-[150px] leading-1lg"><span className='text-grey font-normal text-base'>Based.eth</span> <span className='text-lightGrey font-normal text-xs'>id: 73</span> {data.content1} <span className="font-normal ">pts</span></p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <CommonBtn  icon={data.icon}
                                            text={data.text} className={`${
                                                (index === 2 || index === 9 || index === 12) ? "!gap-2 opacity-50 pointer-events-none shadow-none":""
                                            } `} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    );
}