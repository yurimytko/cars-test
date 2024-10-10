"use client";

import Image from "next/image";
import arrow from "../../assets/down-arrow 1.svg";

import cancel from "../../assets/cancel 1.svg";

import "./filter.css";

import { useState } from "react";

export default function CarModel({ cars, model }) {
    const [isDropOpen, setIsDropOpen] = useState(false);

    function dropOpen() {
        setIsDropOpen(!isDropOpen);
    }

    const carsModel = cars.map((car) => car.model);

    const filteredCarsMOdel = [...new Set(carsModel)];

    return (
        <div className="filter-block">
            <h3 onClick={dropOpen}>
                Car Model{" "}
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
                    <input placeholder="Пошук" className="search" type="text" />

                    {filteredCarsMOdel.map((model) => (
                        <label>
                            <input type="checkbox" />
                            {model}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
