import React from 'react';
import Image from "next/image";
import {GrFormView} from "react-icons/gr";

function SortIdBlog({item}) {
    return (
        <div>
            <div className="flex items-center justify-center">

                <Image src={item.image_path} width={1224} height={719} alt="image"/>
            </div>
            <div>
                <div
                    className="border-b w-[312px] m-auto md:w-auto border-[#626262] flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-16 ">
                    <p className="text-black md:mb-5 text-center text-[12px] md:text-[16px] w-[210px] md:w-auto font-bold"></p>
                    <div
                        className="flex items-center justify-between mt-5 w-full md:w-auto md:mt-0">
                            <span
                                className="text-[#626262] text-[12px] mr-2 md:mr-0 md:ml-60 mb-5 ">۵ دقیقه زمان خواندن</span>
                        <div className="flex items-center text-[#626262] mb-5 ml-2 md:ml-0">
                            <GrFormView/>
                            <span className="text-[#626262] text-[12px]">۲۰۰ بازدید</span>

                        </div>
                    </div>
                </div>
                <div
                    className="flex text-[14px] m-auto w-[300px] md:w-auto md:text-lg flex-col items-start justify-between mt-5 md:mt-16 mr-6 md:mr-0">
                    <span className="text-black font-normal"></span>
                    <div className="flex flex-col items-start justify-start text-black">
                        {item.description}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SortIdBlog;