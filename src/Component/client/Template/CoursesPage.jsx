"use client"
import React, {useState} from 'react';
import NamePages from "@/Component/client/module/NamePages";
import CardPageCourses from "@/Component/client/module/CardPageCourses";
import CardCategoryCoursesPage from "@/Component/client/module/CardCategoryCoursesPage";
import {CiSearch} from "react-icons/ci";
import {MdKeyboardDoubleArrowLeft} from "react-icons/md";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {VscSettings} from "react-icons/vsc";
import {BiCategory} from "react-icons/bi";
import PopupFilterCourses from "@/Component/client/module/PopupFilterCourses";
import PopupCategoryCourses from "@/Component/client/module/PopupCategoryCourses";


const DataCoursesPage = [
    {
        id: 1,
        image: "/image/imageCoursesPage.png",
        title: "دوره جامع آموزش ریکی",
        description: "مدرس: فهیمه حسینعلی",
        price: " 9.000.000   "
    },
    {
        id: 2,
        image: "/image/imageCoursesPage.png",
        title: "دوره جامع آموزش ریکی",
        description: "مدرس: فهیمه حسینعلی",
        price: " 9.000.000   "
    },
    {
        id: 3,
        image: "/image/imageCoursesPage.png",
        title: "دوره جامع آموزش ریکی",
        description: "مدرس: فهیمه حسینعلی",
        price: " 9.000.000   "
    },
    {
        id: 4,
        image: "/image/imageCoursesPage.png",
        title: "دوره جامع آموزش ریکی",
        description: "مدرس: فهیمه حسینعلی",
        price: " 9.000.000   "
    },
    {
        id: 5,
        image: "/image/imageCoursesPage.png",
        title: "دوره جامع آموزش ریکی",
        description: "مدرس: فهیمه حسینعلی",
        price: " 9.000.000   "
    },
    {
        id: 6,
        image: "/image/imageCoursesPage.png",
        title: "دوره جامع آموزش ریکی",
        description: "مدرس: فهیمه حسینعلی",
        price: " 9.000.000   "
    },
    {
        id: 7,
        image: "/image/imageCoursesPage.png",
        title: "دوره جامع آموزش ریکی",
        description: "مدرس: فهیمه حسینعلی",
        price: " 9.000.000   "
    },
    {
        id: 8,
        image: "/image/imageCoursesPage.png",
        title: "دوره جامع آموزش ریکی",
        description: "مدرس: فهیمه حسینعلی",
        price: " 9.000.000   "
    },
    {
        id: 9,
        image: "/image/imageCoursesPage.png",
        title: "دوره جامع آموزش ریکی",
        description: "مدرس: فهیمه حسینعلی",
        price: " 9.000.000   "
    },
]
const DataFILTER = [
    {
        id: 1,
        title: "همه دوره‌ها",
        Number: 25
    },
    {
        id: 2,
        title: "دوره‌های آنلاین",
        Number: 25
    },
    {
        id: 3,
        title: "دوره‌های حضوری",
        Number: 25
    },
    {
        id: 4,
        title: "دوره‌های خصوصی",
        Number: 25
    },
    {
        id: 5,
        title: "دوره‌های تخصصی",
        Number: 25
    },


]

const DataCategory = [
    {id:1, title:"همه"},
    {id:2, title: "جدیدترین" },
    {id:3, title: "محبوب ترین" },
    {id:4, title: "پرفروش ترین" }
]

