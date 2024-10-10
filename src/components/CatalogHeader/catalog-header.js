import catalogLogo from "../../assets/PNG-4 1.svg";

import Image from "next/image";
import email from "../../assets/email (1) 1.svg";

import "./catalog-header.css";
import Link from "next/link";

export default function CatalogHeader() {
    return (
        <header className="catalog-header">
            <Link href="/" className="logo">
                <Image src={catalogLogo.src} width={400} height={400} />
            </Link>

            <button>
                <Image src={email.src} alt="Logo" width={20} height={20} />
                CONTACT US
            </button>
        </header>
    );
}
