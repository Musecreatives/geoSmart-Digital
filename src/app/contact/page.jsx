// pages/contact.jsx
"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from "./contact.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import ContactInfo from "@/components/contactInfo/contactInfo";

// Dynamically import the LeafletMap component (no SSR)
const LeafletMap = dynamic(() => import('@/components/map/LeafletMap'), { ssr: false });

const ContactPage = () => {
    return (
        <main className={styles.main_container}>
            <header>
                <div className={styles.heading_content}>
                    <h1>Contact Us</h1>
                    <p>Got any questions about us and our projects and programs? We’re here to help and assist you.</p>
                </div>
            </header>
            {/* Contact form and map */}
            <div className={styles.form_and_map_container}>
                <div className={styles.form_content}>
                    <ContactForm />
                    <ContactInfo />
                </div>
                <div className={styles.map_content}>
                    {/* Dynamically loaded LeafletMap */}
                    <LeafletMap />
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
