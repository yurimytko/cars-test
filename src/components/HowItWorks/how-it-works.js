import resume from "../../assets/resume 1.svg";
import application from "../../assets/application 1.svg";
import design from "../../assets/Group.svg";
import Image from "next/image";
import "./how-it-works.css";

export default function HowItWorks() {
    return (
        <div id="how-it-works" className="how-it-works">
            <h2 className="how-it-works-heading">HOW IT WORKS</h2>
            <div className="how-it-works-con">
                <div className="how-it-works-item">
                    <Image src={resume.src} width={100} height={100} />
                    <h3>Submit an Application</h3>
                    <p>
                        We will contact you and tell you all the details, as
                        well as answer all your questions.
                    </p>
                </div>
                <div className="how-it-works-item">
                    <Image src={design.src} width={100} height={100} />
                    <h3>Design Adaptation</h3>
                    <p>
                        We adjusts the color of the catalog to your website
                        design, or makes a unique design for you.
                    </p>
                </div>
                <div className="how-it-works-item">
                    <Image src={application.src} width={100} height={100} />
                    <h3>Catalog Integration</h3>
                    <p>
                        The catalog appears on the subdomain of your site and
                        can accept applications customers.
                    </p>
                </div>
            </div>
        </div>
    );
}
