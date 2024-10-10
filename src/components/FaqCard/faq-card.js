"use client";

import { useState } from "react";

import "./faq-card.css";

export default function FaqCard({ point, descr }) {
    const [isCardOpen, setIsCardOpen] = useState(false);

    function openCard() {
        setIsCardOpen(!isCardOpen);
    }

    return (
        <div className="faq-card">
            <div onClick={openCard} className="card-point">
                <h3>{point}</h3>
                <span>+</span>
            </div>

            {isCardOpen && <div className="point-descr">{descr}</div>}
        </div>
    );
}
