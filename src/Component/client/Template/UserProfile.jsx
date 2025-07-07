import React from 'react';

function UserProfile(props) {
    return (
        <div className="">
            <div className="hidden md:flex flex-col">
                <span className="flex items-center mt-5 justify-start mr-10 text-[#59518C] text-[30px] font-bold">اطلاعات اصلی</span>
                <div className="mr-10 mt-10">
                    <div className="flex items-center justify-between">
                        <span className="text-[#191627] font-bold ">حساب </span>
                        <div className="w-[860px] h-[2px] bg-[#CACACA]">

                        </div>
                    </div>

                    <form action="" className="mt-5  ">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-[#191627]">ایمیل</label>
                            <input type="email" id="email" name="email" placeholder=""
                                   className="mt-4 w-[372px] h-[50px] rounded-lg border border-slate-400 font-bold text-black"/>
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="name" className="text-[#191627]">نام و نام خانوادگی</label>
                            <input type="text" id="name" name="name" placeholder=""
                                   className="mt-4 w-[372px] h-[50px] rounded-lg border border-slate-400 font-bold text-black"/>
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="password" className="text-[#191627]">رمز عبور</label>
                            <input type="password" id="password" name="password" placeholder=""
                                   className="mt-4 w-[372px] h-[50px] rounded-lg border border-slate-400 font-bold text-black"/>
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="passwordAG" className="text-[#191627]">تکرار رمز عبور</label>
                            <input type="password" placeholder="" id="passwordAG" name="passwordAG"
                                   className="mt-4 w-[372px] h-[50px] rounded-lg border border-slate-400 font-bold text-black"/>
                        </div>
                        <div className="flex flex-col mt-5 border-b border-b-[#CACACA] pb-5">
                            <label htmlFor="phone" className="text-[#191627]">تلفن</label>
                            <input type="Number" placeholder="" id="phone" name="phone"
                                   className="mt-4 w-[372px] h-[50px] rounded-lg border border-slate-400 font-bold text-black"/>
                        </div>
                        <button className="w-[161px] h-[51px] bg-[#59518C] rounded-lg mt-6 mr-36">ذخیره کردن</button>
                    </form>
                </div>
            </div>
            <div className="flex items-center w-[270px] flex-col md:hidden">
                <span className="flex items-center justify-center  w-[100px] m-auto text-[#59518C] text-[16px] font-bold">اطلاعات اصلی</span>
                <div className="flex items-center justify-start mt-10">
                    <span className="text-[#191627] font-bold ">حساب </span>
                    <div className="w-[269px] mr-4 h-[2px] bg-[#CACACA]">

                    </div>
                </div>
                <div className="mt-5 mr-14">
                    <form action="" className="mt-5  ml-24 flex flex-col items-start justify-start">
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-[#191627]">ایمیل</label>
                            <input type="email" id="email" name="email" placeholder="" className="mt-4 w-[312px] h-[37px] rounded-lg border border-slate-400 font-bold text-black"/>
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="name" className="text-[#191627]">نام و نام خانوادگی</label>
                            <input type="text" id="name" name="name" placeholder=""
                                   className="mt-4 w-[312px] h-[37px] rounded-lg border border-slate-400 font-bold text-black"/>
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="password" className="text-[#191627]">رمز عبور</label>
                            <input type="password" id="password" name="password" placeholder=""
                                   className="mt-4 w-[312px] h-[37px] rounded-lg border border-slate-400 font-bold text-black"/>
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="passwordAG" className="text-[#191627]">تکرار رمز عبور</label>
                            <input type="password" placeholder="" id="passwordAG" name="passwordAG"
                                   className="mt-4 w-[312px] h-[37px] rounded-lg border border-slate-400 font-bold text-black"/>
                        </div>
                        <div className="flex flex-col mt-5 border-b border-b-[#CACACA] pb-5">
                            <label htmlFor="phone" className="text-[#191627]">تلفن</label>
                            <input type="Number" placeholder="" id="phone" name="phone"
                                   className="mt-4 w-[312px] h-[37px]] rounded-lg border border-slate-400 font-bold text-black"/>
                        </div>
                        <button className="w-[312px] h-[51px] bg-[#59518C] rounded-lg mt-6 ">ذخیره کردن</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;