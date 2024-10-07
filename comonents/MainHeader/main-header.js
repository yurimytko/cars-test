
import './main-header.css'

import Image from 'next/image';

import logoImg from "../../assests/PNG-7 1.svg"
import email from '../../assests/email (1) 1.svg'

export default function MainHeader() {
  return (
    <header className="main-header">
      <div className="top-header">
        <div className = "logo">
            <Image src={logoImg.src} alt="Logo" width={250} height={100}/>
        </div>
        <ul>
            <li><a href="#how-it-works">HOW IT WORKS</a></li>
            <li>WHAT IS IT FOR</li>
            <li>PRICES</li>
            <li>FAQ</li>
            <li>
                <button><Image src={email.src} alt="Logo" width={20} height={20}/>CONTACT US</button>
                <div className="language">EN</div>
            </li>

        </ul>
      </div>
      <h1>Ready Catalog of Cars 
      for Your Website</h1>
      <p>from Auto Auctions Copart and IAAI</p>

      <div className="link-to-demo">DEMO VERSION</div>
    </header>
  );
}