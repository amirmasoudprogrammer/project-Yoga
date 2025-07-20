"use client"
import React from 'react';
import Comments from "@/Component/admin/modules/Comments";
import {useQuery} from "@tanstack/react-query";
import LoadingOrError from "@/Component/client/module/LoadingOrError";
import axios from "axios";
import Cookies from "js-cookie";
import BASE_URL from "@/ApiBase/Base";

function Page(props) {
    const fetchComments = async () => {
        try {
            const token = Cookies.get('tokenAdmin');
            const res = await axios.get(`${BASE_URL}/v1/comments/all`,{
                headers: token ? { Authorization: `Bearer ${token}` } : {}
            });
            return res.data
        }catch (error) {
            throw new Error(error?.response?.data?.message || 'خطا در دریافت اطلاعات تیکت‌ها');

        }


    };

    const {data, error, isLoading} = useQuery({
        queryKey: ['comments'],
        queryFn: fetchComments
    });
    if (error) return <LoadingOrError message="خطا در سرور..."/>
    if (isLoading) return <LoadingOrError message="کمی صبرکنید ..."/>
console.log(data)

    return (
        <Comments data={data}/>
    );
}

export default Page;