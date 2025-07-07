import React from 'react';
import Image from "next/image";
import {FaHeart} from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";



function CardProduct({data}) {
    return (
        <Link href={`/products/${data.id}`} className="relative hover:shadow-2xl group hover:scale-[0.9] transition-all flex items-start mr-5 justify-start rounded-xl flex-col w-[288px] h-[485px] border border-[#eeeee]">
            <div>
                <Image src={data.image} alt="image" width={288} height={243}
                       className="w-[288px]  h-[243] object-cover  rounded-t-xl"/>
            </div>
            <div className="absolute top-0 invisible group-hover:visible transition-all border border-slate-400 bottom-0 left-0 right-0 m-auto bg-[#756CBF] w-[48px] h-[48px] rounded-full flex items-center justify-center">
                <FaArrowLeftLong />
            </div>
            <div className="bg-white mt-5 pr-5 pl-5">
                <span className="mt-5 text-black text-[20px] "> {data.title} </span>
                <p className="text-[#8C8C8C] h-[125px] text-[17px] font-normal mt-2 border-b border-black">
                    {data.description}
                </p>
            </div>
            <div className=' mr-5 mt-4 flex items-center justify-between w-[240px]'>
                <div className="text-red-600 flex items-center ">
                    <span className="ml-1">20</span>
                    <FaHeart/>
                </div>
                <div className="flex items-center justify-center">
                    <span className="text-[#756CBF] text-[14px] ml-4">{data.price}تومان</span>
                </div>
            </div>
        </Link>
    );
}

export default CardProduct;
