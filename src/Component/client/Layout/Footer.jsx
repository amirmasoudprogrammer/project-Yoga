import React from "react";
import Link from "next/link";
import Image from "next/image";
import {FaInstagram} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io5";
import {FaTelegramPlane} from "react-icons/fa";
import Navigation from "@/Component/client/Layout/Navigation";


function Footer() {
    return (
        <>
            <footer style={{backgroundImage: "url('/image/Rectangle 219.svg')"}}
                    className="hidden md:block w-full h-[392px] flex flex-col items-center overflow-hidden justify-center">
                <div className=" flex items-center justify-center mt-32 justify-center">

                    <div>
                        <h2 className="text-[16px] font-semibold ">دسترسی سریع</h2>
                        <ul className="text-[14px] ">
                            <div className="flex items-center mt-5">
                                <li className=""><Link href="#">درباره ما</Link></li>
                                <li className="mr-12"><Link href="#">ارتباط باما</Link></li>
                            </div>
                            <div className="flex items-center mt-5">
                                <li><Link href="#">ورود و ثبت‌نام</Link></li>
                                <li className="mr-5"><Link href="#">محصولات ما</Link></li>
                            </div>
                        </ul>
                    </div>


                    <div className="mr-20">
                        <h2 className="text-[16px] font-semibold mb-3">ارتباط با ما</h2>
                        <ul className="text-[14px] ">
                            <li className="mt-2">تلفن: 26372651 - 021</li>
                            <li className="mt-2">تلفن همراه: 09123456789</li>
                            <li className="mt-2">ایمیل: eliza@gmail.com</li>
                        </ul>
                    </div>


                    <div className="max-w-[400px] mr-20">
                        <h2 className="text-[16px] font-semibold mb-3">الیزا</h2>
                        <p className="text-[14px] leading-6">
                            مزون الیزا، یک شوروم لباس مجلسی و کژوال زنانه است که نزدیک به ۱۲ سال در زمینه مد و پوشاک
                            فعالیت
                            می‌کند و برای سلیقه مشتریانش ارزش زیادی قائل است.
                        </p>
                    </div>

                </div>
                <div className="flex items-center justify-evenly  m-auto mt-9 ">
                    <div className="flex items-center justify-between  ml-56 ">
                        <Image src="/image/Frame 108.png" alt="image" width={120} height={60}/>
                        <Image className="mr-5" src="/image/Frame 109.png" alt="image" width={120} height={60}/>
                    </div>
                    <div className="flex items-center justify-center relative -right-64   ">
                        <Link className="w-[34px] h-[34px] " href="">
                            <FaInstagram size="25"/>

                        </Link>
                        <Link className="mr-5 w-[34px] h-[34px]" href="">
                            <IoLogoWhatsapp size="25"/>


                        </Link>
                        <Link className="mr-5 w-[34px] h-[34px]" href="">
                            <FaTelegramPlane size="25"/>
                        </Link>
                    </div>

                </div>
            </footer>

            <footer
                style={{
                    backgroundImage: "url('/image/Rectangle 276.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
                className="block md:hidden w-full h-[691px] bg-cover bg-center flex flex-col items-start justify-center pb-[66px]"
            >
                <div
                    className="flex mt-28 items-center justify-center flex-col-reverse text-center text-white max-w-[1200px] w-full px-8">
                    <div className="flex items-center justify-between w-[300px]">
                        <div className="text-start">
                            <h2 className="text-[12px] font-semibold mb-5">ارتباط با ما</h2>
                            <ul className="text-[12px] ">
                                <li>تلفن: 26372651 - 021</li>
                                <li>تلفن همراه: 09123456789</li>
                                <li>ایمیل: eliza@gmail.com</li>
                            </ul>
                        </div>

                        <div className="mr-5 text-start">
                            <h2 className="text-[12px] font-semibold mb-5">دسترسی سریع</h2>
                            <ul className="text-[12px] ">
                                <div className="flex items-center mb-3">
                                    <li><Link href="#">درباره ما</Link></li>
                                    <li className="mr-5"><Link href="#">ارتباط باما</Link></li>
                                </div>
                                <div className="flex items-center">
                                    <li><Link href="#">ورود و ثبت‌نام</Link></li>
                                    <li className="mr-3"><Link href="#">محصولات ما</Link></li>
                                </div>
                            </ul>
                        </div>

                    </div>

                    <div className="max-w-[400px] mb-10">
                        <h2 className="text-[16px] font-semibold mb-3">الیزا</h2>
                        <p className="text-[14px] leading-6">
                            مزون الیزا، یک شوروم لباس مجلسی و کژوال زنانه است که نزدیک به ۱۲ سال در زمینه مد و پوشاک
                            فعالیت
                            می‌کند و برای سلیقه مشتریانش ارزش زیادی قائل است.
                        </p>
                    </div>

                </div>
                <div className="flex items-center justify-center flex-col-reverse m-auto">
                    <div className="flex items-center justify-between mt-10">
                        <Image src="/image/Frame 108.png" alt="image" width={120} height={60}/>
                        <Image className="mr-5" src="/image/Frame 109.png" alt="image" width={120} height={60}/>
                    </div>
                    <div className="flex items-center justify-center mt-10 border-b border-white w-[300px] pb-5">
                        <Link className="w-[34px] h-[34px] " href="">
                            <FaInstagram size="25"/>

                        </Link>
                        <Link className="mr-5 w-[34px] h-[34px]" href="">
                            <IoLogoWhatsapp size="25"/>


                        </Link>
                        <Link className="mr-5 w-[34px] h-[34px]" href="">
                            <FaTelegramPlane size="25"/>
                        </Link>
                    </div>

                </div>
            </footer>
            <Navigation/>
        </>
    );
}

export default Footer;
