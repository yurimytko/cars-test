"use client";
import "./timer.css";

import { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60 * 1000);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1000);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        return `${days} d : ${hours} h : ${minutes}m`;
    };

    return (
        <div>
            <h2 className="timer">{formatTime(timeLeft)}</h2>
        </div>
    );
};

export default CountdownTimer;
