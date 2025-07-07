import React from 'react';

function ContactPage(props) {
    return (
     <>
         <div className="hidden container m-auto mt-20 mb-20 md:flex items-center justify-between">
             <div className="h-[550px] flex flex-col items-start justify-between">
                 <div className="text-black">
                     <span className="text-[24px] font-bold">فرم تماس با ما</span>
                     <div className="flex items-center justify-start mt-2">
                         <span className="w-[14px] h-[14px] bg-[#59518C] rounded-full"></span>
                         <span className="mr-2 w-[10px] h-[10px] bg-[#59518C] rounded-full"></span>
                     </div>
                     <p className="w-[241px] text-[#8C8C8C] mt-2">برای دریافت پاسخ سریع‌تر، از طریق واتس‌اپ یا تلگرام با
                         ما در ارتباط باشید: ۰۹۰۱۱۹۰۰۵۲۹</p>
                 </div>

                 <div>
                     <video
                         src="/video/Z0u4ZwWLHOAZ4c408c.mp4"
                         autoPlay
                         loop
                         muted
                         playsInline
                         className="w-[241px] h-[222px] -mr-5"
                     />
                 </div>
             </div>
             <div className="border border-[#eeeeee] w-[830px] h-[524px] bg-white rounded-xl shadow-xl">
                 <div className="mr-5 mt-10 flex items-center justify-start">
                     <div>
                         <video
                             src="/video/3h27GYvIop5E0F19Xn.mp4"
                             autoPlay
                             loop
                             muted
                             playsInline
                             className="w-[40px] h-[40px] rounded-full -rotate-180 "
                         />
                     </div>
                     <span className="mr-3 text-black text-[25px] font-bold">فرم زیر را پرکنید</span>

                 </div>
                 <form action="" className="mr-5 mt-2 ml-5">
                     <div className="flex items-center justify-between text-black">
                         <div className="flex items-start justify-start flex-col">
                             <label htmlFor="name" className="mb-2 text-black text-[15px]">نام ونام خانوادگی</label>
                             <input type="text" name="name" placeholder="نام خود را وارد کنید" className="w-[246px] h-[42px] rounded border border-[#eeeeee]" />
                         </div>
                         <div className="flex items-start justify-start flex-col">
                             <label htmlFor="phone" className="mb-2 text-black text-[15px]">شماره همراه</label>
                             <input type="number" name="phone" placeholder="شماره خود را وارد کنید" className="w-[246px] h-[42px] rounded border border-[#eeeeee]" />
                         </div>
                         <div className="flex items-start justify-start flex-col">
                             <label htmlFor="Category" className="mb-2 text-black text-[15px]">موضوع</label>
                             <input type="text" name="Category" placeholder="موضوع خود را وارد کنید" className="w-[246px] h-[42px] rounded border border-[#eeeeee]" />
                         </div>
                     </div>
                     <div className="mt-16">
                         <label htmlFor="Category" className=" text-black text-[15px] ">توضیحات شما</label>
                         <textarea name="Category" placeholder="موضوع خود را وارد کنید" className="w-[782px] h-[177px] text-black mt-5 pt-5 pr-5 rounded border border-[#eeeeee]" />
                     </div>
                     <div className="mr-auto bg-[#59518C] rounded w-[129px] h-[42px] flex items-center justify-center">
                         <button>
                             ارسال پیام
                         </button>
                     </div>
                 </form>
             </div>
         </div>



         <div className='flex md:hidden  items-center flex-col mt-20'>
             <div className="h-[200px] flex flex-col items-start justify-between">
                 <div className="text-black">
                     <span className="text-[24px] font-bold">فرم تماس با ما</span>
                     <div className="flex items-center justify-start mt-2">
                         <span className="w-[14px] h-[14px] bg-[#59518C] rounded-full"></span>
                         <span className="mr-2 w-[10px] h-[10px] bg-[#59518C] rounded-full"></span>
                     </div>
                     <p className="w-[300px] text-[#8C8C8C] mt-2">برای دریافت پاسخ سریع‌تر، از طریق واتس‌اپ یا تلگرام با
                         ما در ارتباط باشید: ۰۹۰۱۱۹۰۰۵۲۹</p>
                 </div>
             </div>
             <div className="border border-[#eeeeee] w-[312px] h-[750px] bg-white rounded-xl shadow-xl">
                 <div className="mr-5 mt-5 flex items-center justify-start">
                     <div>
                         <video
                             src="/video/3h27GYvIop5E0F19Xn.mp4"
                             autoPlay
                             loop
                             muted
                             playsInline
                             className="w-[40px] h-[40px] rounded-full -rotate-180 "
                         />
                     </div>
                     <span className="mr-3 text-black text-[25px] font-bold">فرم زیر را پرکنید</span>

                 </div>
                 <form action="" className="mr-5 mt-2 ml-5 flex flex-col">
                     <div className="flex items-center justify-between text-black flex-col">
                         <div className="flex mt-5 items-start justify-start flex-col">
                             <label htmlFor="name" className="mb-2 text-black text-[15px]">نام ونام خانوادگی</label>
                             <input type="text" name="name" placeholder="نام خود را وارد کنید" className="w-[246px] h-[42px] rounded border border-[#eeeeee]" />
                         </div>
                         <div className="flex mt-5 items-start justify-start flex-col">
                             <label htmlFor="phone" className="mb-2 text-black text-[15px]">شماره همراه</label>
                             <input type="number" name="phone" placeholder="شماره خود را وارد کنید" className="w-[246px] h-[42px] rounded border border-[#eeeeee]" />
                         </div>
                         <div className="flex mt-5 items-start justify-start flex-col">
                             <label htmlFor="Category" className="mb-2 text-black text-[15px]">موضوع</label>
                             <input type="text" name="Category" placeholder="موضوع خود را وارد کنید" className="w-[246px] h-[42px] rounded border border-[#eeeeee]" />
                         </div>
                     </div>
                     <div className="mt-16">
                         <label htmlFor="Category" className=" text-black text-[15px] ">توضیحات شما</label>
                         <textarea name="Category" placeholder="موضوع خود را وارد کنید" className="w-[280px] h-[177px] text-black mt-5 pt-5 pr-5 rounded border border-[#eeeeee]" />
                     </div>
                     <div className="mr-auto mt-5 bg-[#59518C] rounded w-[129px] h-[42px] flex items-center justify-center">
                         <button>
                             ارسال پیام
                         </button>
                     </div>
                 </form>
             </div>
             <div className="mt-10">
                 <video
                     src="/video/Z0u4ZwWLHOAZ4c408c.mp4"
                     autoPlay
                     loop
                     muted
                     playsInline
                     className="w-[241px] h-[222px] "
                 />
             </div>
         </div>
     </>
    );
}

export default ContactPage;