"use client"
import React from 'react';
import DetailBlog from "@/Component/client/Template/DetailBlog";
import {useParams} from "next/navigation";
import LoadingOrError from "@/Component/client/module/LoadingOrError";
import Cookies from "js-cookie";
import axios from "axios";
import BASE_URL from "@/ApiBase/Base";
import {useQuery} from "@tanstack/react-query";

function Page(props) {
    const params = useParams();
    const blogId = params.blogId?.[0]; // یا فقط params.blogId اگر معمولی باشه

    const numericBlogId = Number(blogId);
    if (isNaN(numericBlogId)) {
        return <LoadingOrError message="شناسه بلاگ معتبر نیست." />;
    }

    const fetchBlog = async () => {
        try {
            const token = Cookies.get('token');
            const res = await axios.get(`${BASE_URL}/v1/blog/${numericBlogId}`, {
                headers: token ? { Authorization: `Bearer ${token}` } : {}
            });
            return res.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || 'خطا در دریافت اطلاعات بلاگ');
        }
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ['blog', blogId],
        queryFn: fetchBlog,
    });

    if (isLoading) return <LoadingOrError message="لطفا کمی صبر کنید..." />;
    if (error) return <LoadingOrError message="خطا در دریافت اطلاعات بلاگ" />;
    if (!data) return <LoadingOrError message="سرعت اینترنت پایین است" />;

    return (
        <DetailBlog data={data}/>
    );
}

export default Page;