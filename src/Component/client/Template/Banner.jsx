"use client"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";


function Banner(props) {
    return (
        <>
        <div className="hidden md:block relative z-0 -top-28 h-[800px]">
            <Image
                src="/image/imagebanner.png"
                alt="بنر تصویر"
                width={1920}
                height={1080}
                quality={100}
                className="w-full h-[950px] object-cover z-10 shadow-lg"
            />
            <div className="hidden md:block absolute top-32 left-0 z-40 w-full h-full">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1223 768"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="
        M20,1
        Q1,1 1,20
        V748
        Q1,767 20,767
        H1202
        Q1222,767 1222,748
        V20
        Q1222,1 1202,1
        H751
        Q731,1 731,20
        V100
        Q731,120 711,120
        H480
        Q460,120 460,100
        V20
        Q460,1 440,1
        H20
        Z
      "
                        stroke="white"
                        strokeWidth="2"
                        fill="transparent"
                        className="animate-draw"
                    />
                </svg>

                <style jsx>{`
    .animate-draw {
      stroke-dasharray: 4000;
      stroke-dashoffset: 4000;
      animation: draw 3s ease forwards;
    }

    @keyframes draw {
      to {
        stroke-dashoffset: 0;
      }
    }
  `}</style>
            </div>

            <div className="hidden md:flex bg-white bg-opacity-10 backdrop-blur-md items-center p-3 justify-between mt-2 m-auto absolute right-11 left-3 rounded-lg top-32 text-black w-[250px] h-[100px] border-2">

                <div className="flex text-[12px] border-l-2 pr-2 pl-2 items-center flex-col justify-center text-white font-bold ">
                    <div>
                        <CountUp start={0} end={100} duration={5.75}/>
                        <span>+</span>
                    </div>
                    <p className="text-[11px]">دوره آموزشی</p>
                </div>
                <div className="flex text-[12px] border-l-2  pl-2 items-center flex-col justify-center text-white font-bold ">
                    <div>
                        <CountUp start={0} end={1000} duration={5.75}/>
                    </div>
                    <p className="text-[11px]">دانش آموخته </p>
                </div>
                <div className="flex text-[12px] items-center flex-col justify-center text-white font-bold ">
                    <div>
                        <span>%</span>
                        <CountUp start={0} end={95} duration={2.75}/>

                    </div>
                    <p className="text-[11px]">رضایت مشتری</p>
                </div>

            </div>

            <div  className="hidden md:flex border border-white items-center bg-opacity-30 backdrop-blur-[40px] justify-center z-50 bg-[#FFFFFF80] cursor-pointer w-[250px] h-[59px] absolute -bottom-28 left-28 rounded-full">
              <Link href="/prdouct" className="text-black text-[18px] font-medium">
                  مشاهده دوره ها
              </Link>
            </div>
        </div>

            <div className="relative -top-28  z-0  block md:hidden w-full overflow-hidden">
                {/* تصویر اصلی بنر */}
                <Image
                    src="/image/imagebanner.png"
                    alt="بنر تصویر"
                    width={1920}
                    height={1080}
                    quality={100}
                    className="w-full h-[600px] sm:h-[700px] md:h-[950px] object-cover shadow-lg"
                />

                {/* SVG انیمیشنی */}
                <div className="absolute inset-0 z-30 pointer-events-none ">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 1223 768"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20,1 Q1,1 1,20 V748 Q1,767 20,767 H1202 Q1222,767 1222,748 V20 Q1222,1 1202,1 H751 Q731,1 731,20 V100 Q731,120 711,120 H480 Q460,120 460,100 V20 Q460,1 440,1 H20 Z"
                            stroke="white"
                            strokeWidth="2"
                            fill="transparent"
                            className="animate-draw"
                        />
                    </svg>

                    <style jsx>{`
      .animate-draw {
        stroke-dasharray: 4000;
        stroke-dashoffset: 4000;
        animation: draw 3s ease forwards;
      }
      @keyframes draw {
        to {
          stroke-dashoffset: 0;
        }
      }
    `}</style>
                </div>

                {/* اطلاعات آماری */}
                <div className="absolute top-[32%] right-2 z-40 bg-white/10 backdrop-blur-md rounded-lg border w-[37%] max-w-[220px] h-[70px] flex items-center justify-between px-2">
                    {[
                        { value: 100, label: "دوره آموزشی", suffix: "+" },
                        { value: 1000, label: "دانش آموخته" },
                        { value: 95, label: "رضایت مشتری", prefix: "%" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center justify-center text-white font-semibold text-[10px] ${i < 2 ? "border-l pl-1" : "pl-1"}`}
                        >
                            <div className="text-[11px] leading-none">
                                {item.prefix || ""}
                                <CountUp start={0} end={item.value} duration={3} />
                                {item.suffix || ""}
                            </div>
                            <p className="text-[6px] mt-1">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* دکمه مشاهده دوره‌ها */}
                <div className="absolute bottom-48 left-1/2 -translate-x-1/2 z-40 w-[80%] max-w-[250px] h-[50px] rounded-full bg-[#ffffff80] backdrop-blur-xl flex items-center justify-center border border-white shadow-md">
                    <Link href="/prdouct" className="text-black text-base font-medium">
                        مشاهده دوره‌ها
                    </Link>
                </div>
            </div>

        </>

    );
}

export default Banner;