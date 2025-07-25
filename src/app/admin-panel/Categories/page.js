"use client"
import React from 'react';
import CategoriesPage from "@/Component/admin/templates/CategoriesPage";
import LoadingOrError from "@/Component/client/module/LoadingOrError";
import {useQuery} from "@tanstack/react-query";
import Cookies from "js-cookie";
import axios from "axios";
import BASE_URL from "@/ApiBase/Base";

function Page(props) {
    const fetchBanners = async () => {
        try {
            const token = Cookies.get('tokenAdmin');
            const res = await axios.get(`${BASE_URL}/v1/admin/categories`,{
                headers: token ? { Authorization: `Bearer ${token}` } : {}
            });
            return res.data;
        }catch (error) {
            throw new Error(error?.response?.data?.message || 'خطا در دریافت اطلاعات تیکت‌ها');

        }


    };

    const {data, error, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: fetchBanners
    });
    if (error) return <LoadingOrError message="خطا در سرور..."/>
    if (isLoading) return <LoadingOrError message="کمی صبرکنید ..."/>
    return (
        <CategoriesPage data={data}/>
    );
}

export default Page;