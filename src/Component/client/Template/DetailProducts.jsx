"use client"
import React, {useEffect, useRef, useState} from 'react';
import {IoIosStar} from "react-icons/io";
import Image from "next/image";
import {CiShoppingCart} from "react-icons/ci";
import CardProduct from "@/Component/client/module/CardProduct";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {EffectCoverflow, Navigation} from "swiper/modules";

import {Swiper, SwiperSlide} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import NamePages from "@/Component/client/module/NamePages";
import useProductStore from "@/stores/useProductStore";
import LoadingOrError from "@/Component/client/module/LoadingOrError";
import {useCartStore} from "@/stores/cartStore";
import {toast, Toaster} from "sonner";


function DetailProducts({data, slug}) {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [mainImage, setMainImage] = useState(data.featured_image);
    const {products, loading, error, fetchProducts} = useProductStore()
    const Additem = useCartStore(state =>state.AddITEM)
    const handleImageChange = (image) => {
        setMainImage(image);
    };


    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    const AddToCart = () =>{
        Additem(data)
        toast.success("محصول به سبد خرید اضافه شد...");
    }

    return (
        <>
            <Toaster expand={true} position="top-center" richColors/>

            <div className="container m-auto mb-8 flex rounded relative items-start flex-col justify-between mt-24 w-[360px] h-[431px] md:w-[1224px] md:h-[729px] rounded-xl border border-[#eeeeee]  shadow-xl">
                <div className="flex tems-start justify-between">
                    <div className="mt-10">
                        <div className="text-black text-[20px] md:text-[44px] font-bold mr-4  md:mr-20">
                            {data.name}
                        </div>
                        <div
                            className="w-[200px] md:w-auto flex items-start md:items-center flex-wrap mr-2 md:mr-20 mt-5">
                            <div className="flex items-center justify-center text-[#FFCC00]">
                                <span className="mr-1"><IoIosStar/></span>
                                <span className="mr-1"><IoIosStar/></span>
                                <span className="mr-1"><IoIosStar/></span>
                                <span className="mr-1"><IoIosStar/></span>
                                <span className="mr-1"><IoIosStar/></span>
                            </div>
                            <div className="text-[#191627] mr-3 -mt-1 md:mt-auto">
                                <span> امتیاز: ۴.۹ </span>
                            </div>
                            <div className="md:mr-3 md:border-r-4 pr-2 mt-4 text-[#756CBF]">
                        <span>
                            {Number(data.price).toLocaleString('fa-IR')}تومان
                        </span>
                            </div>
                        </div>
                        <div className="md:mr-20 md:mt-16 mt-5 mr-5">
                            <p className="text-[20px] text-black">توضیحات:</p>
                            <div className='w-[200px]  md:w-[448px]'>
                                <p className="text-[#8C8C8C] md:mt-8 text-[12px] md:text-[14px] ">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start md:mr-14 mt-3 md:mt-10 cursor-pointer">
                            {data.images?.map((img, index) => (
                                <Image
                                    key={index}
                                    src={img.image_path}
                                    alt="image"
                                    width={50}
                                    height={50}
                                    className={img.image_path === mainImage ? "border-4 border-[#756CBF] shadow-xl rounded-xl transition-all w-[40px] h-[40px] md:w-[50px] md:h-[50px] mr-3" : "w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-xl mr-3"}
                                    onClick={() => handleImageChange(img.image_path)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-[154px] h-[431px] md:w-[620px] md:h-[729px] md:mr-36 rounded">
                        {mainImage ?
                            <Image src={mainImage} quality={100}
                                   className="w-[154px] h-[431px] rounded md:w-[612px] md:h-[729px] object-cover"
                                   alt="IMAGE"
                                   width={612} height={729}/> :
                            null}
                    </div>
                </div>
                <div
                    className="absolute bottom-2 md:bottom-14 w-[320px] h-[50px] md:w-[1176px] md:h-[100px] left-0 right-0 m-auto bg-white/80 border border-slate-300 shadow-xl rounded flex items-center justify-between  mb-auto ">
                    <div
                        className=" hidden md:flex bg-[#756CBF] w-[321px] h-[60px]  items-center justify-center rounded mr-5">
                      <span className="ml-5">
                        <CiShoppingCart/>
                    </span>
                        <button onClick={AddToCart}>
                            افزودن به سبد خرید
                        </button>

                    </div>
                    <div className="flex items-center justify-between">
                    <span className="text-black mr-5 md:mr-0 ml-5 font-bold text-[10px] md:text-[15px]">
                        افزودن:
                    </span>
                        <div className="flex text-black">
                            <button className="ml-5">+</button>
                            <p className="border border-slate-400  pr-2 pl-2 rounded">1</p>
                            <button className="mr-5">-</button>
                        </div>
                    </div>
                    <div className="flex items-center md:ml-10">
                        <span className="text-black ml-2 md:ml-5 font-bold text-[9px] md:text-[15px]">دستگاه بخور(مدل دستگاه)</span>
                        <div>
                            <Image className="rounded-xl w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
                                   src={mainImage}
                                   alt="image" quality={80} width={80} height={729}/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container m-auto mb-10 flex ">
                <div
                    className=" flex md:hidden bg-[#756CBF] w-[312px] h-[39px]  items-center justify-center rounded m-auto">
                      <span className="ml-5">
                        <CiShoppingCart/>
                    </span>
                    <button className="text-[16px]">
                        افزودن به سبد خرید
                    </button>

                </div>

            </div>

            <div
                className="container m-auto mb-56 mt-10 w-[1320px] h-[533px] flex flex-col m-auto items-center justify-between">
                <div className="flex items-start justify-start ml-auto mb-10 mr-28 md:mr-5">
                    <NamePages image="/image/Group 118844.svg"/>
                </div>
                <div className="flex w-[1320px] h-[533px]">
                    <button ref={nextRef}
                            className="border bg-[#59518C] flex items-center justify-center w-[40px] text-white h-[40px] border-[#59518C] rounded-full p-2 text-[#59518C]  m-auto">
                        <FaChevronRight/>
                    </button>
                    <Swiper
                        modules={[EffectCoverflow, Navigation]}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={2.5}
                        spaceBetween={20}
                        onSwiper={setSwiperInstance} // ⬅️ این خط مهمه
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -75,
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
                            640: {slidesPerView: 4},
                            1024: {slidesPerView: 4},
                        }}
                    >
                        {
                            loading ? (<LoadingOrError message="کمی صبر کنید "/>) : (
                                products.data?.map((item) => (
                                    <SwiperSlide key={item.id} className=" flex items-center justify-center md:mr-5">
                                        <CardProduct data={item}/>
                                    </SwiperSlide>
                                ))

                            )
                        }


                    </Swiper>
                    <button ref={prevRef}
                            className="border bg-[#59518C] flex items-center justify-center w-[40px] text-white h-[40px] border-[#59518C] rounded-full p-2 text-[#59518C]  m-auto">
                        <FaChevronLeft/>
                    </button>
                </div>
            </div>


        </>


    );
}

export default DetailProducts;
