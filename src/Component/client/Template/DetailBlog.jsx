"use client"
import React from 'react';
import {GrFormView} from "react-icons/gr";
import {motion} from 'framer-motion';
import Image from "next/image";

function DetailBlog(props) {
    return (
        <div className="container m-auto  mt-10">
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}
            >
                <div>
                    <div className="flex items-center justify-center">
                        <Image src="/image/imageBlog1.jpg" width={1224} height={719} alt="image"/>
                    </div>
                    <div>
                        <div className="border-b w-[312px] m-auto md:w-auto border-[#626262] flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-16 ">
                            <p className="text-black md:mb-5 text-center text-[12px] md:text-[16px] w-[210px] md:w-auto font-bold"></p>
                            <div className="flex items-center justify-between mt-5 w-full md:w-auto md:mt-0">
                            <span
                                className="text-[#626262] text-[12px] mr-2 md:mr-0 md:ml-60 mb-5 ">۵ دقیقه زمان خواندن</span>
                                <div className="flex items-center text-[#626262] mb-5 ml-2 md:ml-0">
                                    <GrFormView/>
                                    <span className="text-[#626262] text-[12px]">۲۰۰ بازدید</span>

                                </div>
                            </div>
                        </div>
                        <div className="flex text-[14px] m-auto w-[300px] md:w-auto md:text-lg flex-col items-start justify-between mt-5 md:mt-16 mr-6 md:mr-0">
                            <span className="text-black font-normal"></span>
                            <div className="flex flex-col items-start justify-start text-black">
                                <span className="font-medium">۱. ریکی درمانی چیست؟</span>
                                <p>
                                    ریکی درمانی چیست؟
                                    ریکی یک روش درمانی طبیعی و غیرتهاجمی است که با استفاده از انرژی زندگی (چی یا پرانا)
                                    به تعادل جسم، ذهن و روح کمک می‌کند. واژه‌ی "ریکی" از زبان ژاپنی گرفته شده و به دو
                                    بخش تقسیم می‌شود:
                                    "ری" (Rei): انرژی کیهانی یا معنوی
                                    "کی" (Ki): نیروی حیاتی که در تمام موجودات جاری است
                                    در ریکی درمانی، درمانگر با قرار دادن دستان خود روی یا نزدیک به بدن فرد، انرژی مثبت
                                    را منتقل می‌کند تا فرآیند درمان طبیعی در بدن فعال شود.
                                </p>
                                <p>
                                    ریکی چطور انجام می‌شود؟
                                    در طول یک جلسه ریکی، فرد معمولاً روی تخت دراز می‌کشد و لباس کامل دارد. درمانگر
                                    دست‌های خود را بر روی نقاط خاصی از بدن قرار می‌دهد یا کمی بالاتر نگه می‌دارد. برخی
                                    از افراد گرما، لرزش یا احساس سبکی را تجربه می‌کنند. هدف این است که انرژی بدن دوباره
                                    در جریان طبیعی خودش قرار گیرد.
                                </p>
                                <p>
                                    چه کسانی می‌توانند از ریکی بهره ببرند؟
                                    ریکی برای همه افراد در هر سنی مناسب است – از کودکان گرفته تا سالمندان. حتی در برخی
                                    بیمارستان‌ها از ریکی به عنوان درمان مکمل در کنار داروهای شیمی‌درمانی، جراحی و
                                    درمان‌های روان‌درمانی استفاده می‌شود.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row justify-start items-start border-b border-[#626262] pb-5">
                    <div>
                        <Image src="/image/imageBlog2.png" width={552} height={591} alt="image"/>
                    </div>
                    <div className="w-[360px] text-center m-auto md:text-start md:w-[509px] md:mr-10 text-[16px] mt-5">
                        <div className=" flex flex-col md:items-start justify-start text-black">
                            <span className="font-medium">1.  تاریخچه‌ی ریکی </span>
                            <p>ریکی درمانی چیست؟
                                ریکی یک روش درمانی طبیعی و غیرتهاجمی است که با استفاده از انرژی زندگی (چی یا پرانا) به
                                تعادل جسم، ذهن و روح کمک می‌کند. واژه‌ی "ریکی" از زبان ژاپنی گرفته شده و به دو بخش تقسیم
                                می‌شود:
                                "ری" (Rei): انرژی کیهانی یا معنوی
                                "کی" (Ki): نیروی حیاتی که در تمام موجودات جاری است
                                در ریکی درمانی، درمانگر با قرار دادن دستان خود روی یا نزدیک به بدن فرد، انرژی مثبت را
                                منتقل می‌کند تا فرآیند درمان طبیعی در بدن فعال شود..
                            </p>
                            <p>
                                تاریخچه‌ی ریکی
                                ریکی در اوایل قرن بیستم توسط دکتر میکائو اوسویی در ژاپن توسعه یافت. اوسویی پس از سال‌ها
                                مطالعه و مراقبه، سیستمی از انرژی درمانی را بنا نهاد که اکنون در سراسر جهان استفاده
                                می‌شود و شاخه‌های مختلفی مانند اوسویی ریکی، کارونا ریکی و ریکی تیبت دارد.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="flex flex-col-reverse md:flex-row justify-between mt-16 border-[#626262] border-b pb-5 mr-2 ml-2 md:ml-0 md:mr-0 mb-36 pb-10">

                <div className="flex flex-col md:w-[640px] ">
                    <span className="font-medium text-black text-[14px] ">
ریکی درمانی چیست؟
ریکی یک روش درمانی طبیعی و غیرتهاجمی است که با استفاده از انرژی زندگی (چی یا پرانا) به تعادل جسم، ذهن و روح کمک می‌کند. واژه‌ی "ریکی" از زبان ژاپنی گرفته شده و به دو بخش تقسیم می‌شود:
"ری" (Rei): انرژی کیهانی یا معنوی
"کی" (Ki): نیروی حیاتی که در تمام موجودات جاری است
در ریکی درمانی، درمانگر با قرار دادن دستان خود روی یا نزدیک به بدن فرد، انرژی مثبت را منتقل می‌کند تا فرآیند درمان طبیعی در بدن فعال شود.                </span>
                     <br/>
                    <span className="font-medium text-black text-[14px] ">
ریکی درمانی چیست؟
ریکی یک روش درمانی طبیعی و غیرتهاجمی است که با استفاده از انرژی زندگی (چی یا پرانا) به تعادل جسم، ذهن و روح کمک می‌کند. واژه‌ی "ریکی" از زبان ژاپنی گرفته شده و به دو بخش تقسیم می‌شود:
"ری" (Rei): انرژی کیهانی یا معنوی
"کی" (Ki): نیروی حیاتی که در تمام موجودات جاری است
در ریکی درمانی، درمانگر با قرار دادن دستان خود روی یا نزدیک به بدن فرد، انرژی مثبت را منتقل می‌کند تا فرآیند درمان طبیعی در بدن فعال شود.                </span>
                     <br/>
                    <p className="font-medium text-black text-[14px] ">
                        ریکی درمانی چیست؟
                        ریکی یک روش درمانی طبیعی و غیرتهاجمی است که با استفاده از انرژی زندگی (چی یا پرانا) به تعادل
                        جسم،
                        ذهن و روح کمک می‌کند. واژه‌ی "ریکی" از زبان ژاپنی گرفته شده و به دو بخش تقسیم می‌شود:
                        "ری" (Rei): انرژی کیهانی یا معنوی
                        "کی" (Ki): نیروی حیاتی که در تمام موجودات جاری است
                        در ریکی درمانی، درمانگر با قرار دادن دستان خود روی یا نزدیک به بدن فرد، انرژی مثبت را منتقل
                        می‌کند
                        تا فرآیند درمان طبیعی در بدن فعال شود. </p>
                </div>

               <div className="mb-16">
                   <Image src="/image/imgblog3.png" width={552} height={591} alt="تصویر"/>
               </div>

            </div>

            <div className="mb-16 border-b border-slate-400 pb-6">
                <div className="flex items-center justify-center">
                    <Image src="/image/imgblog4.png" width={1000} height={591} alt="image"/>
                </div>
                <div className="mt-20 m-auto">
                    <p className="text-black text-[12px] md:text-[14px] p-5 md:p-0">
                        ریکی درمانی چیست؟
                        ریکی یک روش درمانی طبیعی و غیرتهاجمی است که با استفاده از انرژی زندگی (چی یا پرانا) به تعادل جسم، ذهن و روح کمک می‌کند. واژه‌ی "ریکی" از زبان ژاپنی گرفته شده و به دو بخش تقسیم می‌شود:
                        "ری" (Rei): انرژی کیهانی یا معنوی
                        "کی" (Ki): نیروی حیاتی که در تمام موجودات جاری است
                        در ریکی درمانی، درمانگر با قرار دادن دستان خود روی یا نزدیک به بدن فرد، انرژی مثبت را منتقل می‌کند تا فرآیند درمان طبیعی در بدن فعال شود.
                    </p>
                </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row justify-start items-start pb-5">
                <div>
                    <Image src="/image/imageBlog2.png" width={552} height={591} alt="image"/>
                </div>
                <div className="w-[360px] text-center m-auto md:text-start md:w-[509px] md:mr-10 text-[16px] mt-5">
                    <div className=" flex flex-col md:items-start justify-start text-black">
                        <span className="font-medium">1.  تاریخچه‌ی ریکی </span>
                        <p>ریکی درمانی چیست؟
                            ریکی یک روش درمانی طبیعی و غیرتهاجمی است که با استفاده از انرژی زندگی (چی یا پرانا) به
                            تعادل جسم، ذهن و روح کمک می‌کند. واژه‌ی "ریکی" از زبان ژاپنی گرفته شده و به دو بخش تقسیم
                            می‌شود:
                            "ری" (Rei): انرژی کیهانی یا معنوی
                            "کی" (Ki): نیروی حیاتی که در تمام موجودات جاری است
                            در ریکی درمانی، درمانگر با قرار دادن دستان خود روی یا نزدیک به بدن فرد، انرژی مثبت را
                            منتقل می‌کند تا فرآیند درمان طبیعی در بدن فعال شود..
                        </p>
                        <p>
                            تاریخچه‌ی ریکی
                            ریکی در اوایل قرن بیستم توسط دکتر میکائو اوسویی در ژاپن توسعه یافت. اوسویی پس از سال‌ها
                            مطالعه و مراقبه، سیستمی از انرژی درمانی را بنا نهاد که اکنون در سراسر جهان استفاده
                            می‌شود و شاخه‌های مختلفی مانند اوسویی ریکی، کارونا ریکی و ریکی تیبت دارد.
                        </p>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default DetailBlog;