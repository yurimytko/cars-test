"use client";

import filter from "@/assets/adjust 1.svg";
import close from "@/assets/close 1.svg";

import Image from "next/image";
import AuctionType from "@/components/Filter/auction-type";

import YearFilter from "@/components/Filter/year";
import OdometerFilter from "@/components/Filter/odometr";
import CarBrand from "@/components/Filter/car-brand";
import CarModel from "@/components/Filter/car-model";
import ConditionsFilter from "@/components/Filter/conditions";

import DocumentType from "@/components/Filter/document-type";

import "./filter-block.css";

import { useEffect, useState } from "react";

export default function FilterBlock({ cars, param, model }) {
    const [isFilterOpen, setFilterOpen] = useState(true);

    function openFilter() {
        if (window.innerWidth <= 748) {
            setFilterOpen(true);
        } else {
            setFilterOpen(true);
        }
    }

    useEffect(() => {
        if (window.innerWidth <= 748) {
            setFilterOpen(false);
        } else {
            setFilterOpen(true);
        }
    }, []);

    function closeFilter() {
        setFilterOpen(false);
    }

    return (
        <>
            <div className="filter-btn" onClick={openFilter}>
                <span>
                    <Image src={filter.src} width={25} height={25} /> SEARCH BY
                    PARAMETERS
                </span>
            </div>
            <section
                className="filter-con"
                style={{ display: isFilterOpen ? "block" : "none" }}
            >
                <div className="search-by-params">
                    <span>
                        <Image src={filter.src} width={25} height={25} /> SEARCH
                        BY PARAMETERS
                    </span>
                    <Image
                        src={close.src}
                        width={25}
                        height={25}
                        onClick={closeFilter}
                    />
                </div>
                <AuctionType cars={cars} />
                <YearFilter />
                <OdometerFilter />
                <CarBrand param={param} cars={cars} />
                <CarModel modelFc={model} cars={cars} />
                <ConditionsFilter cars={cars} />
                <DocumentType />
            </section>
        </>
    );
}
