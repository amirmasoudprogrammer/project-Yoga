import React from 'react';
import Image from "next/image";

function SortIdBlog5({item}) {
    return (
        <div className="mt-16 flex flex-col md:flex-row justify-start items-start pb-5">
            <div>
                <Image src={item.image_path} width={552} height={591} alt="image"/>
            </div>
            <div className="w-[360px] text-center m-auto md:text-start md:w-[509px] md:mr-10 text-[16px] mt-5">
                <div className=" flex flex-col md:items-start justify-start text-black">
                    {item.description}
                </div>
            </div>
        </div>
    );
}

export default SortIdBlog5;