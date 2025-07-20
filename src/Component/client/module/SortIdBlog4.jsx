import React from 'react';
import Image from "next/image";

function SortIdBlog4({item}) {
    return (
        <div className="mb-16 border-b border-slate-400 pb-6">
            <div className="flex items-center justify-center">
                <Image src={item.image_path} width={1000} height={591} alt="image"/>
            </div>
            <div className="mt-20 m-auto">
                <p className="text-black text-[12px] md:text-[14px] p-5 md:p-0">
                    {item.description}
                </p>
            </div>
        </div>

    );
}

export default SortIdBlog4;