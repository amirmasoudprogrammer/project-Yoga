import React from 'react';
import Link from "next/link";
import {RiComputerFill} from "react-icons/ri";
import {IoTimeSharp} from "react-icons/io5";
import {FaVideo} from "react-icons/fa";
import Image from "next/image";


function MyCoures(props) {
    return (
        <div className="w-[290px] md:w-auto">
            <span className="flex items-center md:mt-5 justify-center md:justify-start md:mr-10 text-[#59518C] md:text-[30px] font-bold">دوره های  من</span>

            <div className="w-[320px] h-[85px] md:w-[831px] md:h-[179px] pt-4 pb-4 md:pt-0 md:pb-0 rounded-lg  flex items-center justify-around border border-slate-300 rounded mt-10 -mr-5  md:mt-5 md:mr-10">
                <Link href="" className="flex items-center justify-between flex-col">
                    <div
                        className="w-[30px] h-[30px] hover:animate-pulse text-[20px] md:text-[40px] font-thin text-[#59518C] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full">
                        <RiComputerFill/>
                    </div>
                    <span className="text-[#007AFF] md:mt-2">0</span>
                    <p className="text-[#007AFF] text-[12px] md:text-[14px] font-medium md:mt-2">خریداری شده</p>
                </Link>
                <Link href="" className="flex items-center justify-between flex-col">
                    <div
                        className="w-[30px] h-[30px] text-[#59518C] hover:animate-pulse text-[20px] md:text-[40px] font-thin   md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full">
                        <IoTimeSharp/>

                    </div>
                    <span className="text-[#007AFF] md:mt-2">0</span>
                    <p className="text-[#007AFF] text-[12px] md:text-[14px] font-medium md:mt-2">ساعت</p>
                </Link>
                <Link href="" className="flex items-center justify-between flex-col">
                    <div
                        className="w-[30px] h-[30px] text-[#59518C] hover:animate-pulse text-[20px] md:text-[40px] font-thin   md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full">
                        <FaVideo/>

                    </div>
                    <span className="text-[#007AFF] md:mt-2">0</span>
                    <p className="text-[#007AFF] text-[12px] md:text-[14px] font-medium md:mt-2">ویدیو</p>
                </Link>
            </div>

            <div className="mt-10 md:mt-10 -mr-5 md:mr-5">
                <span className="text-[#191627] font-medium md:mr-5">دوره های من</span>
                <div className="h-[500px] flex items-center justify-center flex-col">
                    <Image src="/image/imgCour.png" width={289} height={272} alt="icon"/>
                    <span className="text-black font-bold text-[16px]">دوره ایی خریداری نشده است!</span>
                    <p className="text-[#626262]">یادگیری را با بهترین مدرسان آغاز کنید و لذت ببرید.</p>
                </div>
                <div className="bg-[#59518C] w-[360px] md:w-[174px] -mr-7 h-[38px] flex items-center justify-center mb-10 md:mr-auto md:ml-auto rounded-lg">
                    <Link href="">
                        یادگیری را آغاز کنید
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default MyCoures;