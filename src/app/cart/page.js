"use client"
import React from 'react';
import CartShop from "@/Component/client/Template/CartShop";
import useStepStore from "@/stores/useStepStore";
import ShippingInfo from "@/Component/client/Template/ShippingInfo";

function Page(props) {
    const {step} = useStepStore()
    return (
        <>
            {step === 1 && <CartShop/>}


        </>

    );
}

export default Page;