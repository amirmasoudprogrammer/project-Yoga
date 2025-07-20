"use client"
import React, {useEffect, useState} from 'react';
import NamePages from "@/Component/client/module/NamePages";
import CardCategory from "@/Component/client/module/CardCategory";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import BASE_URL from "@/ApiBase/Base";

const DataCategory = [
    {
        id: 1,
        image: "/image/image1.png",
        title: "یوگا",
        description: "یوگای صبحگاهی، یوگا برای کاهش استرس، یوگا برای لاغری، یوگای بارداری"
    },
    {
        id: 2,
        image: "/image/image2.png",
        title: "یوگا",
        description: "یوگای صبحگاهی، یوگا برای کاهش استرس، یوگا برای لاغری، یوگای بارداری"
    },
    {
        id: 3,
        image: "/image/image3.png",
        title: "یوگا",
        description: "یوگای صبحگاهی، یوگا برای کاهش استرس، یوگا برای لاغری، یوگای بارداری"
    },
    {
        id: 4,
        image: "/image/image4.png",
        title: "یوگا",
        description: "یوگای صبحگاهی، یوگا برای کاهش استرس، یوگا برای لاغری، یوگای بارداری"
    }
]


function Category(props) {
    const [category, setCategory] = useState([])

    const fetchCategory = async () => {
        try {
            const token = Cookies.get('token');
            const res = await axios.get(`${BASE_URL}/v1/admin/categories`, {
                headers: token ? {Authorization: `Bearer ${token}`} : {}
            });
            setCategory(res.data.data)

        } catch (error) {
            console.error('خطا در گرفتن داده‌ها:', error);
        }
    };

    useEffect(() => {
        fetchCategory();
        const interval = setInterval(fetchCategory, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="mb-28">
            <NamePages image="/image/Group 1125.png"/>

            <div className="hidden md:flex mt-16 items-center justify-center">
                {
                    category.map((item, index) => {
                        let customStyle = "";

                        if (index === 0) customStyle = "mb-10";
                        if (index === 1) customStyle = "mt-10";
                        if (index === 2) customStyle = "mb-10";
                        if (index === 3) customStyle = "mt-10";

                        return <CardCategory key={item.id} index={index} customStyle={customStyle} data={item}/>

                    })
                }
            </div>

            <div className="md:hidden mt-16 w-full px-4">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                >
                    {category.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <CardCategory
                                data={item}
                                index={index}
                                customStyle="w-full h-[400px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Link href=""
                  className="m-auto w-full md:w-[250px] text-white h-[50px] bg-[#59518C] md:rounded-lg text-black flex items-center justify-center mt-20">
                نمایش بیشتر
            </Link>
        </div>
    );
}

export default Category;