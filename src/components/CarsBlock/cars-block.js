"use client";

import CarCard from "../CarsCard/cars-card";

import { useState } from "react";

export default function CarsBlocK({ cars, searchByVin }) {
    const [searchValue, setSearchValue] = useState("");

    function handleChange(e) {
        setSearchValue(e.target.value);
        if (e.target.value === "") {
            searchByVin("");
        }
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            searchByVin(searchValue);
        }
    }
    return (
        <>
            <div className="top-car-con">
                <span className="top-point">
                    Search result:{" "}
                    <span className="cars-quantity"> {cars.length} cars</span>
                </span>

                <div className="search-and-sorting">
                    <input
                        placeholder="Search"
                        value={searchValue}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                    />
                    <span className="top-point">
                        Sorting:{" "}
                        <span className="log-created-date">
                            Lot created date ↑
                        </span>
                    </span>
                </div>
            </div>
            <div className="cars-block">
                {cars?.map((car) => (
                    <CarCard key={car.lot_id} car={car} />
                ))}
            </div>
        </>
    );
}
