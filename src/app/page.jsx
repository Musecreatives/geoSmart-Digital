
'use client';
import Link from "next/link";
import Image from "next/image";
import TrainingAndDiplomas from '../../src/components/TrainingAndDiplomas/TrainingAndDiplomas';
import Testimonials from '../components/testimonial/Testimonial';
import CallToActionSection from '../components/call_to_action/Call_to_Action';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import HeroSlider from '../components/hero_slider/hero_slider';
// styles
import styles from "./home.module.css";
// img

import NasaLogo from "../../public/assets/icons/NASA.png";
import NGLogo from "../../public/assets/icons/coatofarm.png";
import NcrsLogo from "../../public/assets/brands/ncrs.png";
import SpaceXLogo from "../../public/assets/brands/spacex.png";



const HomePage = () => {


    return (
        <div className={styles.container}>
            {/* hero section */}
            <HeroSlider/>
            {/* training and diplomas */}

            <TrainingAndDiplomas />
            {/* why chose us */}

            <WhyChooseUs />
            {/* partners */}

            <div className={styles.partnersContainer}>
                <h1 className={styles.title}>
                    <span>Our Partners</span>
                    <span></span>
                </h1>
                <ul className={styles.partnerBrands}>
                    <li className={styles.logo1}><Image src={NcrsLogo} alt="NCRS Logo" fill /></li>
                    <li className={styles.logo2}><Image src={SpaceXLogo} alt="SpaceX Logo" fill /></li>
                    <li className={styles.logo4}><Image src={NasaLogo} alt="Nasa Logo" fill /></li>
                    <li className={styles.logo5}><Image src={NGLogo} alt="Nigeria Logo" fill /></li>
                </ul>
            </div>

            {/* testimonials */}
            <Testimonials />
            {/* get started - call to action */}
            <CallToActionSection />
        </div>
    )
}

export default HomePage;