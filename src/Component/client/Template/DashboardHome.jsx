import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {FaVideo} from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { TbMessageFilled } from "react-icons/tb";




function DashboardHome(props) {
    return (
        <div className="flex flex-col items-start justify-start mt-16 md:mt-0 md:mr-12">
            <h3 className="text-[20px] md:text-[34px] font-bold text-[#59518C]">داشبورد</h3>
            <div className="mt-14 h-[300px] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
                <span className="text-[#59518C] md:text-[30px] font-bold mb-10 text-center">سلام فهیمه حسینعلی ‘خوش آمدید</span>
                <div className="flex items-center justify-center md:mr-14">
                    <video
                        className="w-[360px] h-[360px] md:w-[360px] md:h-[360px] flex items-center justify-center"
                        src="/video/ZQH44lyrsMd2E8K671.mp4"
                        width={360}
                        height={341}
                        autoPlay
                        loop
                        muted
                        playsInline

                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-64 ml-12 w-[200px]  md:w-full  ">
                <Link href="" className="border-b border-b-white w-[395px] h-[74px]  md:w-[268px]   md:h-[124px] md:rounded-xl bg-[#59518C] flex items-center justify-start pr-5">
                    <span>
                        <FaVideo size={35}/>
                    </span>
                    <div className="text-[16px] mr-5">
                        <span className="text-[18px]">0</span>
                        <p className="text-[16px]">دوره های خریداری شده</p>
                    </div>
                </Link>
                <Link href="" className="border-b border-b-white w-[395px] h-[74px]  md:w-[268px]   md:h-[124px] md:rounded-xl bg-[#59518C] flex items-center justify-start pr-5">
                    <span>
                     <AiOutlineMessage size={45}/>

                    </span>
                    <div className="text-[16px] mr-5">
                        <span className="text-[18px]">0</span>
                        <p className="text-[16px]">نظرات</p>
                    </div>
                </Link>
                <Link href="" className="border-b border-b-white w-[395px] h-[74px]  md:w-[268px]   md:h-[124px] md:rounded-xl bg-[#59518C] flex items-center justify-start pr-5">
                    <span>
                        <TbMessageFilled size={45}/>

                    </span>
                    <div className="text-[16px] mr-5">
                        <span className="text-[18px]">0</span>
                        <p className="text-[16px]">تیکت ها باز</p>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default DashboardHome;