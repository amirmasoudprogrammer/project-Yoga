"use client"
import React, {useState} from 'react';
import NamePages from "@/Component/client/module/NamePages";
import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Navigation} from "swiper/modules";
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import CartTeam from "@/Component/client/module/CartTeam";


function AboutPage(props) {
    const [swiperRef, setSwiperRef] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const dataTeam = [
        {id: 1,image:"/image/profile2.png" , name: "زهرا برزگر", job: "بنیان گذار فروشگاه"},
        {id: 2,image:"/image/profile1.png" , name: "زهرا برزگر", job: "بنیان گذار فروشگاه"},
        {id: 3,image:"/image/profile3.png" , name: "زهرا برزگر", job: "بنیان گذار فروشگاه"},
        {id: 5,image:"/image/profile4.png" , name: "زهرا برزگر", job: "بنیان گذار فروشگاه"},
        {id: 6,image:"/image/profile2.png" , name: "زهرا برزگر", job: "بنیان گذار فروشگاه"},

    ]

    return (
        <div className="container m-auto flex flex-col items-center justify-center md:items-start md:justify-start ">
            <div className="flex">
                <NamePages image="/image/Group 1123.svg"/>
            </div>
            <div className="flex items-center justify-between flex-col-reverse md:flex-row  border-b border-[#CACACA]">
                <div className="w-[312px] h-[368px] md:w-[774px] md:h-[344px] bg-[#59518C] rounded-lg mt-10 mb-10">
                    <p className="text-[12px] md:text-[18px] font-medium py-5 px-8">
                        به دنیای آرامش و تندرستی خوش اومدین!
                        ما اینجا هستیم تا با شما سفری متفاوت به دنیای یوگا رو آغاز کنیم؛ جایی که جسم و ذهن در کنار هم به
                        تعادل می‌رسن. سایت ما با هدف ترویج سبک زندگی سالم و آموزش اصولی یوگا راه‌اندازی شده، تا هم
                        تازه‌واردها و هم حرفه‌ای‌ها بتونن از محتواهای آموزشی، برنامه‌های تمرینی، مقالات علمی و ویدیوهای
                        تخصصی بهره‌مند بشن.
                        تیم ما متشکل از مربیان باتجربه، متخصصان حرکات اصلاحی و عاشقان یوگاست که با عشق و دانش، محتوای
                        مفید و کاربردی تهیه می‌کنن. باور ما اینه که یوگا فقط یه ورزش نیست؛ یه راهه برای شناخت بهتر خود،
                        رهایی از استرس‌ها و رسیدن به آرامش واقعی.
                        چه بخوای تمرینات روزانه‌تو پیدا کنی، چه دنبال یادگیری تکنیک‌های تنفس و مدیتیشن باشی، ما اینجاییم
                        تا همراهت باشیم.
                        با ما همراه شو و اجازه بده یوگا کیفیت زندگیت رو متحول کنه
                    </p>
                </div>
                <div className="md:mr-20 mt-10 md:mt-auto">
                    <Image src="/image/imageAbout.png" alt="image" className="w-[323px] h-[417px]  md:w-[434px] md:h-[461px] object-cover"
                           quality={100} width="434" height="461"/>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col md:flex-row m-auto mt-10">
                <div className="w-[312px] h-[158px] md:w-[501px] md:h-[158px] bg-[#59518C] rounded-lg">
                    <p className="text-[12px] md:text-[16px] px-5 py-5">
                        الیزا
                        <br/>
                        مزون الیزا، یک‌شوروم (فروشگاه) لباس مجلسی و کژوال زنانه است که نزدیک به ۱۲سالی است در زمینه مد و
                        پوشاک فعالیت می‌کند. برای سلیقه مشتریانش ارزش زیادی قائل می‌شود.
                    </p>
                </div>
                <div className="w-[312px] h-[158px] md:w-[237px] md:h-[158px] bg-[#59518C] rounded-lg mt-10 md:mt-auto md:mr-5">
                    <p className="mx-5 my-5 font-medium">دسترسی سریع</p>
                    <ul className="mx-5 my-5  grid grid-cols-2 gap-4">
                        <li className="list-disc mr-5 "><Link className="text-[12px] font-normal" href="">درباره
                            ما</Link></li>
                        <li className="list-disc mr-5 "><Link className="text-[12px] font-normal" href="">ارتباط
                            باما</Link></li>
                        <li className="list-disc mr-5 "><Link className="text-[12px] font-normal" href="">ورود و ثبت
                            نام</Link></li>
                        <li className="list-disc mr-5 "><Link className="text-[12px] font-normal" href="">محصولات
                            ما</Link></li>
                    </ul>
                </div>
                <div className="w-[312px] h-[158px] md:w-[237px] md:h-[158px] bg-[#59518C] rounded-lg mt-10 md:mt-auto md:mr-5 px-5 py-5">
                    <p className="mb-5 font-medium">ارتباط باما</p>
                    <p className="text-[14px]">

                        تلفن: 26372651_ 021
                        تلفن:26379841_ 021
                        <br/>
                        ایمیل: eliza gmail.com@

                    </p>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center mx-auto mt-16 w-full px-4">
               <span className="text-black flex items-center justify-center font-medium text-[28px] md:text-[34px]">
        اعضای تیم
    </span>

                <div className="w-[180px] md:w-full md:max-w-6xl md:mx-auto mt-10">
                    <Swiper
                        modules={[EffectCoverflow, Navigation]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={1.2}
                        spaceBetween={20}
                        onSwiper={setSwiperRef}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 250,
                            modifier: 2,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 1},
                            1024: { slidesPerView: 2.5 },
                        }}
                    >
                        {dataTeam.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <CartTeam data={item} isActive={index === activeIndex} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* دکمه‌های پایین */}
                    <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
                        {dataTeam.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => swiperRef?.slideToLoop(index)}
                                className={`w-[12px] h-[12px] rounded-full border-2 transition-all duration-300 ${
                                    index === activeIndex
                                        ? "bg-[#59518C] border-[#59518C]"
                                        : "bg-white border-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;