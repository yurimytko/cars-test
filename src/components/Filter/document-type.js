"use client";

import Image from "next/image";
import arrow from "../../assets/down-arrow 1.svg";

import "./filter.css";

import { useState } from "react";

export default function DocumentType() {
    const [isDropOpen, setIsDropOpen] = useState(false);

    function dropOpen() {
        setIsDropOpen(!isDropOpen);
    }

    return (
        <div className="filter-block">
            <h3 onClick={dropOpen}>
                Document Type{" "}
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
                    <label>
                        <input type="checkbox" />
                        Copart
                    </label>
                    <label>
                        <input type="checkbox" />
                        IAAI
                    </label>
                </div>
            )}
        </div>
    );
}
