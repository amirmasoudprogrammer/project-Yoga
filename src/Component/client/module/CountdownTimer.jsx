import React, {useEffect} from "react";

const CountdownTimer = ({ time, setTime, onResend }) => {
    useEffect(() => {
        if (time <= 0) return;

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-black text-3xl">{formatTime(time)}</h1>
            {time <= 0 && (
                <button
                    onClick={onResend}
                    className="mt-4 text-[#3083FF] font-bold underline"
                >
                    ارسال دوباره کد
                </button>
            )}
        </div>
    );
};

export default CountdownTimer;
