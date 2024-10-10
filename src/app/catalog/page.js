"use client";

import { useEffect } from "react";
import { useState } from "react";

import "./catalog.css";

import CatalogHeader from "@/components/CatalogHeader/catalog-header";

import CarsBlocK from "@/components/CarsBlock/cars-block";
import FilterBlock from "@/components/FilterBlock/filter-block";

export default function CarCatalog() {
    const [carsData, setCarsData] = useState([]);
    const [param, setParam] = useState("");

    useEffect(() => {
        const getCars = async () => {
            const res = await fetch(`/api/cars?${param}`);
            if (!res.ok) {
                console.error("Failed to fetch cars:", res.statusText);
                return;
            }
            const lots = await res.json();

            setCarsData(lots.cars);
        };
        getCars();
    }, [param]);

    function setParamFc(param) {
        setParam(`make=${param}`);
    }

    function searchByVin(vin) {
        setParam(`vin=${vin}`);
    }

    function setParamFcBrand(param) {
        setParam((prevParam) => {
            if (!prevParam) {
                return `model=${param}`;
            }
            if (param === "") {
                return `model=`;
            }
            return `${prevParam}&model=${param}`;
        });
    }

    return (
        <>
            <CatalogHeader />

            <main className="catalog-main">
                <FilterBlock
                    param={setParamFc}
                    model={setParamFcBrand}
                    cars={carsData}
                />
                <section className="car-con">
                    <CarsBlocK searchByVin={searchByVin} cars={carsData} />
                </section>
            </main>
        </>
    );
}
