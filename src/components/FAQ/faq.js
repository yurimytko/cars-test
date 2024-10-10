import FaqCard from "../FaqCard/faq-card";
import "./faq.css";

export default function Faq() {
    return (
        <div id="faq" className="faq-block">
            <h2 className="faq-heading">FAQ</h2>

            <FaqCard
                point={
                    "1. How often will the list of lots on my website be updated?"
                }
                descr={
                    "Updates every hour. That is why you are always on the site lots will be relevant."
                }
            />
            <FaqCard
                point={"2. From which auctions will I receive lots?"}
                descr={
                    "Updates every hour. That is why you are always on the site lots will be relevant."
                }
            />
            <FaqCard
                point={
                    "3. Is it possible to connect a calculator to the site so that people can do the math themselves auto?"
                }
                descr={
                    "Updates every hour. That is why you are always on the site lots will be relevant."
                }
            />
            <FaqCard
                point={"4. How will I receive applications?"}
                descr={
                    "Updates every hour. That is why you are always on the site lots will be relevant."
                }
            />
            <FaqCard
                point={"5. Where will applications come?"}
                descr={
                    "Updates every hour. That is why you are always on the site lots will be relevant."
                }
            />
            <FaqCard
                point={
                    "6. Can I make a notification on my phone if I have an application?"
                }
                descr={
                    "Updates every hour. That is why you are always on the site lots will be relevant."
                }
            />
            <FaqCard
                point={"7. Can I design the catalog myself the way I want?"}
                descr={
                    "Updates every hour. That is why you are always on the site lots will be relevant."
                }
            />
            <FaqCard
                point={
                    "8. What do you need to connect? And how long will it take?"
                }
                descr={
                    "Updates every hour. That is why you are always on the site lots will be relevant."
                }
            />
            <FaqCard
                point={
                    "9. If I take the Base tariff, will the catalog be visually different from my site?"
                }
                descr={
                    "Updates every hour. That is why you are always on the site lots will be relevant."
                }
            />
        </div>
    );
}
