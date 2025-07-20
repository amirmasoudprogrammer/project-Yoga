"use client"
import React from 'react';
import DiscountsPage from "@/Component/admin/templates/DiscountsPage";
import {useQuery} from "@tanstack/react-query";
import LoadingOrError from "@/Component/client/module/LoadingOrError";
import axios from "axios";
import Cookies from "js-cookie";
import BASE_URL from "@/ApiBase/Base";

function Page(props) {
    const fetchBanners = async () => {
        try {
            const token = Cookies.get('tokenAdmin');
            const res = await axios.get(`${BASE_URL}/v1/admin/discounts`,{
                headers: token ? { Authorization: `Bearer ${token}` } : {}
            });
            return res.data;
        }catch (error) {
            throw new Error(error?.response?.data?.message || 'خطا در دریافت اطلاعات تیکت‌ها');
        }


    };

    const {data, error, isLoading} = useQuery({
        queryKey: ['discounts'],
        queryFn: fetchBanners
    });
    if (error) return <LoadingOrError message="خطا در سرور..."/>
    if (isLoading) return <LoadingOrError message="کمی صبرکنید ..."/>
    console.log(data)
    return (
        <DiscountsPage data={data}/>
    );
}

export default Page;