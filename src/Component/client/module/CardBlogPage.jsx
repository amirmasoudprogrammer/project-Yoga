
import React from 'react';
import Image from "next/image";
import {IoMdEye} from "react-icons/io";
import Link from "next/link";

function CardBlogPage({data}) {
    console.log(data)
    return (
        <Link href={`/Blog/${data.id}`} className="relative w-[288px] h-[351px] border border-[#eeeee] p-0 rounded-t-xl shadow mr-2 mb-5">
            <Image className="w-[288px] h-[304px] rounded-t-xl" src={data.main_image.image_path} alt="image" width={288}
                   height={304}/>
            <div className="w-[287px] h-[45px] bg-[#59518C] flex items-center justify-around">
                <span className="text-[12px] border-l-2  pl-1 border-l-white">۵ دقیقه زمان خواندن</span>
                <span className="text-[12px] border-l-2  pl-1 border-l-white">20/مهر/ ۱۴۰۱</span>
                <div className="flex items-center ">
                    <span className="text-[12px] ml-2"><IoMdEye/></span>
                    <span className="text-[12px]">۲۰۰ بازدید</span>
                </div>
            </div>

            <div className="flex items-end absolute w-[288px] h-[87px] bg-white/70 top-32">
                <p className="text-black w-[190px] p-2 text-[13px] mb-3">
                  <span>{data.title}</span>
                    <br/>
                    <span > {data.content}</span>

                </p>
                <span className="text-black text-[13px] mb-5">
                    مشاهده مطلب
                </span>
            </div>
        </Link>
    );
}

export default CardBlogPage;