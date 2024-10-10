import "./price-card.css";

export default function PriceCard({
    titel,
    price,
    point1,
    point2,
    point3,
    point4,
    point5,
}) {
    return (
        <div className="plan-card">
            <h3>{titel}</h3>
            <p className="price">${price}</p>
            <p className="per-month">per month</p>
            <ul>
                <li>
                    <span className="plan-point">First Payment:</span>
                    <span className="plan-point-value">{point1}</span>
                </li>
                <li>
                    <span className="plan-point">Unique Design:</span>
                    <span className="plan-point-value">{point2}</span>
                </li>
                <li>
                    <span className="plan-point">History of Car Sales:</span>
                    <span className="plan-point-value">{point3}</span>
                </li>
                <li>
                    <span className="plan-point">Google Indexing:</span>
                    <span className="plan-point-value">{point4}</span>
                </li>
                <li>
                    <span className="plan-point">
                        Lot Removal After Bidding:
                    </span>
                    <span className="plan-point-value">{point5}</span>
                </li>
            </ul>
            <button>ORDER PLAN</button>
        </div>
    );
}
