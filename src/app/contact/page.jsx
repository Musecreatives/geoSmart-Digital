"use client";
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import styles from "./contact.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import ContactInfo from "@/components/contactInfo/contactInfo";

// Fix for missing marker icon
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
    iconUrl: '/leaflet/images/marker-icon.png',
    shadowUrl: '/leaflet/images/marker-shadow.png',
});

const markerIcon = new L.Icon({
    iconUrl: '/assets/icons/marker-icon.png',
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
});

const ContactPage = () => {
    const [isClient, setIsClient] = useState(false); // State to check if on client-side
    const position = [9.8965, 8.8583]; // Latitude and longitude of Jos, Plateau State, Nigeria

    useEffect(() => {
        setIsClient(true); // Component has mounted, we're on the client
    }, []);

    return (
        <main className={styles.main_container}>
            <header>
                <div className={styles.heading_content}>
                    <h1>Contact Us</h1>
                    <p>Got any questions about us and our projects and programs? We’re here to help and assist you.</p>
                </div>
            </header>
            {/* contact form and map */}
            <div className={styles.form_and_map_container}>
                <div className={styles.form_content}>
                    <ContactForm />
                    <ContactInfo />
                </div>
                <div className={styles.map_content}>
                    {/* Only render the MapContainer on the client */}
                    {isClient && (
                        <MapContainer
                            center={position}
                            zoom={15}
                            style={{ height: "700px", width: "100%" }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position} icon={markerIcon}>
                                <Popup>
                                    Km 11, Bukuru Express, Jos, Plateau State, Nigeria
                                </Popup>
                            </Marker>
                        </MapContainer>
                    )}
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
