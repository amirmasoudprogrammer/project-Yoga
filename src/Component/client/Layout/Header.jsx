"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {FaRegUser, FaUser} from "react-icons/fa";
import {IoCartOutline} from "react-icons/io5";
import {CiLogin, CiSearch} from "react-icons/ci";
import {IoIosMenu} from "react-icons/io";
import {IoMdClose} from "react-icons/io";
import {IoIosSearch} from "react-icons/io";
import Image from "next/image";
import {RxDashboard} from "react-icons/rx";
import {BsTicketPerforated} from "react-icons/bs";
import {ImBook} from "react-icons/im";


function Header(props) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [showLogin , setShowLogin] =useState(false)

    return (
        <>
            <header
                className="hidden  relative z-10 left-0 right-0 container m-auto md:flex items-center justify-end w-full h-[60px] bg-[#CAACF2] bg-opacity-30 backdrop-blur-[40px] m-auto mt-10 rounded-full">
                <div className='ml-64'>
                    <ul className="flex items-center justify-center ">
                        <li className="mr-6 text-black text-[14px] font-normal hover:font-bold transition-all"><Link
                            href="/">صفحه اصلی</Link></li>
                        <li className="mr-6 text-black text-[14px] font-normal hover:font-bold transition-all"><Link
                            href="/courses">دوره های ما</Link></li>
                        <li className="mr-6 text-black text-[14px] font-normal hover:font-bold transition-all"><Link
                            href="/products">محصولات ما</Link></li>
                        <li className="mr-6 text-black text-[14px] font-normal hover:font-bold transition-all"><Link
                            href="/about">درباره ما</Link></li>
                        <li className="mr-6 text-black text-[14px] font-normal hover:font-bold transition-all"><Link
                            href="/Contact">تماس با ما</Link></li>
                    </ul>
                </div>
                <div className="flex items-center justify-between w-[120px] ml-10 ">
                    <div className="relative " onClick={() => setShowLogin(!showLogin)}>
                        <Link href="/auth/Login" className="w-[24px] h-[24px]" >
                            <FaRegUser color="black" size={20}/>
                        </Link>
                        {
                            showLogin && (
                                <div className="  bg-white absolute flex items-start justify-start flex-col  rounded-lg shadow-2xl shadow-blue-200  left-0 -right-32  top-10  w-[300px] h-auto pb-10">
                                    <div className="mr-5 mt-5 flex w-[270px]  border-b border-b-slate-300 pb-2 items-center justify-start ">
                                        <Image  src="/image/photo_admin.jpg" alt="profile" width={50} height={50} quality={100} className="w-[50px] h-[50px]   rounded-full object-cover " />
                                        <span className="text-black mr-2 font-bold">امیر مسعود اسدی طلب </span>
                                    </div>
                                    <Link href="" className="flex items-center mr-5 mt-5 transition-all group">
                                        <span className="text-slate-400 group-hover:text-black"><RxDashboard/></span>
                                        <span className="mr-2 text-black font-medium hover:font-bold" >داشبورد</span>
                                    </Link>
                                    <Link href="" className="flex items-center mr-5 mt-5 transition-all group">
                                        <span className="text-slate-400 group-hover:text-black"><ImBook/></span>
                                        <span className="mr-2 text-black font-medium hover:font-bold" >دوره ها</span>
                                    </Link>
                                    <Link href="" className="flex items-center mr-5 mt-5 transition-all group">
                                        <span className="text-slate-400 group-hover:text-black"> <BsTicketPerforated/></span>
                                        <span className="mr-2 text-black font-medium hover:font-bold" >تیکت ها</span>
                                    </Link>
                                    <div className="flex items-center mr-5 mt-5 transition-all group">
                                        <span className="text-red-300 font-bold group-hover:text-red-600 "> <CiLogin/></span>
                                        <span className="mr-2 cursor-pointer font-medium hover:font-bold text-red-600" >خروج</span>
                                    </div>
                                </div>
                            )

                        }

                    </div>
                    <div>
                        <Link href="/cart" className="w-[24px] h-[24px]">
                            <IoCartOutline color="black" size={20}/>
                        </Link>

                    </div>
                    <div>
                        <Link href="" className="w-[24px] h-[24px]">
                            <CiSearch color="black" size={20}/>
                        </Link>
                    </div>
                </div>
            </header>

            <header
                className="container flex-col relative z-10 left-0 right-0 block md:hidden flex items-end justify-end">
                <div className="ml-4 mt-5 text-black" onClick={() => setOpen(!open)}>
                    {
                        open ? null : (<IoIosMenu size="25"/>)
                    }

                </div>
                <div className="mt-10 flex items-center m-auto border-b border-[#FFFFFF] text-black">

                    <input type="text" className="w-[320px] bg-transparent text-end text-black" name="search"
                           value={search} onChange={(e) => setSearch(e.target.value)} placeholder="جستجو"/>
                    <IoIosSearch size="25"/>
                </div>
                {open && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 z-50">

                        <div className="relative w-full h-full bg-white p-6 rounded-none">
                            <button onClick={() => setOpen(false)}
                                    className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl">
                                <IoMdClose/>
                            </button>

                            <div className="text-black mt-5 flex items-center justify-center">
                                <ul className="flex items-center justify-center flex-col">
                                    <li className="text-[14px] text-lg text-lg m-6 group relative w-max">
                                        <Link href="">
                                            <span className="hover:font-bold transition-all">صفحه اصلی</span>
                                            <span
                                                className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                            <span
                                                className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                        </Link></li>
                                    <li className="mt-3 text-[14px] text-lg text-lg m-6 group relative w-max">
                                        <Link href="">
                                            <span className="hover:font-bold transition-all">دوره‌ها  ما</span>
                                            <span
                                                className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                            <span
                                                className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                        </Link></li>
                                    <li className="mt-3 text-[14px] text-lg text-lg m-6 group relative w-max">
                                        <Link href="">
                                            <span className="hover:font-bold transition-all">محصولات ما</span>
                                            <span
                                                className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                            <span
                                                className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                        </Link></li>
                                    <li className="mt-3 text-[14px] text-lg text-lg m-6 group relative w-max">
                                        <Link href="">
                                            <span className="hover:font-bold transition-all">درباره ما</span>
                                            <span
                                                className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                            <span
                                                className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                        </Link></li>
                                    <li className="mt-3 text-[14px] text-lg text-lg m-6 group relative w-max">
                                        <Link href="">
                                            <span className="hover:font-bold transition-all">تماس با ما</span>
                                            <span
                                                className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                            <span
                                                className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                        </Link></li>

                                </ul>
                            </div>
                            <div className="flex flex-col items-center justify-center mt-28">
                                <Link href=""
                                      className="w-[312px] h-[48px] text-white bg-[#59518C] flex items-center justify-center rounded-lg">ورود
                                    / ثبت نام</Link>
                                <div onClick={() => setOpen(false)}
                                     className="mt-5 w-[312px] h-[48px] text-[#8C8C8C] font-bold border flex items-center justify-center rounded-lg">بازگشت
                                    به صفحه
                                </div>

                            </div>
                        </div>

                    </div>
                )}


            </header>

        </>

    );
}

export default Header;