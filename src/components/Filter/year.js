"use client";

import Image from "next/image";
import arrow from "../../assets/down-arrow 1.svg";

import "./filter.css";

import { useState } from "react";

import ReactSlider from "react-slider";

export default function YearFilter() {
    const min = 1999;
    const max = 2024;

    const [value, setValue] = useState([min, max]);

    const [isDropOpen, setIsDropOpen] = useState(false);

    function dropOpen() {
        setIsDropOpen(!isDropOpen);
    }

    return (
        <div className="filter-block">
            <h3 onClick={dropOpen}>
                Year{" "}
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
                            placeholder={`${value[0]}`}
                            className="number-input"
                            type="text"
                        />
                        <input
                            placeholder={`${value[1]}`}
                            className="number-input"
                            type="text"
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
