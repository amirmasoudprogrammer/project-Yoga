import React from 'react';
import Image from "next/image";

function CartTeam({ data, isActive }) {
    const { name, job, image } = data;
    return (
        <div className={`w-[164px] h-[227px] md:w-[420px] md:h-[286px] ${
            isActive ? "bg-[#59518C] text-white" : "bg-white/50 border border-slate-200 shadow-lg text-black"
        } rounded-lg flex items-center flex-col justify-around transition-colors duration-300`}>
            <Image className="rounded-full shadow-lg" src={image} alt="image" width={120} height={120} />
            <p className="text-[16px] md:text-[20px] font-semibold">{name}</p>
            <span className="text-[14px] md:text-[16px]">{job}</span>
        </div>
    );
}


export default CartTeam;