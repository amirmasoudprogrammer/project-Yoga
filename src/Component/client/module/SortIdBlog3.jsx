import React from 'react';
import Image from "next/image";

function SortIdBlog3({item}) {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between mt-16 border-[#626262] border-b pb-5 mr-2 ml-2 md:ml-0 md:mr-0 mb-36 pb-10">

            <div className="flex flex-col md:w-[640px] ">
                {item.description}
            </div>

            <div className="mb-16">
                <Image src={item.image_path} width={552} height={591} alt="تصویر"/>
            </div>

        </div>


    );
}

export default SortIdBlog3;