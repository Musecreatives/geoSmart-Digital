"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./missioncore.module.css";

//images
import MissionImage from "../../../public/assets/imgs/mission_image.jpg";
import VisionImage from "../../../public/assets/imgs/vision_image.jpg";

const MissionVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      if (top > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mission Section */}
      <section className={`${styles.section} ${isVisible ? styles.fadeUp : ""}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <Image src={MissionImage} alt="Mission Image" className={styles.image} />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>Our Mission</h2>
            <p className={styles.description}>
              Our mission is to provide cutting-edge solutions to foster growth and digital transformation across industries, ensuring that businesses can reach their full potential in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={`${styles.section} ${isVisible ? styles.fadeUp : ""}`}>
        <div className={`${styles.contentWrapper} ${styles.reverse}`}>
        <div className={styles.imageWrapper}>
            <Image src={VisionImage} alt="Vision Image" className={styles.image} />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>Our Vision</h2>
            <p className={styles.description}>
              To be a global leader in IT consultancy and digital transformation by delivering innovative solutions that empower organizations to thrive in the digital world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionSection;
