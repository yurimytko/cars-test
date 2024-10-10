"use client";

import Image from "next/image";
import arrow from "../../assets/down-arrow 1.svg";
import "./filter.css";
import { useState } from "react";

export default function CarBrand({ cars, param }) {
    const [isDropOpen, setIsDropOpen] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);

    function dropOpen() {
        setIsDropOpen(!isDropOpen);
    }

    const filteredBrand = [...new Set(cars.map((car) => car.make))];

    const handleCheckboxChange = (brand) => {
        const newSelectedBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter((b) => b !== brand)
            : [...selectedBrands, brand];

        setSelectedBrands(newSelectedBrands);
        param(newSelectedBrands.length ? brand : "");
    };

    return (
        <div className="filter-block">
            <h3 onClick={dropOpen}>
                Car Brand{" "}
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

                    {filteredBrand.map((brand) => (
                        <label key={brand}>
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => handleCheckboxChange(brand)}
                            />
                            {brand}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
