"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import axios from "axios";
import BASE_URL from "@/ApiBase/Base";

function BannerMain(props) {



    const fetchBanner = async () => {
        try {
            const token = Cookies.get('token');
            const res = await axios.get(`${BASE_URL}/banners/position/{1}`, {
                headers: token ? {Authorization: `Bearer ${token}`} : {}
            });
          console.log(res)

        } catch (error) {
            console.error('خطا در گرفتن داده‌ها:', error);
        }
    };

    useEffect(() => {
        fetchBanner();
        const interval = setInterval(fetchBanner, 5000);
        return () => clearInterval(interval);
    }, []);



    return (
        <Link href="" className="">
            <Image src="/image/Group 1458.png" alt="image" width={1440} height={792}/>
        </Link>
    );
}

export default BannerMain;