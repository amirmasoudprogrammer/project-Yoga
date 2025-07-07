"use client";

import React, {useRef} from 'react';
import Image from "next/image";
import {motion, useInView} from "framer-motion";

const fadeUp = {
    hidden: {opacity: 0, y: 50},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

function ManagerProfile() {
    const desktopRef = useRef(null);
    const mobileRef = useRef(null);

    const isDesktopInView = useInView(desktopRef, { once: true, margin: "-100px" });
    const isMobileInView = useInView(mobileRef, { once: true, margin: "-100px" });

    return (
        <>
            <motion.div
                ref={desktopRef}
                variants={fadeUp}
                initial="hidden"
                animate={isDesktopInView ? "visible" : "hidden"}
                className="hidden md:block mt-10 mb-32"
            >
                <div className="m-auto flex items-center flex-col justify-center ">
                    <div className="flex items-start justify-start flex-col text-start w-[50%]">
                        <span className="text-black text-[40px] font-bold mb-3">زهرا برزگر</span>
                        <p className="bg-[#756CBF] w-[323px] h-[40px] flex items-center justify-center rounded-full text-[14px] text-white">
                            مربی یوگا و مدیتیشن بامدرک بین المللی از فرانسه
                        </p>
                    </div>

                    <div style={{
                        backgroundImage: "url('/image/Rectangle 5 (1).png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }} className="w-full h-[600px] relative -top-8 ">
                        <div className="flex items-center justify-center absolute -top-28 left-0 right-80">
                            <Image
                                src="/image/photo_2025-04-27_22-59-29.svg"
                                alt="image"
                                width={344}
                                height={440}
                            />
                        </div>

                        <div className="absolute m-auto left-0 right-40 mr-56 w-[330px] flex flex-col items-center justify-center mt-20">
                            <div className="w-[328px] h-[150px] text-white text-[12px] leading-6">
                                بنیان‌گذار مجموعه یوگا و مدیتیشن «آرام تن»، با بیش از ده سال تجربه تخصصی در آموزش یوگا و
                                مراقبه، مسیر خود را با عشق به آرامش درون آغاز کرد.
                                او فارغ‌التحصیل دوره‌های بین‌المللی یوگا و مدیتیشن در هند و ترکیه است و تا امروز صدها
                                هنرجو را در مسیر تعادل ذهن و بدن همراهی کرده است.
                            </div>
                            <div className="w-[328px] h-[150px] mt-5 mr-12 text-white text-[12px] leading-6">
                                <strong>سوابق حرفه‌ای:</strong><br/>
                                مربی ارشد یوگا در مرکز بوبوکالما، از ۱۳۹۵ تا کنون<br/>
                                برگزارکننده کارگاه‌های ذهن‌آگاهی، مدیتیشن تنفسی و یوگای درمانی<br/>
                                تجربه‌ی مربی‌گری در دوره‌های اختصاصی یوگای بارداری، پیلاتس اصلاحی و ژیمناستیک
                                بانوان<br/>
                                تمرکز ویژه بر سلامت روان، سبک زندگی سالم و آموزش تمرین‌های کاربردی برای زندگی روزمره
                            </div>
                        </div>
                    </div>
                    <div className="-mt-32 flex items-center justify-center">
                        <div className="flex items-center">
                            <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile1.png" alt="image" width={50} height={50} />
                            <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile2.png" alt="image" width={50} height={50} />
                            <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile3.png" alt="image" width={50} height={50} />
                            <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile4.png" alt="image" width={50} height={50} />
                            <div className="-ml-3 w-[50px] h-[50px] bg-[#CAACF2] rounded-full flex items-center justify-center text-[12px] text-white">
                                +1000
                            </div>
                        </div>
                    </div>

                </div>

            </motion.div>


            <motion.div
                ref={mobileRef}
                variants={fadeUp}
                initial="hidden"
                animate={isMobileInView ? "visible" : "hidden"}
                className="block md:hidden mt-10 mb-10"
            >
                <div className="w-[312px]  h-[546px] bg-[#59518C] m-auto rounded-lg ">
                    <div className="flex items-center justify-center relative -top-24 m-auto left-0 right-0">
                        <Image
                            src="/image/photo_2025-04-27_22-59-29.svg"
                            alt="image"
                            width={216}
                            height={248}
                        />
                    </div>
                    <div className="text-center relative -top-20">
                        <span className="text-[25px]">
                            زهرا برزگر
                        </span>
                        <p className="w-[270px] rounded-xl bg-white h-[18px] text-[#59518C] text-[12px] m-auto mt-5">مربی یوگا و مدیتیشن بامدرک بین المللی از فرانسه</p>
                    </div>
                    <div className="relative -top-20">
                        <p className="text-center text-[12px] p-5">بنیان‌گذار مجموعه یوگا و مدیتیشن «آرام تن»، با بیش از ده سال تجربه تخصصی در آموزش یوگا و مراقبه، مسیر خود را با عشق به آرامش درون آغاز کرد.
                            او فارغ‌التحصیل دوره‌های بین‌المللی یوگا و مدیتیشن در هند و ترکیه است و تا امروز صدها هنرجو را در مسیر تعادل ذهن و بدن همراهی کرده است.</p>
                    </div>
                    <div className="relative -top-24">
                        <p className="text-center text-[12px] p-5">
                            سوابق حرفه‌ای:
                            <br/>
                            مربی ارشد یوگا در مرکز بوبوکالما، از ۱۳۹۵ تا کنون
                            برگزارکننده کارگاه‌های ذهن‌آگاهی، مدیتیشن تنفسی و یوگای درمانی
                            تجربه‌ی مربی‌گری در دوره‌های اختصاصی یوگای بارداری، پیلاتس اصلاحی و ژیمناستیک بانوان
                            تمرکز ویژه بر سلامت روان، سبک زندگی سالم و آموزش تمرین‌های کاربردی برای زندگی روزمره
                        </p>
                    </div>
                </div>
                <div className=" flex items-center justify-center mt-10">
                    <div className="flex items-center">
                        <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile1.png" alt="image" width={50} height={50} />
                        <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile2.png" alt="image" width={50} height={50} />
                        <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile3.png" alt="image" width={50} height={50} />
                        <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile4.png" alt="image" width={50} height={50} />
                        <div className="-ml-3 w-[50px] h-[50px] bg-[#CAACF2] rounded-full flex items-center justify-center text-[12px] text-white">
                            +1000
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default ManagerProfile;
