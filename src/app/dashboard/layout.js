"use client"
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {RxDashboard} from "react-icons/rx";
import {ImBook} from "react-icons/im";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import {BsTicketPerforated} from "react-icons/bs";
import {CiLogin, CiSettings} from "react-icons/ci";
import {IoIosMenu, IoMdClose, IoMdNotifications} from "react-icons/io";


function Layout({children}) {
    const [coursesShow, setCoursesShow] = useState(false)
    const [ticketShow, setTicketShow] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false)
    const [showNotifications, setShowNotifications] = useState(false)


    return (
        <div className="container m-auto mt-10 md:mt-16 flex items-start justify-start ">
            <div className="z-10 flex md:hidden mr-10  text-black justify-between items-center w-full ">
                <div className="cursor-pointer" onClick={() => setShowDashboard(!showDashboard)}>
                    <IoIosMenu size={25}/>
                </div>
            </div>

            <div className="flex items-start justify-between w-full">
                <div className="hidden md:block w-[368px] h-[800px] mb-16 bg-[#59518C] rounded-xl">
                    <Link href="/dashboard/Profile" className="m-auto flex items-center justify-center flex-col mt-5">
                        <Image className="rounded-full" src="/image/profile2.png" alt="image" width={100} height={100}/>
                        <span className="text-[16px] mt-2 font-medium">فهیمه حسینعلی</span>
                    </Link>
                    <div className="mt-8 mr-8">
                        <Link href="/dashboard" className="flex items-center">
                            <RxDashboard/>
                            <span className="mr-3">داشبورد</span>
                        </Link>
                        <div className="flex flex-col items-start mt-3">
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={() => setCoursesShow(!coursesShow)}
                            >
                                <ImBook/>
                                <span className="mr-3 ml-2">دوره ها</span>
                                {coursesShow ? <FaAngleUp/> : <FaAngleDown/>}
                            </div>

                            {coursesShow && (
                                <div className="flex flex-col  mt-2">
                                    <Link className="text-[14px]" href="/dashboard/my-courses">دوره های من</Link>
                                    <Link className="text-[14px] mt-2" href="/dashboard/Favorites">علاقه مندی ها</Link>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col items-start mt-3">
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={() => setTicketShow(!ticketShow)}
                            >
                                <BsTicketPerforated/>
                                <span className="mr-3 ml-2">تیکت ها</span>
                                {ticketShow ? <FaAngleUp/> : <FaAngleDown/>}
                            </div>

                            {ticketShow && (
                                <div className="flex flex-col  mt-2">
                                    <Link className="text-[14px]" href="/dashboard/ticketNew">جدید</Link>
                                    <Link className="text-[14px] mt-2" href="/dashboard/ticketAll">تیکت ها</Link>
                                </div>
                            )}
                        </div>
                        <Link href="" className="flex items-center mt-3">
                            <CiSettings/>

                            <span className="mr-3 text-[14px]">تنظیمات</span>
                        </Link>
                        <div className="flex items-center mt-3 cursor-pointer">
                            <CiLogin/>
                            <span className="mr-3 text-[14px]">خروج</span>
                        </div>

                    </div>
                </div>
                <div className="w-full h-auto ">{children}</div>
                <div className="hidden md:block cursor-pointer relative  text-black -mt-5 text-red-600">
                    <span onClick={() => setShowNotifications(!showNotifications)}> <IoMdNotifications
                        size={25}/></span>
                    {
                        showNotifications && (
                            <div
                                className="absolute top-10 left-0 -right-48 w-64 bg-white shadow-lg rounded-xl p-4 z-50 animate-fade-in">
                                <h4 className="text-gray-800 font-semibold mb-2">اعلان‌ها</h4>
                                <ul className="space-y-2 text-sm text-gray-700 max-h-48 overflow-y-auto">
                                    <li className="p-2 text-[13px] hover:bg-gray-100 rounded-md text-white cursor-pointer bg-green-500 hover:text-black">🔔
                                        شما یک پیام جدید از پشتیبانی دارید
                                    </li>
                                    <li className="p-2 text-[13px] hover:bg-gray-100 rounded-md cursor-pointer bg-red-500 text-white hover:text-black">📦
                                        سفارش شما آماده شده است
                                    </li>
                                    <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer bg-blue-600 text-white hover:text-black">⚙️
                                        تنظیمات شما به‌روزرسانی شد
                                    </li>
                                    <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer bg-blue-400 text-white  hover:text-black">💬
                                        پیام جدید از مدرس
                                    </li>
                                </ul>
                            </div>
                        )
                    }

                </div>
            </div>

            {showDashboard && (<div className={`fixed top-0 right-0 bottom-0 left-0 z-50 bg-white md:hidden`}>
                <div className="w-full flex items-center justify-end p-4">
                    <button onClick={() => setShowDashboard(false)} className="text-red-600">
                        <IoMdClose size={25}/>
                    </button>
                </div>
                <Link href="/dashboard/Profile"
                      onClick={() => setShowDashboard(false)}
                      className="m-auto flex items-center justify-center flex-col mt-5 text-[#59518C] font-bold">
                    <Image className="rounded-full" src="/image/profile2.png" alt="image" width={100} height={100}/>
                    <span className="text-[16px] mt-2 font-medium text-[#59518C]">فهیمه حسینعلی</span>
                </Link>
                <div className="mt-8 mr-8 text-[#59518C] font-bold">
                    <Link onClick={() => setShowDashboard(false)} href="/dashboard" className="flex items-center">
                        <RxDashboard/>
                        <span className="mr-3">داشبورد</span>
                    </Link>
                    <div className="flex flex-col items-start mt-3">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => setCoursesShow(!coursesShow)}
                        >
                            <ImBook/>
                            <span className="mr-3 ml-2">دوره ها</span>
                            {coursesShow ? <FaAngleUp/> : <FaAngleDown/>}
                        </div>

                        {coursesShow && (
                            <div className="flex flex-col  mt-2">
                                <Link onClick={() => setShowDashboard(false)} className="text-[14px]" href="/dashboard/my-courses">دوره های من</Link>
                                <Link onClick={() => setShowDashboard(false)} className="text-[14px] mt-2" href="/dashboard/Favorites">علاقه مندی ها</Link>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col items-start mt-3">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => setTicketShow(!ticketShow)}
                        >
                            <BsTicketPerforated/>
                            <span className="mr-3 ml-2">تیکت ها</span>
                            {ticketShow ? <FaAngleUp/> : <FaAngleDown/>}
                        </div>

                        {ticketShow && (
                            <div className="flex flex-col  mt-2">
                                <Link onClick={() => setShowDashboard(false)} className="text-[14px]" href="/dashboard/ticketNew">جدید</Link>
                                <Link onClick={() => setShowDashboard(false)} className="text-[14px] mt-2" href="/dashboard/ticketAll">تیکت ها</Link>
                            </div>
                        )}
                    </div>
                    <Link onClick={() => setShowDashboard(false)} href="" className="flex items-center mt-3">
                        <CiSettings/>

                        <span className="mr-3 text-[14px]">تنظیمات</span>
                    </Link>
                    <div className="flex items-center mt-3 cursor-pointer">
                        <CiLogin/>
                        <span className="mr-3 text-[14px]">خروج</span>
                    </div>

                </div>
            </div>)}

            <div className="block md:hidden cursor-pointer text-black ml-5">
                    <span onClick={() => setShowNotifications(!showNotifications)}> <IoMdNotifications
                        size={25}/></span>

                {
                    showNotifications && (
                        <div
                            className="absolute top-20 left-0 w-64 bg-white shadow-lg rounded-xl p-4 z-50 animate-fade-in">
                            <h4 className="text-gray-800 font-semibold mb-2">اعلان‌ها</h4>
                            <ul className="space-y-2 text-sm text-gray-700 max-h-48 overflow-y-auto">
                                <li className="p-2 text-[13px] hover:bg-gray-100 rounded-md text-white cursor-pointer bg-green-500 hover:text-black">🔔
                                    شما یک پیام جدید از پشتیبانی دارید
                                </li>
                                <li className="p-2 text-[13px] hover:bg-gray-100 rounded-md cursor-pointer bg-red-500 text-white hover:text-black">📦
                                    سفارش شما آماده شده است
                                </li>
                                <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer bg-blue-600 text-white hover:text-black">⚙️
                                    تنظیمات شما به‌روزرسانی شد
                                </li>
                                <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer bg-blue-400 text-white  hover:text-black">💬
                                    پیام جدید از مدرس
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Layout;