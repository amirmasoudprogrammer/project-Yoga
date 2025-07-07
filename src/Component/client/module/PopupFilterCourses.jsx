import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import CardCategoryCoursesPage from "@/Component/client/module/CardCategoryCoursesPage";
import {CiSearch} from "react-icons/ci";

function PopupFilterCourses({popupFilter,setPopupFilter , DataFILTER,onSelectCourses ,selectedCourses }) {
    return (
        <div className="fixed inset-0 z-[70] bg-white">
            <div className="w-[390px] h-[80px] bg-[#756CBF] flex items-center  m-auto relative top-0">
                <div onClick={() => setPopupFilter(!popupFilter)} className="ml-auto mr-2"><span ><FaArrowRightLong /></span></div>
                <span className="ml-auto text-center text-[14px] -mr-10">فیلتر دوره‌ها</span>
            </div>
                <div className="flex mt-5 mb-36 items-center justify-center flex-col">
                    <div className="bg-[#F5F5F5]  border border-slate-300 w-[288px] h-[56px] flex items-center rounded-md">
                     <span className="mr-5">
                         <CiSearch color="black" size={20}/>
                     </span>
                        <input type="text" className=" bg-[#F5F5F5] outline-0 text-black "
                               placeholder="جستجوی دوره،  ..."/>
                    </div>
                    <div className="flex  flex-col ">
                        {
                            DataFILTER.map((item) => (
                                <CardCategoryCoursesPage data={item} key={item.id} selectedCourses={selectedCourses}
                                                         onSelectCourses={onSelectCourses}/>
                            ))
                        }

                    </div>
                </div>
        </div>
    );
}

export default PopupFilterCourses;