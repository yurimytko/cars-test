import "./main-header.css";

import Image from "next/image";

import logoImg from "../../assets/PNG-7 1.svg";
import email from "../../assets/email (1) 1.svg";
import Link from "next/link";

export default function MainHeader() {
    return (
        <header className="main-header">
            <div className="top-header">
                <div className="logo">
                    <Image
                        src={logoImg.src}
                        alt="Logo"
                        width={250}
                        height={100}
                    />
                </div>
                <ul>
                    <li>
                        <a href="#how-it-works">HOW IT WORKS</a>
                    </li>
                    <li>
                        <a href="#what-is-it-for">WHAT IS IT FOR</a>{" "}
                    </li>
                    <li>
                        <a href="#price">PRICES</a>
                    </li>
                    <li>
                        <a href="#faq">FAQ</a>
                    </li>
                    <li>
                        <button>
                            <Image
                                src={email.src}
                                alt="Logo"
                                width={20}
                                height={20}
                            />
                            CONTACT US
                        </button>
                    </li>
                </ul>
            </div>
            <h1>Ready Catalog of Cars for Your Website</h1>
            <p>from Auto Auctions Copart and IAAI</p>

            <Link href="/catalog" className="link-to-demo">
                DEMO VERSION
            </Link>
        </header>
    );
}
