import React from 'react';
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import {useCartStore} from "@/stores/cartStore";
import {toast, Toaster} from "sonner";

function CartShop() {

    const cartState = useCartStore(state => state);
    const RemoveITEM = useCartStore(state => state.RemoveITEM);
    console.log(cartState)

    const RemoveCart = (item) =>{
        RemoveITEM(item)
        toast.success("محصول از سبد خرید حذف شد..");
    }


    return (
        <div className="container mx-auto -mt-12 px-4 mb-10">
            <Toaster expand={true} position="top-center" richColors/>

            <span className="text-black font-bold text-[20px] sm:text-[24px]">سبد خرید شما</span>

            <div className="flex flex-col">
                {/* Header for desktop */}
                <div className="hidden md:flex w-full max-w-[812px] h-[54px] bg-[#756CBF] mt-10 rounded-t-xl items-center justify-between px-4">
                    <span className="text-white">محصول</span>
                    <div className="flex items-center justify-between w-[450px] text-white">
                        <span>قیمت</span>
                        <span>تعداد</span>
                        <span>قیمت کل</span>
                    </div>
                </div>

                {/* Header for mobile */}
                <div className="flex md:hidden bg-[#756CBF] w-full max-w-[812px] rounded-t-xl mt-10 p-4 flex-col text-white">
                    <div className="flex justify-start">
                        <span className="text-sm font-semibold">مشخصات محصول</span>
                    </div>
                    <div className="flex justify-between mt-4 text-sm">
                        <span>قیمت</span>
                        <span>تعداد</span>
                        <span>قیمت کل</span>
                    </div>
                </div>

                {/* Items */}
                <div className="flex flex-col items-center justify-between">
                    {cartState.selectedItems.map((item) => (
                        <div
                            key={item.id}
                            className="w-full max-w-[812px] border  border-b border-x border-slate-400 flex flex-col md:flex-row items-center justify-between px-4 py-4 md:h-[112px] last:rounded-b-xl"
                        >
                            {/* Product Image and Title */}
                            <div className="flex items-center w-full md:w-auto md:mr-5 mb-4 md:mb-0">
                                <Image
                                    className="w-[80px] h-[80px] object-cover rounded-xl shadow-lg"
                                    src={item.featured_image}
                                    alt="product"
                                    width={80}
                                    height={80}
                                />
                                <p className="text-black mr-5 w-full md:w-[150px] text-start mt-3 text-[14px] md:text-[12px] leading-5">
                                    {item.name}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="text-[#8C8C8C] text-[16px] mb-2 md:mb-0 md:mr-10 w-full md:w-auto text-right">
                                <span>{Number(item.price).toLocaleString('fa-IR')}تومان</span>
                            </div>

                            {/* Quantity and Delete */}
                            <div className="flex items-center justify-around border border-slate-400 w-full md:w-[87px] h-[42px] rounded-xl mb-2 md:mb-0 md:mr-20">
                                <span className="text-black font-bold cursor-pointer">+</span>
                                <p className="text-black font-bold ">{item.quantity}</p>
                                <span className="text-red-600 font-bold cursor-pointer" onClick={() =>RemoveCart(item.id)}>
                                    <MdDelete />
                                </span>
                            </div>

                            {/* Total Price */}
                            <div className="text-red-600 font-bold text-[14px] w-full md:w-auto text-right md:mr-20">
                                <span>{Number(item.price).toLocaleString('fa-IR')} تومان</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CartShop;
