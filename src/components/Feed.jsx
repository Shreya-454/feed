import { feedCarddata } from "./common/Helper";

export default function Feed() {
    return (
        <div className=''>
            {feedCarddata.map((data, index) => {
                return (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <div>
                            <div>{data.Svg}</div>
                            <p className="max-w-[186px] leading-[120%]">{data.content}</p>
                        </div>

                    </div>
                );
            })}
        </div>
    )
}