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
          <div className={styles.textWrapper}>
            <h2 className={styles.heading}>Who we are?</h2>
            <p className={styles.description}>
              Geosmart Digital Solutions Ltd. is the consultancy unit of the National Centre for Remote Sensing, Jos.
              Registered with the corporate affairs commission under the Corporate and Allied Matters decree (1990), Geosmart Digital Solutions was established to meet the dynamics of globalization as well as technological challenges in the effective application of Remote Sensing and Geographic Information System (GIS) in research and development. Geosmart Digital Solutions provides technical consultancy services in Geoinformation/Environmental Research and also organizes practical training programmes for interested professionals in the fields of Environment, Agriculture, Geology, Water Resources, Urban Planning, Surveying and Geoinformatics, cartography amongst others
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={MissionImage} alt="Mission Image" className={styles.image} />
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionSection;
