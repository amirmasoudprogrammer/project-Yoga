import React from 'react';
import {BiCategory} from "react-icons/bi";

function PopupCategoryCourses({DataCategory, onSelectCategory, selectCategory}) {
    return (
        <div className="fixed inset-0 z-[70] bg-white">
            <div className="w-[370px] h-[56px] bg-[#756CBF] flex items-center justify-center rounded-t-xl  m-auto relative top-72 bottom-0">
                <span>
                      <BiCategory/>
                </span>
                <span className="font-bold mr-2">مرتب سازی</span>
            </div>
            <div className="relative w-[370px] h-[240px] bg-white top-72 mt-2 flex items-center justify-between m-auto flex-col" >
                {DataCategory.map((item) =>(
                    <div onClick={() => onSelectCategory(item.title)} key={item.id} className="cursor-pointer w-[370px] h-[240px] pb-5 pt-5 border-b border-[#F5F5F5] flex items-center justify-center ">
                        <span  className={` ${selectCategory === item.title ? "text-[#CAACF2]" :"text-black"}    `}>{item.title}</span>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default PopupCategoryCourses;