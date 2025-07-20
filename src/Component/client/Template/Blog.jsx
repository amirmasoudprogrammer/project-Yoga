"use client";
import React, {useEffect, useRef, useState} from 'react';
import NamePages from "@/Component/client/module/NamePages";
import CardBlog from "@/Component/client/module/CardBlog";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {FaAngleLeft} from "react-icons/fa6";
import {FaChevronRight} from "react-icons/fa";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import BASE_URL from "@/ApiBase/Base";


const DataBlog = [
    {
        id: 1,
        image: "/image/blog1.png",
        title: "مزایای ریکی:",
        description: "کاهش استرس و اضطراب کمک به ارامش ذهن و خواب راحت"
    },
    {
        id: 2,
        image: "/image/blog1.png",
        title: "مزایای ریکی:",
        description: " کاهش استرس و اضطراب کمک به ارامش ذهن و خواب راحت "
    },
    {
        id: 3,
        image: "/image/blog1.png",
        title: "مزایای ریکی:",
        description: " کاهش استرس و اضطراب کمک به ارامش ذهن و خواب راحت "
    },
    {
        id: 4,
        image: "/image/blog1.png",
        title: "مزایای ریکی:",
        description: "  کاهش استرس و اضطراب کمک به ارامش ذهن و خواب راحت"
    },
    {
        id: 5,
        image: "/image/blog1.png",
        title: "مزایای ریکی:",
        description: "  کاهش استرس و اضطراب کمک به ارامش ذهن و خواب راحت"
    }
];


function Blog() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [blog, setBlog] = useState([])

    const fetchBlog = async () => {
        try {
            const token = Cookies.get('token');
            const res = await axios.get(`${BASE_URL}/v1/blog`, {
                headers: token ? {Authorization: `Bearer ${token}`} : {}
            });
            setBlog(res.data.data)

        } catch (error) {
            console.error('خطا در گرفتن داده‌ها:', error);
        }
    };

    useEffect(() => {
        fetchBlog();
        const interval = setInterval(fetchBlog, 5000);
        return () => clearInterval(interval);
    }, []);

    console.log(blog)

    return (
        <div className="relative mb-10">
            <NamePages image="/image/Group 1460.svg"/>


            <div className="absolute top-[50%] md:top-[50%] right-0 md:right-36 z-10">
                <button ref={nextRef}
                        className="text-indigo-800 md:text-[30px] cursor-pointer p-2 rounded-full shadow-md">
                    <FaChevronRight/>
                </button>
            </div>
            <div className="absolute top-[50%] md:top-[50%] left-0 md:left-36 z-10">
                <button ref={prevRef}
                        className="text-indigo-800 md:text-[30px] cursor-pointer p-2 rounded-full shadow-md">
                    <FaAngleLeft/>
                </button>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {

                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: {slidesPerView: 1},
                    1024: {slidesPerView: 1},
                }}
                className="mt-20"
            >
                {blog.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardBlog data={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link href="/Blog"
                  className="bg-[#59518C] md:w-[298px] h-[59px] m-auto flex items-center justify-center mt-10 md:rounded-xl">
                نمایش بیشتر
            </Link>
        </div>
    );
}

export default Blog;
