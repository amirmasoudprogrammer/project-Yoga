"use client"
import React from 'react';
import Link from 'next/link';
import {FaBagShopping} from 'react-icons/fa6';
import {IoDocumentTextOutline} from "react-icons/io5";
import {FaCreditCard} from "react-icons/fa";
import useStepStore from "@/stores/useStepStore";
import {useRouter} from "next/navigation";


function Layout({children}) {
    const {step, setStep} = useStepStore()
    const router = useRouter()
    const getStepWidth = (step) => {
        if (step === 1) return "30%";
        if (step === 2) return "70%";
        if (step === 3) return "100%";
        return "100%"; // اگر بیشتر بود، ثابت بمونه
    };

    const startButton = () => {
     if (step === 1) {
         setStep(step + 1)
         router.push("/cart/ShopInfo")
     }else if (step === 2) {
         setStep(step + 1)
         router.push("/cart/")
     }else {
         return;
     }
    };


    const startShopInfo = () => {
        setStep(2)
        router.push("/cart/ShopInfo")

    }

    const startCart = () => {
        setStep(1)
        router.push("/cart")

    }

    return (
        <div className="container mx-auto mt-20 px-4">
            {/* Progress Line */}
            <div className="relative w-full h-[3px] bg-[#CACACA] flex justify-between items-center">
                <span className="w-[20px] h-[20px] bg-[#59518C] rounded-full  ml-5"></span>

                {/* Filled Line (پیشرفت) */}
                <div className="absolute top-0 right-0 h-full bg-[#59518C] transition-all"
                     style={{width: getStepWidth(step)}}></div>

                {/* Icon 3*/}
                <div onClick={() => setStep(3)} className="absolute -top-4 left-[20%]">
                    <Link
                        href="#"
                        className={`w-10 h-10 ${step === 3 ? "bg-[#59518C]" : "bg-[#CACACA]"} rounded-lg flex items-center justify-center`}
                    >
                        <FaCreditCard className="text-white text-lg"/>
                    </Link>
                </div>

                {/* Icon 2 */}
                <div onClick={startShopInfo} className="absolute -top-4 left-[50%]">
                    <Link
                        href="#"
                        className={`w-10 h-10 ${step === 2 || step === 3 ? "bg-[#59518C]" : "bg-[#CACACA]"}  transition-all rounded-lg flex items-center justify-center`}
                    >
                        <IoDocumentTextOutline className="text-white text-xl"/>
                    </Link>
                </div>

                {/* Icon 1 */}
                <div onClick={startCart} className="absolute -top-4 left-[80%]">
                    <Link
                        href="#"
                        className="w-10 h-10 bg-[#59518C] rounded-lg flex items-center justify-center"
                    >
                        <FaBagShopping className="text-white text-lg"/>
                    </Link>
                </div>

                <span
                    className={`w-[20px] h-[20px] ${step === 3 ? "bg-[#59518C]" : "bg-[#CACACA]"}  rounded-full `}></span>
            </div>


            <div className="flex flex-col md:flex-row items-start justify-between mt-32 mb-20">

                <div className="mt-12">{children}</div>
                <div className=" ">
                    <span className="text-[#191627] font-bold text-[20px]">خلاصه سبد خرید</span>
                    <div className="w-[360px] h-[344px] border border-slate-400 rounded-xl mt-10 -mr-0 md:mr-0">
                        <div className="flex items-center justify-between flex-col">
                            <div
                                className="flex items-center justify-around w-full mt-5 border-b border-b-slate-400 pb-5">
                                <span className="text-black">محصول</span>
                                <span className="text-black">قیمت کل</span>
                            </div>
                            <div
                                className="flex items-center justify-between flex-col border-b border-b-slate-400 w-full pb-5">
                                <div
                                    className="text-[#8C8C8C] flex items-center justify-around mt-3 w-full text-[14px]  ">
                                    <span>دوره جامع آموزشی ریکی</span>
                                    <p>
                                        9.000.000 تومان
                                    </p>
                                </div>
                                <div
                                    className="text-[#8C8C8C] flex items-center justify-around mt-3 w-full text-[14px]   ">
                                    <span>دوره جامع آموزشی ریکی</span>
                                    <p>
                                        9.000.000 تومان
                                    </p>
                                </div>

                            </div>
                            <div
                                className="flex items-center justify-around mt-2 w-full  w-80 pb-5 border-b-slate-400">
                                <span className="text-black text-[16px]">قیمت کل:</span>
                                <p className="text-red-600 font-medium text-[16px]"> 9.000.000 تومان </p>
                            </div>
                            <div className="flex items-center justify-around mt-2 w-full ">
                                <span className="text-black text-[16px]">مجموع:</span>
                                <p className="text-red-600 font-medium text-[16px]"> 9.000.000 تومان </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full relative -top-14 bottom-0">
                            <div
                                className="absolute -left-7 ml-1 bg-white w-[40px] h-[40px] flex items-center justify-center border-r rounded-full border-r-slate-400"></div>
                            <div
                                className="absolute bg-white -right-5  w-[40px] h-[40px] flex items-center justify-center rounded-full  border-l rounded-full border-l-slate-400"></div>

                        </div>
                        <button type="button" onClick={startButton}
                                className="w-[333px] h-[56px] bg-[#756CBF] mr-3 mt-7 rounded-lg">
                            نهایی سازی سفارش
                        </button>
                    </div>
                    <div
                        className="w-[360px] h-[56px] border border-slate-300 mt-5 rounded-lg flex items-center justify-between">
                        <input className="mr-2 h-[50px] outline-0 text-black" type="text" placeholder="کدتخفیف"/>
                        <button
                            className="w-[105px] text-[14px] h-[40px] border border-slate-300 rounded-lg ml-3 bg-[#756CBF]">اعمال
                            تخفیف
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <video
                            src="/video/M6BK945OEEh2UuE56v.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-[258px] h-[258px]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
