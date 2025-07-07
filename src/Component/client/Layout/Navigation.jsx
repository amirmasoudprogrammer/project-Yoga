"use client";

import { useState, useRef, useEffect } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

const Navigation = () => {
    const [active, setActive] = useState(1);
    const [circleX, setCircleX] = useState(0);
    const itemRefs = useRef([]);

    const menuItems = [
        { name: "سبد خرید", icon: <CiShoppingBasket />, color: "bg-[#59518C]", link: "/" },
        { name: "خانه", icon: <AiOutlineHome />, color: "bg-[#59518C]", link: "/" },
        { name: "پروفایل", icon: <AiOutlineUser />, color: "bg-[#59518C]", link: "/" },
    ];

    useEffect(() => {
        if (itemRefs.current[active]) {
            const el = itemRefs.current[active];
            setCircleX(el.offsetLeft);
        }
    }, [active]);

    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <div className=" md:hidden flex justify-center items-center z-50 fixed bottom-0 left-0 right-0">
            <div className="relative w-[360px] h-[66px] bg-[#59518C] flex justify-center items-center rounded-t-3xl shadow-lg">
                <ul className="flex w-[170px] h-[58px] mb-8 rounded-full bg-white mt-8 items-center justify-center relative">
                    {menuItems.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className={`relative list-none  w-[50px] h-[50px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ${
                                active === index ? "text-black active" : "text-white"
                            }`}
                            onClick={() => handleClick(index)}
                        >
                            <span className="block text-2xl text-black z-10">{item.icon}</span>
                        </Link>
                    ))}

                    {/* دایره متحرک دقیق زیر آیکون فعال */}
                    <div
                        className={`absolute  w-[50px] h-[50px] ${menuItems[active].color} border-4 border-[#59518C] rounded-full transition-all duration-500`}
                        style={{ left: `${circleX}px` }}
                    ></div>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
