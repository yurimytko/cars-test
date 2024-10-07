
import ContactForm from "../../comonents/ContactForm/contact-from.js";
import HowItWorks from "../../comonents/HowItWorks/how-it-works.js";
import MainHeader from "../../comonents/MainHeader/main-header.js";

export default function Home() {

  return (
    <>
      <MainHeader/>
      <ContactForm />
      <main className="main_section">
        <HowItWorks/>        
      </main>
    </>
  );
}
