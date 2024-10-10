"use client";

import Image from "next/image";
import arrow from "../../assets/down-arrow 1.svg";

import "./filter.css";

import { useState } from "react";

export default function AuctionType({ cars }) {
    const [isDropOpen, setIsDropOpen] = useState(false);

    function dropOpen() {
        setIsDropOpen(!isDropOpen);
    }

    const carsAuction = cars.map((car) => car.auction);

    const filteredCarsAuction = [...new Set(carsAuction)];

    return (
        <div className="filter-block">
            <h3 onClick={dropOpen}>
                Auction Type{" "}
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
                    {filteredCarsAuction.map((auction) => (
                        <label>
                            <input type="checkbox" />
                            {auction}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
