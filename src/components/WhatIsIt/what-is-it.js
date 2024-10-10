import "./what-is-it.css";

import traffic from "../../assets/traffic 1.svg";
import hiring from "../../assets/hiring 1.svg";

import secure from "../../assets/secure-shield 1.svg";

import Image from "next/image";

export default function WhatIsIt() {
    return (
        <div id="what-is-it-for" className="what-is-it">
            <h2 className="what-is-it-heading">WHAT IS IT FOR</h2>
            <div className="what-is-ti-con">
                <div className="what-is-it-items">
                    <Image src={traffic.src} width={100} height={100} />
                    <h3>Increasing Traffic to Your Site</h3>
                    <p>
                        The catalog will be available for the Google search
                        engine.
                    </p>
                </div>
                <div className="what-is-it-items">
                    <Image src={hiring.src} width={100} height={100} />
                    <h3>Increase in Potential Customers</h3>
                    <p>People will apply directly from the catalog.</p>
                </div>
                <div className="what-is-it-items">
                    <Image src={secure.src} width={100} height={100} />
                    <h3>Increasing Trust in Your Company</h3>
                    <p>
                        After all, only the big ones companies have car
                        catalogs.
                    </p>
                </div>
            </div>
        </div>
    );
}
