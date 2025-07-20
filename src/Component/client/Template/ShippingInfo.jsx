"use client"
import React, {useState} from 'react';

function ShippingInfo(props) {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        phone: '',
        province: '',
        city: '',
        postal: '',
        address: '',
        landline: '',
        shipping_method: 'normal',
        payment_method: 'online'
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };
    const provinces = ["خراسان رضوی", "تهران", "خراسان جنوبی", "خراسان شمالی"];

    return (

        <div className="-mt-10">
            <span className="text-black font-bold text-[20px] sm:text-[24px] ">سبد خرید شما</span>

            <div className="w-[322px] md:w-[816px] m-auto mt-5 pt-12 pb-12 border border-slate-300 rounded mb-10">
                <form className="flex flex-col gap-6 px-6">
                    {/* نام و نام خانوادگی */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name" className="text-black">نام*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="نام خود را کامل کنید"
                                className="text-black pr-2 h-[50px] border-slate-300 rounded border outline-0"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="lastname" className="text-black">نام خانوادگی*</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder="نام خانوادگی کامل کنید"
                                className="text-black pr-2 h-[50px] border-slate-300 rounded border outline-0"
                                value={formData.lastname}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* شماره موبایل */}
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-black">شماره موبایل*</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="شماره همراه خود را کامل کنید"
                            className="text-black pr-2 h-[50px] border-slate-300 rounded border outline-0"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    {/* استان، شهر، کد پستی */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex text-black flex-col w-full">
                            <label htmlFor="province">استان*</label>
                            <select
                                id="province"
                                name="province"
                                className="w-full h-[50px] mt-1 border-slate-300 border rounded outline-0"
                                value={formData.province}
                                onChange={handleChange}
                            >
                                <option value="">انتخاب استان</option>
                                {provinces.map((prov) => (
                                    <option key={prov} value={prov}>{prov}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex text-black flex-col w-full">
                            <label htmlFor="city">شهر*</label>
                            <select
                                id="city"
                                name="city"
                                className="w-full h-[50px] mt-1 border-slate-300 border rounded outline-0"
                                value={formData.city}
                                onChange={handleChange}
                            >
                                <option value="">انتخاب شهر</option>
                                {provinces.map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex text-black flex-col w-full">
                            <label htmlFor="postal">کدپستی*</label>
                            <input
                                type="text"
                                id="postal"
                                name="postal"
                                placeholder="کد پستی"
                                className="text-black pr-2 h-[50px] border-slate-300 rounded border outline-0"
                                value={formData.postal}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* آدرس پستی */}
                    <div className="flex text-black flex-col">
                        <label htmlFor="address" className="text-black">آدرس پستی*</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="آدرس خود را وارد کنید"
                            className="text-black pr-2 h-[50px] border-slate-300 rounded border outline-0 w-full"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    {/* تلفن ثابت */}
                    <div className="flex text-black flex-col">
                        <label htmlFor="landline" className="text-black">تلفن ثابت (اختیاری)</label>
                        <input
                            type="text"
                            id="landline"
                            name="landline"
                            placeholder="تلفن ثابت کامل کنید"
                            className="text-black pr-2 h-[50px] border-slate-300 rounded border outline-0"
                            value={formData.landline}
                            onChange={handleChange}
                        />
                    </div>
                    {/* روش ارسال */}
                    <div className="flex text-black flex-col">
                        <label htmlFor="shipping_method">روش ارسال*</label>
                        <select
                            id="shipping_method"
                            name="shipping_method"
                            value={formData.shipping_method}
                            onChange={handleChange}
                            className="text-black pr-2 h-[50px] border-slate-300 rounded border outline-0"
                        >
                            <option value="normal">عادی</option>
                            <option value="express">سریع</option>
                            {/*<option value="pickup">دریافت حضوری</option>*/}
                        </select>
                    </div>

                    {/* روش پرداخت */}
                    <div className="flex text-black flex-col">
                        <label htmlFor="payment_method">روش پرداخت*</label>
                        <select
                            id="payment_method"
                            name="payment_method"
                            value={formData.payment_method}
                            onChange={handleChange}
                            className="text-black pr-2 h-[50px] border-slate-300 rounded border outline-0"
                        >
                            <option value="online">پرداخت آنلاین</option>
                            {/*<option value="credit_card">کارت‌خوان در محل</option>*/}
                            {/*<option value="bank_transfer">واریز بانکی</option>*/}
                            {/*<option value="cash">پرداخت نقدی</option>*/}
                        </select>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default ShippingInfo;