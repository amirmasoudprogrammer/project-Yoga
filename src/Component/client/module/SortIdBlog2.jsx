import React from 'react';
import Image from "next/image";

function SortIdBlog2({item}) {
    return (
        <div
            className="mt-16 flex flex-col md:flex-row justify-start items-start border-b border-[#626262] pb-5">
            <div>
                <Image src={item.image_path} width={552} height={591} alt="image"/>
            </div>
            <div
                className="w-[360px] text-center m-auto md:text-start md:w-[509px] md:mr-10 text-[16px] mt-5">
                <div className=" flex flex-col md:items-start justify-start text-black">
                    <span className="font-medium">1.  تاریخچه‌ی ریکی </span>
                    <p>ریکی درمانی چیست؟
                        ریکی یک روش درمانی طبیعی و غیرتهاجمی است که با استفاده از انرژی زندگی
                        (چی یا
                        پرانا)
                        به
                        تعادل جسم، ذهن و روح کمک می‌کند. واژه‌ی "ریکی" از زبان ژاپنی گرفته شده و
                        به دو
                        بخش
                        تقسیم
                        می‌شود:
                        "ری" (Rei): انرژی کیهانی یا معنوی
                        "کی" (Ki): نیروی حیاتی که در تمام موجودات جاری است
                        در ریکی درمانی، درمانگر با قرار دادن دستان خود روی یا نزدیک به بدن فرد،
                        انرژی
                        مثبت
                        را
                        منتقل می‌کند تا فرآیند درمان طبیعی در بدن فعال شود..
                    </p>
                    <p>
                        تاریخچه‌ی ریکی
                        ریکی در اوایل قرن بیستم توسط دکتر میکائو اوسویی در ژاپن توسعه یافت.
                        اوسویی پس از
                        سال‌ها
                        مطالعه و مراقبه، سیستمی از انرژی درمانی را بنا نهاد که اکنون در سراسر
                        جهان
                        استفاده
                        می‌شود و شاخه‌های مختلفی مانند اوسویی ریکی، کارونا ریکی و ریکی تیبت
                        دارد.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SortIdBlog2;