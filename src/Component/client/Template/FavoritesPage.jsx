import React from 'react';
import Image from "next/image";
import {MdDelete} from "react-icons/md";


function FavoritesPage(props) {
    return (
        <div className="container m-auto w-[290px] md:w-auto">
            <div className="flex flex-col items-center justify-center md:items-start md:justify-between  -mt-5 md:mt-0">
                <span className="flex items-start justify-start md:items-center md:mr-5 mt-5 md:justify-start text-[#59518C] md:text-[30px] font-bold">علاقه مندی ها</span>
            </div>

            <div>
                <div className="w-[312px] h-[327px] md:w-[831px] md:h-[199px] border border-[#8C8C8C] rounded-lg -mr-5 md:mr-5 mt-5 flex flex-col items-center md:items-start md:justify-start justify-between md:flex-row">
                    <Image src="/image/Group 1394.png" alt="image" className="w-[312px] h-[178px] md:w-[233px] md:h-[199px] md:pt-2 md:pb-2 md:pr-2" width={233} height={200}/>
                    <div className="text-black md:mt-5 mr-5 ">
                        <div className="flex items-center justify-between md:w-[550px]">
                                <span className="font-bold text-[20px] md:text-[34px]">
                            دوره جامع آموزش ریکی
                        </span>
                            <div className="text-red-600 cursor-pointer ml-5">
                                <MdDelete/>
                            </div>
                        </div>
                        <p className="md:mt-5 mt-2 text-[#FF0000] font-bold">9,000,000تومان</p>
                        <div className="-mr-5 mt-5 pb-5 font-bold text-[10px] md:text-[16px]">
                            <span className="mr-2 md:mr-5">  دوره ها‌:آنلاین </span>
                            <span className="mr-2 md:mr-5">   مدت زمان:6:00 ساعت </span>
                            <span className="mr-2 md:mr-5 "> مدرس:فهیمه حسینعلی </span>
                        </div>
                    </div>

                </div>
                <div className="w-[312px] h-[327px] md:w-[831px] md:h-[199px] border border-[#8C8C8C] rounded-lg -mr-5 md:mr-5 mt-5 flex flex-col items-center md:items-start md:justify-start justify-between md:flex-row">
                    <Image src="/image/Group 1394.png" alt="image" className="w-[312px] h-[178px] md:w-[233px] md:h-[199px] md:pt-2 md:pb-2 md:pr-2" width={233} height={200}/>
                    <div className="text-black mt-5 mr-5 ">
                        <div className="flex items-center justify-between md:w-[550px]">
                                <span className="font-bold text-[20px] md:text-[34px]">
                         دستگاه بخور(مدل دستگاه)
                        </span>
                            <div className="text-red-600 cursor-pointer ml-5 md:ml-0">
                                <MdDelete/>
                            </div>
                        </div>
                        <div className="md:w-[380px] text-[#8C8C8C]">
                            <p className="mt-2 mb-2 text-[12px] md:text-[16px]">ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است</p>
                        </div>
                        <p className=" mt-3 md:mt-5 ml-5 mb-5 md:ml-0 md:ml-0 text-[12px] flex items-end justify-end text-[#FF0000] font-bold">9,000,000تومان</p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default FavoritesPage;