"use client"
import React, {useEffect, useState} from 'react';
import NamePages from "@/Component/client/module/NamePages";
import CardProduct from "@/Component/client/module/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { motion } from "framer-motion";
import useProductStore from "@/stores/useProductStore";



function OurProducts(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const { products, loading, error, fetchProducts } = useProductStore()
    console.log({products, loading, error, fetchProducts })
    const indicatorsCount = 5;


    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="mb-10">
            <NamePages image="/image/Group 1459.svg"/>
            {/* انیمیشن برای کل بخش */}
            <motion.div
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
                viewport={{once: true, amount: 0.2}}
                className="relative w-full mt-10"
            >
                <Swiper
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex % indicatorsCount)
                    }
                    slidesPerView={2}
                    centeredSlides={true}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        480: {slidesPerView: 1, spaceBetween: 10},
                        640: {slidesPerView: 1, spaceBetween: 15},
                        768: {slidesPerView: 1, spaceBetween: 15},
                        1024: {slidesPerView: 5, spaceBetween: 20},
                    }}
                >
                    <div className="flex mt-28 ">
                        {
                            products.data?.map((item) => (
                                <SwiperSlide key={item.id} className="m-auto mr-40 md:mr-10">
                                    <CardProduct  data={item}/>
                                </SwiperSlide>
                            ))
                        }

                    </div>
                </Swiper>
                <div className="flex justify-center  mt-10 space-x-2  rtl:space-x-reverse ">
                    {Array.from({ length: indicatorsCount }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-[10px] h-[10px] rounded transition-all duration-300 ${
                                activeIndex === index ? 'bg-[#756CBF] scale-125' : 'bg-[#CACACA]'
                            }`}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default OurProducts;