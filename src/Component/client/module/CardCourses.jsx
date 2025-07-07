import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { IoIosHeart } from "react-icons/io";


function CardCourses({data}) {
    return (
        <Link href="" className="m-auto">
            <div className="relative overflow-hidden group mx-auto  ">
                <div className="absolute left-16 md:left-5 top-5 text-[20px]">
                    <IoIosHeart />

                </div>
                <div className="overflow-hidden">
                    <Image src={data.image} alt="image" width={548} height={258}
                           className="w-[312px] md:w-[548px] h-[258] object-cover rounded-3xl "/>
                </div>
                <div className="w-[312px] h-[102px] md:w-[460px] rounded-xl md:h-[134px] m-auto pb-5 pt-3 bg-opacity-85 backdrop-blur-[1px] group-hover:backdrop-blur-xl  bg-white/50 absolute top-36 md:top-28 md:right-0 md:left-0 overflow-hidden">
                    <div className=" flex flex-col items-center justify-center ">
                        <p className="text-[15px] md:text-[18px] font-bold text-[#59518C] text-center w-[240px] m-auto  ">{data.description}</p>
                        <div className="flex items-center relative justify-center mt-2">
                            <div className=" md:mt-0 -mt-3 w-[92px] h-[30px] top-3 md:top-0 left-20 text-[12px] md:w-[145px] md:h-[40px] absolute md:left-36 z-10  bg-[#756CBF] text-center flex items-center justify-center rounded-3xl ">
                                اطلاعات بیشتر
                            </div>
                            <div className="w-[95px] h-[30px] md:w-[180px] text-[10px] md:text-[15px] md:h-[41px] translate-x-24 invisible  group-hover:visible group-hover:-translate-x-1 transition-all  mr-32 bg-[#59518C80] items-center flex items-center justify-center rounded-l-3xl ">
                                {data.price}تومان
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
}

export default CardCourses;