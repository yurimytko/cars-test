import ContactForm from "../components/ContactForm/contact-from.js";
import Faq from "../components/FAQ/faq.js";
import HowItWorks from "../components/HowItWorks/how-it-works.js";
import MainContactForm from "../components/MainContactForm/main-contact-form.js";
import MainHeader from "../components/MainHeader/main-header.js";
import Price from "../components/Price/price.js";
import WhatIsIt from "../components/WhatIsIt/what-is-it.js";

export default function Home() {
    return (
        <>
            <MainHeader />
            <ContactForm />
            <main className="main_section">
                <HowItWorks />
                <WhatIsIt />
                <Price />
                <Faq />
                <MainContactForm />
            </main>
            <footer className="main-footer">
                Copyright © 2023 Car From USA Catalog. All rights reserved.
            </footer>
        </>
    );
}
