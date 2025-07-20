"use client"
import React, {useEffect, useState} from 'react';
import CardBlogPage from "@/Component/client/module/CardBlogPage";
import NamePages from "@/Component/client/module/NamePages";
import Cookies from "js-cookie";
import axios from "axios";
import BASE_URL from "@/ApiBase/Base";

const DataBlog = [
    {id:1, image:"/image/imageBlog.jpg"},
    {id:2, image:"/image/imageBlog.jpg"},
    {id:3, image:"/image/imageBlog.jpg"},
    {id:4, image:"/image/imageBlog.jpg"},
    {id:5, image:"/image/imageBlog.jpg"},
]

function BlogPage(props) {
    const [blog, setBlog] = useState([])

    const fetchBlog = async () => {
        try {
            const token = Cookies.get('token');
            const res = await axios.get(`${BASE_URL}/v1/blog`, {
                headers: token ? {Authorization: `Bearer ${token}`} : {}
            });
            setBlog(res.data.data)

        } catch (error) {
            console.error('خطا در گرفتن داده‌ها:', error);
        }
    };

    useEffect(() => {
        fetchBlog();
        const interval = setInterval(fetchBlog, 5000);
        return () => clearInterval(interval);
    }, []);

    console.log(blog)
    return (
        <div className="container m-auto mt-16  mb-36">

           <NamePages image="/image/Group 1460.svg"/>

           <div className="flex flex-wrap items-center m-auto justify-center  md:justify-between mb-2 mt-10">
               {
                   blog.map((item) =>(
                       <CardBlogPage key={item.id} data={item}/>
                   ))
               }
           </div>

        </div>
    );
}

export default BlogPage;