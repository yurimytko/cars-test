"use client";

import Image from "next/image";
import arrow from "../../assets/down-arrow 1.svg";

import "./filter.css";

import { useState } from "react";

import ReactSlider from "react-slider";

export default function OdometerFilter() {
    const min = 10000;
    const max = 90000;

    const [value, setValue] = useState([min, max]);

    const [isDropOpen, setIsDropOpen] = useState(false);

    function dropOpen() {
        setIsDropOpen(!isDropOpen);
    }
    return (
        <div className="filter-block">
            <h3 onClick={dropOpen}>
                Odometer{" "}
                <Image
                    style={{
                        transform: isDropOpen
                            ? "rotate(0deg)"
                            : "rotate(-90deg)",
                    }}
                    src={arrow.src}
                    width={100}
                    height={100}
                />
            </h3>
            {isDropOpen && (
                <div className="range-input-con">
                    <div className="number-input-con">
                        <input
                            placeholder="1000"
                            className="number-input"
                            type="text"
                            value={value[0]}
                        />
                        <input
                            placeholder="1000"
                            className="number-input"
                            type="text"
                            value={value[1]}
                        />
                    </div>
                    <ReactSlider
                        className="slider"
                        onChange={setValue}
                        value={value}
                        min={min}
                        max={max}
                    />
                </div>
            )}
        </div>
    );
}
