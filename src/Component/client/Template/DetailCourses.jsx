"use client"
import React, {useState} from 'react';
import {FaRegUser} from "react-icons/fa";
import {CiVideoOn} from "react-icons/ci";
import {IoTimeOutline} from "react-icons/io5";
import {BiCategory} from "react-icons/bi";
import {CgDanger} from "react-icons/cg";
import {SlCalender} from "react-icons/sl";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import {MdContentCopy} from "react-icons/md";
import Image from "next/image";
import NamePages from "@/Component/client/module/NamePages";
import {IoIosStar} from "react-icons/io";
import {FaRegEdit} from "react-icons/fa";



function DetailCourses(props) {
    const [showMore, setShowMore] = useState(false);
    const [score, setScore] = useState(0);
    const total = 10;

    const handleClick = (index) => {
        console.log(index)
        const newScore = total - index;
        setScore(newScore);
    };

    const toggleContent = () => setShowMore(!showMore);
    return (
        <>
            <div className="container m-auto mt-24 mb-24 ">
                <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row">
                    <div className="flex items-start flex-col justify-start">
                        <div
                            className="w-[312px] md:w-[368px] h-[440px] md:h-[529px] border border-[#756CBF] shadow-lg rounded-xl">
                            <div
                                className="w-[296px] md:w-[344px] h-[45px] flex items-center justify-around  bg-[#CAACF2] m-auto mt-3 rounded-lg">
                                <span className="font-bold text-[14px] md:text-[15px]">قیمت این دوره:</span>
                                <span className="font-bold text-[14px] md:text-[15px]">9.000.000تومان</span>
                            </div>
                            <div className="flex items-start justify-between flex-col mt-5 md:mt-20 ">
                                <div className="flex items-center justify-start text-black mr-5">
                                    <span className="text-[#8C8C8C]"><FaRegUser/></span>
                                    <span
                                        className="mr-3 font-medium text-[16px] md:text-[20px]">مدرس دوره :فهیمه حسینعلی</span>

                                </div>
                                <div className="flex items-center justify-start text-black mr-5 mt-4">
                                    <span className="text-[#8C8C8C]"><CiVideoOn/></span>
                                    <span
                                        className="mr-3 font-mediumtext-[16px] md:text-[20px]">تعداد ویدیوها :113 ویدیو</span>

                                </div>
                                <div className="flex items-center justify-start text-black mr-5 mt-4">
                                    <span className="text-[#8C8C8C]"><IoTimeOutline size={20}/></span>
                                    <span
                                        className="mr-3 font-medium text-[16px] md:text-[20px]">مدت زمان دوره :16:46:00</span>

                                </div>
                                <div className="flex items-center justify-start text-black mr-5 mt-4">
                                    <span className="text-[#8C8C8C]"><BiCategory/></span>
                                    <span
                                        className="mr-3 font-medium text-[16px] md:text-[20px]">سطح دوره :پیشرفته</span>

                                </div>
                                <div className="flex items-center justify-start text-black mr-5 mt-4">
                                    <span className="text-[#8C8C8C]"><CgDanger size={20}/></span>
                                    <span className="mr-3 font-medium text-[16px] md:text-[20px]">وضعیت دوره :در حال بروزرسانی</span>

                                </div>
                                <div className="flex items-center justify-start text-black mr-5 mt-4">
                                    <span className="text-[#8C8C8C]"><SlCalender/></span>
                                    <span className="mr-3 font-medium text-[16px] md:text-[20px]">تاریخ آخرین بروزرسانی :1404/02/03</span>

                                </div>
                            </div>
                            <button
                                className="w-[296px] md:w-[344px] h-[42px] bg-[#CAACF2] mt-16 m-auto rounded mr-2 md:mr-3">
                                ثبت نام دراین دوره
                            </button>
                        </div>
                        <div
                            className="w-[312px] md:w-[368px] h-[48px] border border-[#8C8C8C] mt-10 rounded flex items-center justify-between">
                            <p className="text-[#8C8C8C] md:mr-5 text-[12px] md:text-[15px]"> لینک کوتاه</p>
                            <div className="text-[#8C8C8C] text-[14px] md:text-[15px]">
                                https://toplearn.com/c/6138
                            </div>
                            <div className="cursor-pointer text-[#8C8C8C] ml-1 border-r border-[#8C8C8C] p-4">
                                <MdContentCopy/></div>
                        </div>
                    </div>
                    <div
                        className="w-[312px] md:w-auto flex items-start justify-between mt-10 md:mt-0 md:mr-16 flex-col">
                        <span className="text-black font-medium text-[24px] md:text-[40px]">دوره جامع آموزش ریکی</span>

                        <div className=" w-[300px] md:w-[816px] mt-10 relative">
                            <p
                                className={` w-[320px] md:w-[800px] text-center md:text-start text-[14px] md:text-[20px] text-black transition-all duration-500 overflow-hidden ${
                                    showMore ? "max-h-[1000px]" : "max-h-[120px]"
                                }`}
                            >
                                ریکی درمانی چیست؟
                                ریکی یک روش درمانی طبیعی و غیرتهاجمی است که با استفاده از انرژی زندگی (چی یا پرانا) به
                                تعادل
                                جسم، ذهن و روح کمک می‌کند.
                                واژه‌ی "ریکی" از زبان ژاپنی گرفته شده و به دو بخش تقسیم می‌شود:
                                "ری" (Rei): انرژی کیهانی یا معنوی
                                "کی" (Ki): نیروی حیاتی که در تمام موجودات جاری است.
                                در ریکی درمانی، درمانگر با قرار دادن دستان خود روی یا نزدیک به بدن فرد، انرژی مثبت را
                                منتقل
                                می‌کند تا فرآیند درمان طبیعی در بدن فعال شود.
                                تاریخچه‌ی ریکی
                                ریکی در اوایل قرن بیستم توسط دکتر میکائو اوسویی در ژاپن توسعه یافت. اوسویی پس از سال‌ها
                                مطالعه و مراقبه، سیستمی از انرژی درمانی را بنا نهاد که اکنون در سراسر جهان استفاده
                                می‌شود و
                                شاخه‌های مختلفی مانند اوسویی ریکی، کارونا ریکی و ریکی تیبت دارد.
                            </p>

                            {!showMore && (
                                <div
                                    className="absolute bottom-0 left-0 right-0 w-[320px] md:w-full h-[100px] bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"/>
                            )}

                            <div
                                className="absolute bottom-0 z-20 w-[312px] md:w-full bg-white/80 text-black flex items-center justify-center h-[0px] cursor-pointer"
                                onClick={toggleContent}
                            >
                                <span className="mr-2">{showMore ? "نمایش کمتر" : "نمایش بیشتر"}</span>
                                <span>{showMore ? <FaAngleUp/> : <FaAngleDown/>}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row items-start justify-start ">
                    <div style={{background: "linear-gradient(141.73deg, #59518C 5.98%, #181626 99.04%)"}}
                         className="w-[312px] m-auto md:w-[368px] h-[440px] mt-10 rounded-lg flex items-center justify-center flex-col">
                        <div>
                            <Image className="rounded-full border border-y-slate-300" src="/image/profile1.png"
                                   alt="image"
                                   width={120} height={120}/>
                        </div>
                        <div className="flex items-center justify-center flex-col mt-2">
                            <span className="text-[16px]">علی رضایی</span>
                            <p className="text-[13px] mt-2">مدرس دوره</p>
                            <p className="text-center p-5 text-[14px]">
                                کی یک روش درمانی طبیعی و غیرتهاجمی است که با استفاده از انرژی زندگی (چی یا پرانا) به
                                تعادل
                                جسم، ذهن و روح کمک می‌کند. واژه‌ی "ریکی" از زبان ژاپنی گرفته شده و به دو بخش تقسیم
                                می‌شود:"ری"(Rei): انرژی کیهانی یا معنوی
                                "کی" (Ki): نیروی حیاتی که در تمام موجودات جاری است

                            </p>
                        </div>
                    </div>
                    <div className=" md:mr-16 md:-mt-32">
                        <div className="mt-10 m-auto mr-10">
                            <Image className=" md:w-[816px] md:h-[604px] w-[312px] h-[186px]"
                                   src="/image/Group 1394.png"
                                   alt="image" width={816} height={604}/>

                        </div>
                        <div className="hidden md:flex items-center justify-between w-[800px] mr-12">
                            <div className="mt-10">
                                <Image className="rounded-full border border-y-slate-300" src="/image/profile1.png"
                                       alt="image" width={100} height={100}/>
                            </div>
                            <div className="flex flex-col items-start justify-start mt-5">
                                <span className="text-[#8C8C8C]">مدرس دوره</span>
                                <p className="text-[#191627] text-[20px] ml-28">سعید رحمانی(مربی یوگا و مدیتیشن بامدرک
                                    بین
                                    المللی از
                                    فرانسه)</p>
                            </div>
                            <div className="flex flex-col items-center justify-start text-black">
                            <span>
                                20

                            </span>
                                <p className="text-[#8C8C8C]">
                                    جلسه
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex md:hidden w-[312px] flex-col items-center justify-between h-[214px] border-2 rounded-lg border-y-slate-300 m-auto mr-10 mt-5">
                            <div className="mt-5">
                                <Image className="rounded-full border border-y-slate-300" src="/image/profile1.png"
                                       alt="image" width={60} height={60}/>
                            </div>
                            <div>
                                <p className="text-black text-center">
                                    سعید رحمانی(مربی یوگا و مدیتیشن بامدرک بین المللی از فرانسه)
                                </p>
                            </div>
                            <div className="w-[296px] h-[28px] bg-[#CACACA] mb-2 rounded text-black text-center">
                                20جلسه
                            </div>
                        </div>
                        <div className="mt-10 m-auto mr-10">
                            <Image className=" md:w-[816px] md:h-[604px] w-[312px] h-[186px]"
                                   src="/image/Group 1394.png"
                                   alt="image" width={816} height={604}/>

                        </div>
                    </div>
                </div>


            </div>
            <div className="flex flex-col  md:mr-0 mb-16">

                <div className="w-[200px] mr-14">
                    <NamePages image="/image/Group 1188 .svg"/>
                </div>


                <div className=" flex items-start flex-col justify-start mt-10 ">
                    <div
                        className="w-[312px] m-auto md:w-[1420px] h-[144px] bg-[#F5F5F5] mt-10 text-black  bg-[#F5F5F5] flex items-center">
                        <div className="mr-5">
                            <Image className="rounded-full shadow-2xl border border-y-slate-300"
                                   src="/image/profile1.png"
                                   alt="image" width={80} height={80}/>
                        </div>
                        <div className="flex flex-col  ">
                            <div className="flex items-center mr-5 ">
                                <span className="text-[#191627] font-bold">
                                علی رضایی
                            </span>
                                <div className="flex text-[#FFCC00] p-2">
                                <span className="mr-2">
                                    <IoIosStar/>
                                </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                              </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                             </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                             </span>
                                </div>
                            </div>
                            <div className="mr-5 mt-3">
                                <p className="text-[#191627] font-medium text-[12px] md:text-[15px] ml-2">
                                    خیلی عالی بودن دوره جامع ریکی استاد من واقع نتیجه دیدم.به شما هم پیشنهاد میکنم
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-[312px] m-auto md:w-[1420px] h-[144px] bg-[#F5F5F5] mt-2 text-black  bg-[#F5F5F5] flex items-center">
                        <div className="mr-5">
                            <Image className="rounded-full shadow-2xl border border-y-slate-300"
                                   src="/image/profile1.png"
                                   alt="image" width={80} height={80}/>
                        </div>
                        <div className="flex flex-col  ">
                            <div className="flex items-center mr-5 ">
                                <span className="text-[#191627] font-bold">
                                علی رضایی
                            </span>
                                <div className="flex text-[#FFCC00] p-2">
                                <span className="mr-2">
                                    <IoIosStar/>
                                </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                              </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                             </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                             </span>
                                </div>
                            </div>
                            <div className="mr-5 mt-3">
                                <p className="text-[#191627] font-medium text-[12px] md:text-[15px] ml-2">
                                    خیلی عالی بودن دوره جامع ریکی استاد من واقع نتیجه دیدم.به شما هم پیشنهاد میکنم
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-[312px] m-auto md:w-[1420px] h-[144px] bg-[#F5F5F5] mt-2 text-black  bg-[#F5F5F5] flex items-center">
                        <div className="mr-5">
                            <Image className="rounded-full shadow-2xl border border-y-slate-300"
                                   src="/image/profile1.png"
                                   alt="image" width={80} height={80}/>
                        </div>
                        <div className="flex flex-col  ">
                            <div className="flex items-center mr-5 ">
                                <span className="text-[#191627] font-bold">
                                علی رضایی
                            </span>
                                <div className="flex text-[#FFCC00] p-2">
                                <span className="mr-2">
                                    <IoIosStar/>
                                </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                              </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                             </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                             </span>
                                </div>
                            </div>
                            <div className="mr-5 mt-3">
                                <p className="text-[#191627] font-medium text-[12px] md:text-[15px] ml-2">
                                    خیلی عالی بودن دوره جامع ریکی استاد من واقع نتیجه دیدم.به شما هم پیشنهاد میکنم
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-[312px] m-auto md:w-[1420px] h-[144px] bg-[#F5F5F5] mt-2 text-black  bg-[#F5F5F5] flex items-center">
                        <div className="mr-5">
                            <Image className="rounded-full shadow-2xl border border-y-slate-300"
                                   src="/image/profile1.png"
                                   alt="image" width={80} height={80}/>
                        </div>
                        <div className="flex flex-col  ">
                            <div className="flex items-center mr-5 ">
                                <span className="text-[#191627] font-bold">
                                علی رضایی
                            </span>
                                <div className="flex text-[#FFCC00] p-2">
                                <span className="mr-2">
                                    <IoIosStar/>
                                </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                              </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                             </span>
                                    <span className="mr-1">
                                    <IoIosStar/>
                             </span>
                                </div>
                            </div>
                            <div className="mr-5 mt-3">
                                <p className="text-[#191627] font-medium text-[12px] md:text-[15px] ml-2">
                                    خیلی عالی بودن دوره جامع ریکی استاد من واقع نتیجه دیدم.به شما هم پیشنهاد میکنم
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container m-auto flex flex-col items-center m-auto justify-center ">
                <div className="flex flex-col items-start m-auto justify-start mr-10 md:mr-auto ">
                    <div className="flex items-center justify-center">
                    <span className="ml-3 text-[#8C8C8C]">
                        <FaRegEdit/>
                    </span>
                        <span className="text-black font-medium">
                       دیدگاه خود راشرح دهید
                    </span>
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        <div className="text-yellow-400">
                            <IoIosStar/>
                        </div>
                        <p className="text-[#191627] mr-2 text-[14px]">امتیاز من به این دوره:</p>
                        <div className="text-yellow-400 mr-2 mb-5">
                            {score > 0 && (
                                <div className="flex gap-1 mt-4">
                                    {Array.from({ length: score }).map((_, i) => (
                                        <span key={i} className="text-[12px]">
                                               <IoIosStar/>
                                        </span>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-5">
                        <div className={`flex items-center justify-between w-[312px] md:w-[552px] h-[3px] mt-2 mb-16
                             ${score > 0 ? 'bg-stone-300' : 'bg-stone-300 '}`}>
                            {Array.from({length: total}).map((_, index) => (
                                <div key={index} onClick={() => handleClick(index)} className={`relative rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 ${score >= total - index ? 'w-[20px] h-[20px] bg-[#FFCC00] shadow-md' : 'w-[6px] h-[6px] bg-[#8C8C8C]'}`}>
                                    {score === total - index && (
                                        <div className=" text-xs text-white absolute w-[60px] h-[32px] -top-12 bg-[#59518C] rounded-xl flex flex-col items-center justify-center">
                                            <span className="text-[12px] mt-2">{score} امتیاز</span>
                                            <span className="relative before:content-[''] -left-3 top-1 rotate-45  ml-5 w-[10px] h-[10px] bg-[#59518C]"></span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <textarea placeholder="نظرات خود را شرح دهید" className="w-[312px] md:w-[744px] h-[200px] pt-5 pr-5 bg-[#EBEDF0] outline-0 border border-slate-400 rounded-xl shadow-xl text-black"></textarea>
                    </div>
                    <div className=" w-[312px] md:w-[744px] h-[67px] bg-[#59518C] rounded-xl mt-5 flex items-center justify-center mb-20">
                        <button>افزودن دیدگاه</button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default DetailCourses;