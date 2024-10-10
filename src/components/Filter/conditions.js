"use client";

import Image from "next/image";
import arrow from "../../assets/down-arrow 1.svg";

import "./filter.css";

import { useState } from "react";

export default function ConditionsFilter({ cars }) {
    const [isDropOpen, setIsDropOpen] = useState(false);

    function dropOpen() {
        setIsDropOpen(!isDropOpen);
    }

    const carsCondition = cars.map((car) => car.status);

    const filteredCarsCondition = [...new Set(carsCondition)];

    console.log(filteredCarsCondition);

    return (
        <div className="filter-block">
            <h3 onClick={dropOpen}>
                Condition{" "}
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
                <div className="filter-input-group">
                    {filteredCarsCondition.map((condition) => (
                        <label>
                            <input type="checkbox" />
                            {condition}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
