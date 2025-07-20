"use client"
import React, {useEffect} from 'react';
import NamePages from "@/Component/client/module/NamePages";
import CardProduct from "@/Component/client/module/CardProduct";
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";
import useProductStore from "@/stores/useProductStore";
import LoadingOrError from "@/Component/client/module/LoadingOrError";




function ProductPage(props) {
    const { products, loading, error, fetchProducts } = useProductStore()
console.log(products.data)

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container m-auto">
            <NamePages image="/image/Group 1459.svg"/>

            <div className=" flex items-center justify-between flex-wrap">
                <div className="flex mt-28 flex-wrap items-center">
                    {
                        loading ? (<LoadingOrError message="کمی صبر کنید.."/>) :(
                        products.data?.map((item) => (
                            <div key={item.id} className="mb-8 m-auto">
                            <CardProduct  data={item}/>
                            </div>
                        )))
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