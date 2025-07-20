'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import DetailProducts from "@/Component/client/Template/DetailProducts";
import BASE_URL from "@/ApiBase/Base";
import LoadingOrError from "@/Component/client/module/LoadingOrError";

function Page() {
    const params = useParams();
    console.log(params)
    const productParams = params.productsId;

    const productId = productParams?.[0];
    const slug = productParams?.[1] || null;

    const numericProductId = Number(productId);
    if (isNaN(numericProductId)) {
        return <LoadingOrError message="شناسه محصول معتبر نیست." />;
    }


    const fetchProduct = async () => {
        try {
            const token = Cookies.get('token');
            const res = await axios.get(`${BASE_URL}/v1/products/${Number(productId)}`, {
                headers: token ? { Authorization: `Bearer ${token}` } : {}
            });
            return res.data.data.product;
        } catch (error) {
            throw new Error(error?.response?.data?.message || 'خطا در دریافت اطلاعات محصول');
        }
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ['product', productId],
        queryFn: fetchProduct,
    });

    if (isLoading) return <LoadingOrError message="لطفا کمی صبر کنید..." />;
    if (error) return <LoadingOrError message="خطا در دریافت اطلاعات محصول" />;
    if (!data) return <LoadingOrError message="سرعت اینترنت پایین است" />;

    return <DetailProducts data={data} slug={slug} />;
}

export default Page;
