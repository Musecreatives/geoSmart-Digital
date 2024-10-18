'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TrainingAndDiplomas from '../../src/components/TrainingAndDiplomas/TrainingAndDiplomas';
import Testimonials from '../components/testimonial/Testimonial';
import CallToActionSection from '../components/call_to_action/Call_to_Action';
import WhyChooseUs from '../components/Whychooseus/whychooseus';
import HeroSlider from '../components/hero_slider/hero_slider';
// styles
import styles from "./home.module.css";
// img
import NasaLogo from "../../public/assets/icons/NASA.png";
import NGLogo from "../../public/assets/icons/coatofarm.png";
import NcrsLogo from "../../public/assets/brands/ncrs.png";
import SpaceXLogo from "../../public/assets/brands/spacex.png";

const HomePage = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 200); // Delayed for smoother entry
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
        >
            {/* hero section */}
            <HeroSlider />
            {/* training and diplomas */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <TrainingAndDiplomas />
            </motion.div>

            {/* why chose us */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <WhyChooseUs />
            </motion.div>

            {/* partners */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className={`${styles.partnersContainer} ${visible ? 'visible' : ''}`}
            >
                <h1 className={styles.title}>
                    <span>Our Partners</span>
                    <span></span>
                </h1>
                <ul className={styles.partnerBrands}>
                    <motion.li whileHover={{ scale: 1.1 }} className={styles.logo1}>
                        <Image src={NcrsLogo} alt="NCRS Logo" width={150} height={100} />
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className={styles.logo2}>
                        <Image src={SpaceXLogo} alt="SpaceX Logo" width={150} height={100} />
                    </motion.li>
                 
                    <motion.li whileHover={{ scale: 1.1 }} className={styles.logo5}>
                        <Image src={NGLogo} alt="Nigeria Logo" width={150} height={100} />
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} className={styles.logo4}>
                        <Image src={NasaLogo} alt="Nasa Logo" width={150} height={100} />
                    </motion.li>
                </ul>
            </motion.div>

            {/* testimonials */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 2 }}
            >
                <Testimonials />
            </motion.div>
            {/* get started - call to action */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 2 }}
            >
                <CallToActionSection />
            </motion.div>
        </motion.div>
    );
}

export default HomePage;
