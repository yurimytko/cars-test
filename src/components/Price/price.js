import PriceCard from "../PriceCard/price-card";
import "./price.css";

export default function Price() {
    return (
        <div id="price" className="price-block">
            <h2 className="price-heading">SERVICE PRICES</h2>

            <div className="palns-con">
                <PriceCard
                    titel={"Base"}
                    price={"150"}
                    point1={"No"}
                    point2={"No"}
                    point3={"No"}
                    point4={"Yes"}
                    point5={"Yes"}
                />
                <PriceCard
                    titel={"Profi"}
                    price={"150"}
                    point1={"$1000"}
                    point2={"Yes"}
                    point3={"No"}
                    point4={"Yes"}
                    point5={"Yes"}
                />
                <PriceCard
                    titel={"Business"}
                    price={"500"}
                    point1={"Custom"}
                    point2={"Yes"}
                    point3={"Yes"}
                    point4={"Yes"}
                    point5={"No"}
                />
            </div>
        </div>
    );
}
