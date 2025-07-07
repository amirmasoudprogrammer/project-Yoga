import React from 'react';
import NamePages from "@/Component/client/module/NamePages";

import CardProduct from "@/Component/client/module/CardProduct";
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";

const dataProducts = [
    {
        id: 1,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },
    {
        id: 2,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },
    {
        id: 3,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },
    {
        id: 4,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },
    {
        id: 5,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },
    {
        id: 6,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },
    {
        id: 7,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },
    {
        id: 8,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },
    {
        id: 9,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },
    {
        id: 10,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },
    {
        id: 11,
        image: "/image/product1.jpg",
        title: "دستگاه بخور ",
        description: "ستگاه بخور صورت مدل [مدل دستگاه]، یک انتخاب ایده‌آل برای داشتن پوستی شفاف، مرطوب و سالم است",
        price: "500.000"
    },

]


function ProductPage(props) {
    return (
        <div className="container m-auto">
            <NamePages image="/image/Group 1459.svg"/>

            <div className=" flex items-center justify-between flex-wrap">
                <div className="flex mt-28 flex-wrap items-center">
                    {
                        dataProducts.map((item) => (
                            <div key={item.id} className="mb-8 m-auto">
                            <CardProduct  data={item}/>
                            </div>
                        ))
                    }
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

        </div>
    );
}

export default ProductPage;