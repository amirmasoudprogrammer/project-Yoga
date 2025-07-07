"use client"
import React from 'react';
import Image from "next/image";
import {GoArrowUpRight} from "react-icons/go";
import Link from "next/link";
import {motion} from "framer-motion";


function CardCategory({data, customStyle, index}) {
    const animationVariant = {
        hidden: {
            opacity: 0,
            y: index % 2 === 0 ? -30 : 30  // زوج‌ها از بالا، فردها از پایین
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.6,
                delay: index * 0.5
            }
        }
    };

    return (
        <>
            <motion.div
                variants={animationVariant}
                initial="hidden"
                animate="visible"
                className={`hidden md:block w-[210px] relative rounded-xl h-[310px] mr-2 ${customStyle}`}
            >
                <Link href="" className={`w-[210px]  relative rounded-xl h-[310px] mr-2 ${customStyle} group `}>
                    <div
                        className="w-[30px] group-hover:mt-5 absolute border border-white h-[30px] mt-8 mr-2 hover:mt-5 hover:mr-0 transition-all rounded-full flex items-center justify-center">
                        <GoArrowUpRight/>
                    </div>
                    <Image className="w-[210px] h-[310px] rounded-xl" quality={100} src={data.image} alt="image"
                           width={304} height={454}/>
                    <div className="w-[200px] flex flex-col ml-1.5 items-start  absolute h-[109px] m-auto left-0 right-0 bg-white/10 bottom-5 rounded-xl bg-opacity-50 backdrop-blur-md">
                    <span className="mr-5 mt-5 mb-2">
                        {data.title}
                    </span>
                    <p className="text-[12px]  text-center w-[200px] ml-5">{data.description}</p>
                    </div>
                </Link>
            </motion.div>

            <div className={`md:hidden relative rounded-xl overflow-hidden ${customStyle}`}>
                <Link href="" className="w-full h-full block group relative">
                    <Image
                        className="w-full h-full object-cover rounded-xl"
                        quality={100}
                        src={data.image}
                        alt="image"
                        width={600}
                        height={400}
                    />

                    <div className="absolute top-2 right-2 w-[30px] h-[30px] border border-white rounded-full flex items-center justify-center transition-all group-hover:top-0 group-hover:right-0">
                        <GoArrowUpRight />
                    </div>

                    <div className="w-[90%] flex  flex-col items-start absolute h-[109px] m-auto left-0 right-0 bg-white bottom-5 rounded-xl bg-opacity-10 backdrop-blur-md px-5 py-3">
                        <span className="mb-2 text-white font-semibold">{data.title}</span>
                        <p className="text-[12px] text-white">{data.description}</p>
                    </div>
                </Link>
            </div>


        </>
    );
}

export default CardCategory;