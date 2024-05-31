import { contentdata } from "./Helper";
import Image from "next/image";

export default function content() {
    return (
        <>
            <div>
                {contentdata.map((data, index) => {
                    return (
                        <div key={index}>
                                <div className="bg-offWhite p-2 rounded-[4px] mb-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <div>
                                                <Image src={data.Svg} alt="svg" width={38} height={38} />
                                            </div>
                                            <p className="text-base font-normal text-black max-w-[186px] leading-[115%]">16982 <span className="text-grey">attacked</span> Retardio <span className="text-grey">and</span > <span className={`${data.content1 === 'won' ? 'text-Green font-bold' : 'text-red font-bold '}`}>{data.content1}  159.82 points</span></p>
                                        </div>
                                        <div>
                                            <p className='font-normal text-xs text-grey text-nowrap'>{data.content2}</p>
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