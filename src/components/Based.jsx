import { basedCarddata } from "./common/Helper";

export default function Based () {
    return (
        <>
            <div>
                {basedCarddata.map((data, index) => {
                    return (
                        <div key={index}>
                            <div className="bg-offWhite p-2 rounded-[4px] mb-1">
                                <div className="flex justify-between items-center">
                                    <div className="w-[47px] h-[38px] bg-lightGreen text-black font-bold text-base leading-[100%] rounded-[4px] flex justify-center items-center">{data.digit}</div>
                                </div>
                                <div>
                                    <p className="font-bold text-green text-base leading-[100%]">Based.eth id: 73{data.content1}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    );
}