import React from 'react';
import CardBlogPage from "@/Component/client/module/CardBlogPage";
import NamePages from "@/Component/client/module/NamePages";

const DataBlog = [
    {id:1, image:"/image/imageBlog.jpg"},
    {id:2, image:"/image/imageBlog.jpg"},
    {id:3, image:"/image/imageBlog.jpg"},
    {id:4, image:"/image/imageBlog.jpg"},
    {id:5, image:"/image/imageBlog.jpg"},
]

function BlogPage(props) {
    return (
        <div className="container m-auto mt-16  mb-36">

           <NamePages image="/image/Group 1460.svg"/>

           <div className="flex flex-wrap items-center m-auto justify-center  md:justify-between mb-2 mt-10">
               {
                   DataBlog.map((item) =>(
                       <CardBlogPage key={item.id} data={item}/>
                   ))
               }
           </div>

        </div>
    );
}

export default BlogPage;