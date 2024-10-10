import "./main-contact-form.css";

import macBook from "../../assets/Free_MacBook_Pro_1 1.svg";
import email from "../../assets/email (1) 2.svg";

import Image from "next/image";

export default function MainContactForm() {
    return (
        <div className="contact-form-block">
            <h3 className="contact-from-heading">STILL HAVE QUESTIONS?</h3>

            <div className="form-container">
                <Image src={macBook.src} width={100} height={100} />

                <form>
                    <h4 className="from-heading">
                        Fill out the application and we will contact you within
                        6 hours
                    </h4>

                    <div className="input-group">
                        <input
                            placeholder="Your Name"
                            className="contact-input"
                            name="name"
                        />
                        <input
                            placeholder="+1 (555) 555 1234"
                            className="contact-input"
                            name="phone"
                        />
                        <input
                            placeholder="Telegram"
                            className="contact-input"
                            name="telegram"
                        />
                    </div>

                    <button className="submit-form">
                        <Image src={email.src} width={100} height={100} />
                        SEND A REQUEST
                    </button>
                </form>
            </div>
        </div>
    );
}
