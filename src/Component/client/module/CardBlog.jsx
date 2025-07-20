import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {FaArrowLeftLong} from "react-icons/fa6";
import {SlCalender} from "react-icons/sl";
import { IoMdEye } from "react-icons/io";



function CardBlog({data}) {
    console.log({data})
    return (
        <>
            <Link href={`/Blog/${data.id}`} className="relative m-auto block">
                <div
                    className="m-auto flex items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-30 md:rounded-2xl overflow-hidden  md:w-[1224px]">
                    <Image
                        className=" flex items-center justify-center m-auto md:rounded-2xl object-cover"
                        alt="image"
                        src={data.main_image.image_path}
                        width={1224}
                        height={610}
                    />
                </div>
                <div
                    className="absolute bottom-3 md:bottom-10 left-0 right-0 m-auto md:w-[1024px] w-[300px] h-[134px] md:h-[171px] bg-[#59518C]/30 backdrop-blur-sm rounded-xl border border-slate-300">
                    <p className="mt-5 mr-5 md:text-[20px]">
                        {data.title}
                    </p>
                    <div className="flex items-end justify-between">
                        <p className="w-[130px] md:w-[196px] text-[10px] md:text-[15px] mt-10 md:mt-14 mr-5">
                            {data.content}
                        </p>
                        <div className="flex items-center justify-center ml-5 md:ml-5">
                            <span className="text-[10px] md:text-[14px] ml-2">مشاهده مطلب</span>
                            <FaArrowLeftLong/>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="md:mt-7 w-[360px] md:w-[1224px] h-[40px] flex items-center justify-between bg-[#F5F5F5] m-auto rounded">
             <div className="flex items-center text-[#8C8C8C] text-[12px] mr-5">
                 <SlCalender/>
                 <span className="mr-2">20مهر 1401</span>
             </div>
                <div className="flex items-center text-[#8C8C8C] text-[12px] ml-5">
                    <IoMdEye />
                    <span className="mr-2">۲۰۰ بازدید</span>
                </div>
            </div>
        </>

    );
}

export default CardBlog;
