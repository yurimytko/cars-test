"use client";

import { useRef, useImperativeHandle, forwardRef } from "react";
import './contact-form.css'

const ContactForm = forwardRef(function ContactForm(props, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        },
    }));

    return (
        <div className="dialog-container">
        </div>
    );
});

export default ContactForm;
