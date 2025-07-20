'use client'

import React, {useEffect, useState} from 'react';
import { MdLock } from "react-icons/md";
import { TbClockHour11 } from "react-icons/tb";
import { RiFileListFill } from "react-icons/ri";
import { VscCheck } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Cookies from "js-cookie";
import axios from "axios";
import BASE_URL from "@/ApiBase/Base";


function OrdersPage() {
    const [status, setStatus] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [sort, setSort] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [orders, setOrders] =useState([])




    const fetchData = async () => {
        try {
            const token = Cookies.get('tokenAdmin');
            const res = await axios.get(`${BASE_URL}/v1/orders`, {
                headers: token ? {Authorization: `Bearer ${token}`} : {}
            });
            setOrders(res.data.data);
        } catch (error) {
            console.error("خطا در دریافت محصولات:", error);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="mt-28 z-10">
            <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
                🛒 مدیریت سفارشات
            </h1>


            <div className="mt-5 flex flex-wrap gap-4 justify-center md:justify-between mx-4">
                {[
                    { icon: <MdLock />, color: 'text-blue-500', bg: 'bg-slate-300', label: 'کل سفارشات' },
                    { icon: <TbClockHour11 />, color: 'text-orange-500', bg: 'bg-yellow-300', label: 'در انتظار تایید' },
                    { icon: <RiFileListFill />, color: 'text-indigo-800', bg: 'bg-indigo-400', label: 'در حال پردازش' },
                    { icon: <VscCheck />, color: 'text-green-500', bg: 'bg-green-200', label: 'تکمیل شده' },
                    { icon: <IoMdClose />, color: 'text-red-600', bg: 'bg-red-200', label: 'لغو شده' }
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-center p-1 w-[200px] h-[70px] shadow-xl cursor-pointer border border-slate-200 rounded transition-all duration-500 hover:shadow-sm">
                        <div className={`p-1 flex ${item.color} text-[20px] ${item.bg} rounded-full items-center justify-center w-[30px] h-[30px]`}>
                            {item.icon}
                        </div>
                        <span className="text-[12px] mr-2">{item.label}</span>
                    </div>
                ))}
            </div>


            <div className="mr-8 mt-8 flex flex-col md:flex-row items-start justify-start gap-4">
                {/* جستجو */}
                <div className="mt-2 flex rounded border border-slate-300 h-[30px] items-center justify-around px-2">
                    <IoIosSearch />
                    <input
                        type="text"
                        className="outline-0 border-0 pr-2 text-sm"
                        placeholder="جستجو محصول"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* فرم فیلتر */}
                <form className="flex flex-wrap gap-3">
                    {/* وضعیت سفارش */}
                    <select
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="text-slate-600 w-[220px] md:w-[170px] h-[30px] outline-0 border border-slate-400 rounded"
                    >
                        <option value="">وضعیت سفارش</option>
                        <option value="درانتظار تایید">درانتظار تایید</option>
                        <option value="درحال پردازش">درحال پردازش</option>
                        <option value="در حال ارسال">در حال ارسال</option>
                        <option value="تکمیل شده">تکمیل شده</option>
                        <option value="لغو شده">لغو شده</option>
                    </select>

                    {/* نوع پرداخت */}
                    <select
                        name="paymentType"
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                        className="text-slate-600 w-[220px] md:w-[170px] h-[30px] outline-0 border border-slate-400 rounded"
                    >
                        <option value="">نوع پرداخت</option>
                        <option value="انلاین">انلاین</option>
                        <option value="پرداخت در محل">پرداخت در محل</option>
                        <option value="کیف پول">کیف پول</option>
                    </select>

                    {/* مرتب‌سازی */}
                    <select
                        name="sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="text-slate-600 w-[220px] md:w-[170px] h-[30px] outline-0 border border-slate-400 rounded"
                    >
                        <option value="">جدیدترین</option>
                        <option value="قدیمی‌ترین">قدیمی‌ترین</option>
                        <option value="بیشترین مبلغ">بیشترین مبلغ</option>
                        <option value="کمترین مبلغ">کمترین مبلغ</option>
                    </select>
                </form>
            </div>

       <div>
           <div className="mt-10 mx-8 overflow-x-auto">
               <table className="min-w-full text-sm text-center border border-slate-300">
                   <thead className="bg-slate-100 text-slate-700">
                   <tr>
                       <th className="py-3 border">شماره سفارش</th>
                       <th className="py-3 border">نام کاربر</th>
                       <th className="py-3 border">وضعیت</th>
                       <th className="py-3 border">پرداخت</th>
                       <th className="py-3 border">مبلغ</th>
                       <th className="py-3 border">تاریخ</th>
                       <th className="py-3 border">عملیات</th>
                   </tr>
                   </thead>
                   <tbody>
                   {orders.map((order, index) => (
                       <tr key={index} className="hover:bg-slate-50 transition-all">
                           <td className="py-2 border">{order.order_number}</td>
                           <td className="py-2 border">{order.shipping_address.name}</td>
                           <td className="py-2 border text-blue-600">{order.status}</td>
                           <td className="py-2 border">{order.payment_status}</td>
                           <td className="py-2 border">{order.final_amount} تومان</td>
                           <td className="py-2 border">{new Date(order.created_at).toLocaleDateString("fa-IR")}</td>
                           <td className="py-2 border">
                               <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs">
                                   مشاهده
                               </button>
                           </td>
                       </tr>
                   ))}
                   </tbody>
               </table>
           </div>

       </div>

        </div>
    );
}

export default OrdersPage;