function CoursesPage(props) {
    const [selectedCourses, setSelectedCourses] = useState(null)
    const [selectCategory, setSelectCategory] = useState(null)
    const [popupFilter, setPopupFilter] = useState(false)
    const [popupCategory, setPopupCategory] = useState(false)

    const onSelectCourses = (title) => {
        setSelectedCourses(title)
        setPopupFilter(false)
    }
    const onSelectCategory = (title) =>{
        setSelectCategory(title)
        setPopupCategory(false)
    }

    return (
        <div>
            <NamePages image="/image/Group 1125.svg"/>


            <div className="hidden container m-auto mt-20 md:flex flex-col   ">
                <div className="flex items-center ">
                    <div
                        className="bg-[#F5F5F5]  border border-slate-300 w-[288px] h-[56px] flex items-center rounded-md">
                     <span className="mr-5">
                         <CiSearch color="black" size={20}/>
                     </span>
                        <input type="text" className=" bg-[#F5F5F5] outline-0 text-black "
                               placeholder="جستجوی دوره،  ..."/>
                    </div>
                    <div className="text-black w-[288px] h-[56px] mr-12 rounded">
                        <select className="w-[288px] h-[56px] border border-slate-300 rounded bg-[#F5F5F5]" name=""
                                id="">
                            <option value="all">همه</option>
                            <option value="all">جدیدترین</option>
                            <option value="all">محبوب ترین</option>
                            <option value="all">پرفروش ترین</option>
                        </select>
                    </div>
                </div>
                <div className="flex mt-10">
                    <div className="flex items-start justify-start flex-col -mt-5">
                        {
                            DataFILTER.map((item) => (
                                <CardCategoryCoursesPage data={item} key={item.id} selectedCourses={selectedCourses}
                                                         onSelectCourses={onSelectCourses}/>
                            ))
                        }

                    </div>
                    <div className=" flex items-center justify-center flex-wrap w-[80%] m-auto ">
                        {
                            DataCoursesPage.map((item) => (
                                <CardPageCourses key={item.id} data={item}/>
                            ))
                        }

                    </div>
                </div>
            </div>

            <div className="flex md:hidden container m-auto  items-center justify-center flex-col mt-10">
                <div className="flex items-center justify-center">
                    <div
                        onClick={() => setPopupFilter(!popupFilter)}
                        className="cursor-pointer flex items-center bg-[#F5F5F5] rounded-md justify-start text-black w-[148px] h-[48px] border border-slate-400">
                        <span className="mr-3">
                         <VscSettings/>
                        </span>
                        <span className="mr-2 font-bold">
                            فیلتر دوره‌ها
                        </span>
                    </div>
                    <div
                        onClick={() => setPopupCategory(!popupCategory)}
                        className="cursor-pointer flex items-center mr-5 bg-[#F5F5F5] rounded-md justify-start text-black w-[148px] h-[48px] border border-slate-400">
                        <span className="mr-3">
                   <BiCategory/>

                        </span>
                        <span className="mr-2 font-bold">
                           مرتب سازی
                        </span>
                    </div>
                </div>
                <div className="flex mt-10">
                    <div className=" flex items-center justify-center flex-wrap w-[80%] m-auto ">
                        {
                            DataCoursesPage.map((item) => (
                                <CardPageCourses key={item.id} data={item}/>
                            ))
                        }

                    </div>
                </div>
            </div>

            <div className="text-black flex items-center justify-center m-auto text-[18px] mb-10 mt-10">
                <span
                    className="w-[35px] h-[35px] border border-slate-400 flex items-center justify-center rounded-full mr-2 cursor-pointer"><MdKeyboardDoubleArrowRight/></span>
                <span
                    className="w-[35px] h-[35px] text-white border border-slate-400  flex items-center justify-center rounded-full mr-2 cursor-pointer bg-[#59518C]">1</span>
                <span
                    className="w-[35px] h-[35px] border border-slate-400  flex items-center justify-center rounded-full mr-2 cursor-pointer">2</span>
                <span
                    className="w-[35px] h-[35px] border border-slate-400  flex items-center justify-center rounded-full mr-2 cursor-pointer">3</span>
                <span
                    className="w-[35px] h-[35px] border border-slate-400  flex items-center justify-center rounded-full mr-2 cursor-pointer">4</span>
                <span
                    className="w-[35px] h-[35px] border border-slate-400  flex items-center justify-center rounded-full mr-2 cursor-pointer">5</span>
                <span
                    className="w-[35px] h-[35px] border border-slate-400  flex items-center justify-center rounded-full mr-2 cursor-pointer">6</span>
                <span
                    className="w-[35px] h-[35px] border border-slate-400 flex items-center justify-center rounded-full mr-2 cursor-pointer"><MdKeyboardDoubleArrowLeft/></span>

            </div>


            {
                popupFilter && (
                    <PopupFilterCourses popupFilter={popupFilter} setPopupFilter={setPopupFilter}
                                        DataFILTER={DataFILTER} onSelectCourses={onSelectCourses}
                                        selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses}/>
                )
            }
            {
                popupCategory && (
                    <PopupCategoryCourses DataCategory={DataCategory} onSelectCategory={onSelectCategory} selectCategory={selectCategory}/>
                )
            }
        </div>
    );
}

export default CoursesPage;