import React from 'react';
import Image from "next/image";
import {IoIosHeart} from "react-icons/io";
import {IoMdTime} from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Link from "next/link";



function CardPageCourses({data}) {
    return (
        <Link href={`/courses/${data.id}`} className="mb-8 w-[288px] hover:scale-[1.1] transition-all mr-5 h-[384px] bg-white border border-[#eeeee] rounded-lg hover:shadow-xl">
            <div className="relative pt-5">

                <Image
                    className=" flex items-center justify-center m-auto rounded-lg"
                    alt="image"
                    src={data.image}
                    width={256}
                    height={192}
                />
                <div className="absolute top-10 flex items-center justify-between left-4 right-8">
                    <div className="text-black text-[24px]">
                        <IoIosHeart/>
                    </div>
                    <div
                        className="w-[36px] h-[16px] p-3 rounded-r-full bg-red-500 text-[12px] flex items-center justify-center">
                        %30
                    </div>
                </div>
            </div>
            <div className="mt-5 mr-5">
                <span className="text-black font-bold">{data.title}</span>
                <p className="mt-3 text-[#8C8C8C] text-[12px]">
                    {data.description}
                </p>
            </div>
            <div className="mt-7 mr-5 flex items-center justify-between pb-5 border-b border-[#CACACA] ml-5">
                <span className="text-red-600 text-[12px] font-bold">
                      {data.price} تومان
                </span>
                <div className="flex items-center ">
                    <p className="text-[#3083FF] text-[12px] font-bold">
                        2:42:00
                    </p>
                    <span className="text-[#3083FF]">
                        <IoMdTime/>

                    </span>
                </div>
            </div>
            <div className="mr-5 ml-5 pt-4 flex items-center justify-between">
                <span className="text-black text-[12px] font-bold ">۱۰ جلسه آنلاین</span>
               <div className="text-black text-[12px] font-bold flex items-center justify-center">
                   <p className="ml-2"> امتیاز: ۴.۹ </p>
                   <span className="text-[#FFCC00] text-[15px] mb-1">
                       <FaStar />
                   </span>
               </div>
            </div>
        </Link>
    );
}

export default CardPageCourses;