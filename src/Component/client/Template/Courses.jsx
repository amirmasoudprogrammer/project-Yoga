"use client";
import React, {useRef, useState, useEffect} from 'react';
import NamePages from "@/Component/client/module/NamePages";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, EffectCoverflow} from 'swiper/modules';
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import CardCourses from "@/Component/client/module/CardCourses";

const DataCourses = [
    {
        id: 1,
        image: "/image/Courses1.jpg",
        description: "کلاس‌های گروهی حضوری پکیج 3 ماهه = 15٪ تخفیف کلی",
        price: "3.500.000"
    },
    {
        id: 2,
        image: "/image/Courses2.jpg",
        description: "کلاس‌های گروهی حضوری پکیج 3 ماهه = 15٪ تخفیف کلی",
        price: "3.500.000"
    },
    {
        id: 3,
        image: "/image/Courses3.jpg",
        description: "کلاس‌های گروهی حضوری پکیج 3 ماهه = 15٪ تخفیف کلی",
        price: "3.500.000"
    },
];

function Courses() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [ready, setReady] = useState(false);

    useEffect(() => {
        setTimeout(() => setReady(true), 0);
    }, []);

    return (
        <div className="m-auto w-full max-w-screen-xl px-4">
            <NamePages image="/image/Group 1443.png"/>

            <div className="mt-16 flex flex-col items-center justify-center relative  m-auto">

                <Swiper
                    modules={[EffectCoverflow, Navigation]}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={2.5}
                    spaceBetween={20}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 250,
                        modifier: 3.5,
                        slideShadows: false,
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        360: {slidesPerView: 1},
                        480: {slidesPerView: 1},
                        640: {slidesPerView: 1},
                        1024: {slidesPerView: 2.5},
                    }}
                    className="w-full"
                >
                    {DataCourses.map((item, index) => (

                            <SwiperSlide
                                key={item.id}
                                className="flex items-center justify-center relative md:right-72 md:mr-14 m-auto mr-2">
                                <CardCourses data={item}/>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>



                <div className="flex md:hidden items-center justify-center gap-4 mt-6 z-10 relative">

                    <button
                        ref={nextRef}
                        className="border border-[#59518C] rounded-full p-2 text-[#59518C] hover:bg-[#59518C] hover:text-white transition"
                    >
                        <FaChevronRight/>
                    </button>
                    <button
                        ref={prevRef}
                        className="border border-[#59518C] rounded-full p-2 text-[#59518C] hover:bg-[#59518C] hover:text-white transition"
                    >
                        <FaChevronLeft/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Courses;
