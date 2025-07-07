"use client"
import React, {useState} from 'react';
import {MdMarkEmailUnread, MdOutlineMailOutline} from "react-icons/md";
import {HiOutlineMailOpen} from "react-icons/hi";
import Link from "next/link";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import {SlCalender} from "react-icons/sl";
import Image from "next/image";

function TicketAlls(props) {
    const [ticketAll, setTicketAll] = useState([])
    return (
        <div className=" w-[280px] md:w-auto -mr-44  flex item flex-col md:mr-5">
            <div className="flex flex-col items-start justify-start md:items-start md:justify-between  mt-10 md:mt-0">
                <span className="flex items-start justify-start md:items-center mt-5 md:justify-start text-[#59518C] md:text-[30px] font-bold">خلاصه پشتیبانی</span>
            </div>

            <div className="w-[350px] h-[85px] md:w-[831px] md:h-[179px] pt-4 pb-4 md:pt-0 md:pb-0 rounded-lg  flex items-center justify-around border border-slate-300 rounded  mt-5 shadow-lg">
                <Link href="" className="flex items-center justify-between flex-col">
                    <div className="w-[30px] h-[30px] hover:animate-pulse text-[20px] md:text-[40px] font-thin bg-[#007AFF] ring-1 ring-sky-400 md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full">
                        <HiOutlineMailOpen/>
                    </div>
                    <span className="text-[#007AFF] md:mt-2">0</span>
                    <p className="text-[#007AFF] text-[12px] md:text-[14px] font-medium md:mt-2">مکالمات باز</p>
                </Link>
                <Link href="" className="flex items-center justify-between flex-col">
                    <div
                        className="w-[30px] h-[30px] hover:animate-pulse text-[20px] md:text-[40px] font-thin bg-[#007AFF] ring-1 ring-sky-400 md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full">
                        <MdOutlineMailOutline/>
                    </div>
                    <span className="text-[#007AFF] md:mt-2">0</span>
                    <p className="text-[#007AFF] text-[12px] md:text-[14px] font-medium md:mt-2">مکالمات بسته</p>
                </Link>
                <Link href="" className="flex items-center justify-between flex-col">
                    <div
                        className="w-[30px] h-[30px] hover:animate-pulse text-[20px] md:text-[40px] font-thin bg-[#007AFF] ring-1 ring-sky-400 md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full">
                        <MdMarkEmailUnread/>
                    </div>
                    <span className="text-[#007AFF] md:mt-2">0</span>
                    <p className="text-[#007AFF] text-[12px] md:text-[14px] font-medium md:mt-2"> تمام مکالمات</p>
                </Link>
            </div>
            <div className="mt-10 md:mr-3">
                <span className="text-black font-medium">پیام های فیلتر</span>
                <div className="w-[350px] md:w-[831px] md:h-[117px] border border-slate-300 mt-5 shadow-xl rounded-lg">
                    <form action="@/components/client/module/TicketPageAll"
                          className="flex items-center flex-col md:flex-row justify-center mt-5 mb-5 md:mb-0">
                        <div className="text-black flex items-start flex-col cursor-pointer  ">
                            <label className="text-black mr-2" htmlFor="">از</label>
                            <div className="flex items-center border border-slate-300 rounded-lg">
                                <DatePicker
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom-right"
                                    placeholder="تاریخ شروع را انتخاب کنید"
                                    style={{
                                        width: "auto",
                                        height: "37px",
                                        borderRadius: "8px",
                                        border: "none",
                                        fontFamily: "Estedad",
                                        fontSize: "15px"
                                    }}
                                />
                                <span className="ml-3">
                                  <SlCalender/>

                              </span>
                            </div>
                        </div>
                        <div className="text-black flex items-start flex-col cursor-pointer mt-3 md:mt-0 md:mr-3">
                            <label className="text-black mr-2" htmlFor="">به</label>
                            <div className="flex items-center border border-slate-300 rounded-lg">
                                <DatePicker
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom-right"
                                    placeholder="تاریخ شروع را انتخاب کنید"
                                    style={{
                                        width: "auto",
                                        height: "37px",
                                        borderRadius: "8px",
                                        border: "none",
                                        fontFamily: "Estedad",
                                        fontSize: "15px"
                                    }}
                                />
                                <span className="ml-3">
                                  <SlCalender/>

                              </span>
                            </div>
                        </div>
                        <div className="text-black flex items-start flex-col md:-mt-2 md:mr-3 ">
                            <label className="text-black mr-2" htmlFor="">بخش</label>
                            <select id="section" name="section"
                                    className="text-slate-400 w-[220px] md:w-[160px] mt-2 h-[37px] outline-0 border border-slate-400 rounded">
                                <option value="">بخش</option>
                                <option value="website">وب‌سایت</option>
                                <option value="app">اپلیکیشن</option>
                                <option value="payment">پرداخت</option>
                                <option value="other">سایر</option>
                            </select>
                        </div>
                        <div className="text-black flex items-start flex-col md:-mt-2 md:mr-3">
                            <label className="text-black mr-2" htmlFor="">وضعیت</label>
                            <select id="section" name="section"
                                    className="text-slate-400 w-[220px] md:w-[150px] mt-2 h-[37px] outline-0 border border-slate-400 rounded">
                                <option value="">وضعیت</option>
                                <option value="website">وب‌سایت</option>
                                <option value="app">اپلیکیشن</option>
                                <option value="payment">پرداخت</option>
                                <option value="other">سایر</option>
                            </select>
                        </div>
                    </form>
                </div>

            </div>
            <div className="mt-10 md:mt-10 mr-5">
                <span className="text-black font-medium md:mr-5">تاریخ پیام ها</span>
                {ticketAll.length === 0 && (
                    <div className=" h-[500px] flex items-center justify-center flex-col">
                        <Image src="/image/ticketImage.png" width={289} height={272} alt="icon"/>
                        <span className="text-black font-bold text-[16px]">شما پیامی ندارید!</span>
                        <p className="text-[#626262]">می‌توانید با مدرس ها یا پشتیبانی کارپل در تماس باشید</p>
                    </div>
                )}
                <div className="bg-[#59518C] w-[360px]  md:w-[140px] -mr-5 h-[38px] flex items-center justify-center mb-10 md:mr-auto rounded-lg">
                    <Link href="/dashboard/ticketNew">
                        تیکت جدید
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default TicketAlls;