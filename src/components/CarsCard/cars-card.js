import Image from "next/image";

import calendar from "@/assets/Vector.svg";

import "./cars-card.css";
import Link from "next/link";
import CountdownTimer from "../Timer/timer";

export default function CarCard({ car }) {
    return (
        <div className="car-card">
            <Image
                className="car-img"
                src={car.images[0]}
                width={1000}
                height={1000}
            />
            <div className="info-block">
                <h2>{car.title}</h2>
                <div className="car-info">
                    <div className="left-info">
                        <span>
                            Condition: <p>{car.status}</p>
                        </span>
                        <span>
                            Location: <p>{car.location}</p>
                        </span>
                        <span>
                            Odometer: <p>{car?.odometer} miles</p>
                        </span>
                    </div>
                    <div className="right-info">
                        <span>
                            VIN Code: <p>{car.vin}</p>
                        </span>
                        <span>
                            Lot ID: <p>{car.lot_id}</p>
                        </span>
                        <span>
                            Damage: <p>{car.loss}</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="buy-con">
                <span className="date-car">
                    <Image src={calendar.src} width={500} height={500} />
                    25.09.2023
                </span>
                <span className="car-price">
                    ${car.cost_priced}
                    <p className="current-value">Current value</p>
                </span>

                <div className="car-card-btn-group">
                    <Link href={`/catalog/${car.lot_id}`} className="buy">
                        BUY A CAR
                    </Link>
                    <button className="buy-now">
                        $4,200 <p>BUY NOW</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
