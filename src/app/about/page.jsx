"use client"; // Add this at the top of the file

import Image from "next/image";
import { useState, useEffect } from "react";
// styles
import styles from "./about.module.css";

// Import the Slider component
import MissionVisionSlider from "../../components/MissionVisionSlider/missionvisionslider";
import MissionCoreSection from "../../components/mission_vision_statement/missioncoresection";
// images
import ManagerImg from "../../../public/assets/imgs/manager-photo.png";
import BulbImg from "../../../public/assets/imgs/bulb.png";
import WritingImg from "../../../public/assets/imgs/writing.png";

const AboutPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: "/assets/imgs/about_us_banner.jpg",
            title: "About GeoSmart Digital Solutions",
            description:
                "At Geosmart Digital Solutions we empower individuals and organizations to harness the power of technology for informed decision-making and innovation.",
        },
        {
            image: "/assets/imgs/t&d3.png", // Replace with your second image path
            title: "Empowering through Technology",
            description:
                "We provide cutting-edge digital solutions and training that equip organizations and individuals with tools for smarter, data-driven decision-making.",
        },
    ];

    // Auto slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className={styles.container}>
            {/* Hero section with slider */}
            <div className={styles.sliderContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ""}`}
                    >
                        <div className={styles.textContent}>
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                        <div className={styles.imageContent}>
                            <Image src={slide.image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
                        </div>
                    </div>
                ))}

                {/* Navigation dots */}
                <div className={styles.dots}>
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>

            {/* Mission and Vision */}
            <MissionVisionSlider />
            {/* manager section */}
            <div className={styles.managerContainer}>
                <div className={styles.managerImgContainer}>
                    <Image src={ManagerImg} alt="Dr. Kehinde Ogunmola" fill />
                </div>
                <div className={styles.aboutManager}>
                    <div className={styles.heading}>
                        <h2>Dr. Kehinde Ogunmola</h2>
                        <p>Manager, GeoSmart Digitals</p>
                    </div>
                    <p className={styles.desc}>Frontend engineering is the art of creating visually appealing and user-friendly interfaces for web applications. In our Frontend Engineering course, you will learn the fundamentals of HTML, CSS, and JavaScript, along with modern frameworks like React and Angular.</p>
                    <div className={styles.readMoreBtn}>
                        <span>Read More</span>
                    </div>
                </div>
            </div>

            {/* vission and mission statement */}
            <MissionCoreSection />
        </div>
    );
};

export default AboutPage;
