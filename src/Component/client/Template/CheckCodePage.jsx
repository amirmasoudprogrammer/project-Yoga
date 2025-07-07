"use client"
import React, {useRef, useState} from 'react';
import CountdownTimer from "@/Component/client/module/CountdownTimer";
import Link from "next/link";

function CheckCodePage(props) {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const [time, setTime] = useState(2 * 60);


    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, ""); // فقط عدد بگیره
        if (!value) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // حرکت به اینپوت بعدی
        if (index < 5 && value) {
            inputRefs.current[index + 1]?.focus();
        }

        // اگر همه‌ی فیلدها پر شد، خودکار تایید کن
        if (newOtp.every((digit) => digit !== "")) {
            setTimeout(() => handleVerify(newOtp), 100);
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const newOtp = [...otp];
            if (otp[index]) {
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const handleResend = () => {
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
        setTime(2 * 60)
    };

    return (
        <>
            <div className="hidden md:flex items-center justify-between mt-24 mr-32">
                <div className="flex items-center justify-center flex-col bg-white w-[392px] h-[496px] border border-[#eeeeee] shadow-xl rounded-tl-[100px] rounded-br-[100px]">
                    <div className="mt-16 flex flex-col items-center justify-center ">
                        <div><CountdownTimer time={time} setTime={setTime} onResend={handleResend}/></div>
                        <span className="text-black mt-10">کد تایید ارسال شده به شماره 09302153874 را وارد.</span>
                    </div>
                    <div className="flex flex-row-reverse items-center justify-center mt-10 mb-14">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="text-black border border-[#CAACF2] rounded w-12 h-14 mx-1 text-center text-xl font-bold"
                            />
                        ))}
                    </div>
                    <Link href="" className="text-[#3083FF]">
                        ویرایش شماره
                    </Link>
                </div>
                <div>
                    <video
                        src="/video/3h78dQU68ONC5BKc5s.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                    />
                </div>
            </div>
            <div className="flex md:hidden items-center justify-between flex-col">
                <div className="m-auto">
                    <video
                        src="/video/3h78dQU68ONC5BKc5s.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-[360px] flex items-center justify-center flex-col h-[248px] border-2 border-[#eeeee] mt-10 rounded-t-2xl">
                    <div className=" flex flex-col items-center justify-center ">
                        <div><CountdownTimer time={time} setTime={setTime} onResend={handleResend}/></div>
                        <span className="text-black mt-5 text-[12px]">کد تایید ارسال شده به شماره 09302153874 را وارد.</span>
                    </div>
                    <div className="flex flex-row-reverse items-center justify-center mt-5 ">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="text-black border border-[#CAACF2] rounded w-12 h-14 mx-1 text-center text-xl font-bold"
                            />
                        ))}
                    </div>
                    <Link href="" className="text-[#3083FF] mt-5">
                        ویرایش شماره
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CheckCodePage;