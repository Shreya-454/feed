import CommonBtn from "./common/CommonBtn";
import { basedCarddata } from "./common/Helper";

export default function Based () {
    return (
        <>
            <div>
                {basedCarddata.map ((data, index) => {
                    return (
                        <div key={index}>
                            <div className="bg-offWhite p-2 py-[6px] rounded-[4px] mb-1">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <div className="w-[47px] h-[38px] bg-lightGreen text-black font-bold text-base leading-1lg rounded-[4px] flex justify-center items-center">{data.digit}</div>
                                        <div>
                                            <p className="font-bold text-base text-Green max-w-[150px] leading-6md"><span className='text-grey font-normal text-base'>Based.eth</span> <span className='text-lightGrey font-normal text-xs'>id: 73</span> {data.content1} <span className="font-normal ">pts</span></p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <CommonBtn gap={data.gap} icon={data.icon}
                                            text={data.text} />
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