"use client";

import calendar from "@/assets/Vector.svg";
import info from "@/assets/info 1.svg";
import wheel from "@/assets/steering-wheel (6) 1.svg";

import cars from "@/assets/used-cars-at-car-mart 1.svg";

import CatalogHeader from "@/components/CatalogHeader/catalog-header";
import "./catalog-slug.css";

import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import CountdownTimer from "@/components/Timer/timer";

import accident from "../../../assets/accident 1.svg";

export default function CatalogSlug({ params }) {
    const [carData, setCarData] = useState([]);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const getCars = async () => {
            const res = await fetch(`/api/cars?lot-id=${params.catalogSlug}`);
            if (!res.ok) {
                console.error("Failed to fetch cars:", res.statusText);
                return;
            }
            const lots = await res.json();

            console.log(lots.cars[0]);

            setCarData(lots.cars[0]);
        };
        getCars();
    }, []);

    const imageCount = windowWidth <= 748 ? 3 : 5;

    return (
        <>
            <CatalogHeader />
            <main className="catalog-slug-main">
                <h1 className="car-name">{carData?.title}</h1>
                <div className="slug-top">
                    <div className="imgs-con">
                        <div className="img-preview">
                            {carData?.images && carData.images.length > 0 && (
                                <Image
                                    className="car-slug-image"
                                    src={carData.images[0]}
                                    width={1000}
                                    height={1000}
                                />
                            )}
                        </div>
                        <div className="image-carousel">
                            {carData?.images &&
                                carData.images.length > 0 &&
                                carData.images
                                    .slice(0, imageCount)
                                    .map((image, index) => (
                                        <Image
                                            key={index} // Add a unique key for each image
                                            className="carousel-img"
                                            src={image}
                                            width={500}
                                            height={500}
                                        />
                                    ))}
                        </div>
                    </div>
                    <div className="info-con">
                        <div className="price-con">
                            <div className="date-block">
                                <span className="date">
                                    <Image
                                        src={calendar.src}
                                        width={100}
                                        height={100}
                                    />
                                    25.09.2023
                                </span>
                                <CountdownTimer />
                            </div>
                            <span className="price">
                                ${carData?.cost_priced}
                                <p className="current-value">Current value</p>
                            </span>

                            <div className="car-btn-group">
                                <button className="buy">ORDER A CAR</button>
                                <button className="buy-now">
                                    ${carData?.cost_priced} <p>BUY IT NOW</p>
                                </button>
                            </div>
                        </div>
                        <div className="damage-imfo">
                            <h3>
                                Damage info:{" "}
                                <Image
                                    src={accident.src}
                                    width={25}
                                    height={25}
                                />
                            </h3>
                            <ul>
                                <li>
                                    <span>Loss:</span>{" "}
                                    <span className="damage-point-value">
                                        {carData?.loss}
                                    </span>
                                </li>
                                <li>
                                    <span>Primary Damage:</span>{" "}
                                    <span className="damage-point-value">
                                        {carData?.damage_first}
                                    </span>
                                </li>
                                <li>
                                    <span>Secondary Damage:</span>{" "}
                                    <span className="damage-point-value">
                                        {carData?.damage_second === null
                                            ? "-"
                                            : carData?.damage_second}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="car-info-block">
                    <div className="auction-info">
                        <h3>
                            Auction info:{" "}
                            <Image src={info.src} width={25} height={25} />
                        </h3>
                        <ul>
                            <li>
                                <span>VIN Code:</span>{" "}
                                <span className="damage-point-value">
                                    {carData?.vin}
                                </span>
                            </li>
                            <li>
                                <span>Lot ID:</span>{" "}
                                <span className="damage-point-value">
                                    {carData?.lot_id}
                                </span>
                            </li>
                            <li>
                                <span>State:</span>{" "}
                                <span className="damage-point-value">
                                    {carData?.state}
                                </span>
                            </li>
                            <li>
                                <span>Location:</span>{" "}
                                <span className="damage-point-value">
                                    {carData?.location}
                                </span>
                            </li>
                            <li>
                                <span>Documet:</span>{" "}
                                <span className="damage-point-value">
                                    {carData?.document}
                                </span>
                            </li>
                            <li>
                                <span>Seller:</span>{" "}
                                <span className="damage-point-value">
                                    {carData?.seller}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="vehicle-info">
                        <h3>
                            Vehicle info:{" "}
                            <Image src={wheel.src} width={25} height={25} />
                        </h3>
                        <ul>
                            <li>
                                <span>Odometer:</span>{" "}
                                <span className="damage-point-value">
                                    {carData?.odometer}
                                </span>
                            </li>
                            <li>
                                <span>Condition:</span>{" "}
                                <span className="damage-point-value">
                                    {carData?.status}
                                </span>
                            </li>
                            <li>
                                <span>Keys:</span>{" "}
                                <span className="damage-point-value">
                                    {carData?.keys}
                                </span>
                            </li>
                            <li>
                                <span>Engine Type:</span>{" "}
                                <span className="damage-point-value">
                                    {carData.fuel}, {carData?.engine}
                                </span>
                            </li>
                            <li>
                                <span>Transmission:</span>{" "}
                                <span className="damage-point-value">
                                    {carData?.transmission}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="description">
                    <h3>Description</h3>
                    <p className="descr-text">
                        {carData?.title} can be purchased at a US auction. The
                        company's managers CarLink will help you with the
                        application and safe delivery of the selected lot. We
                        will bring the car at the best price. We have our own
                        parking lots in ports. Therefore, the buyer receives a
                        guarantee of reliable storage of the vehicle and control
                        over the delivery of the car from the moment of purchase
                        to its delivery to the customer. Our manager will help
                        calculate: cost of a car with delivery; possible car
                        repair costs; amount of collateral; cost of brokerage
                        services; the amount of customs duties and payments when
                        registering a car. Our employees inspect the car on the
                        spot. Therefore, the buyer learns reliable information
                        about the car. And thanks to well-established logistics,
                        we will deliver the selected car quickly. Approximate
                        delivery times are suggested to be specified in
                        consultation with the company's manager CarLink.
                    </p>
                </div>
                <div className="need-help">
                    <div className="help-group">
                        <h3 className="help-heading">
                            Need help finding cars? <br />
                            Fill out the application and <br />
                            get a
                            <span className="red-text"> free consultation</span>
                            !
                        </h3>
                        <button className="help-form-btn">
                            Fill out the form
                        </button>
                    </div>
                    <Image src={cars.src} width={100} height={100} />
                </div>
            </main>
        </>
    );
}
