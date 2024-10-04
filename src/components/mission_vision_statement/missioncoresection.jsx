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
            <h2 className={styles.heading}>Our Mission Statement</h2>
            <p className={styles.description}>
              Figma ipsum component variant main layer. Select connection flows edit fill. Layer horizontal line scale mask. Pen italic flatten list figjam main. Move flatten blur text boolean object distribute main horizontal. Polygon rotate plugin ipsum opacity group layout.
              Thumbnail export blur style mask. Figjam editor create union duplicate project arrange pen plugin reesizing. Flatten hand duplicate font star strikethrough object device editor. Horizontal inspect link style auto. Strikethrough object image follower star. Duplicate export main horizontal rectangle shadow. Draft distribute underline style undo fill team flatten. Figjam figma device bullet.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={MissionImage} alt="Mission Image" className={styles.image} />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={`${styles.section} ${isVisible ? styles.fadeUp : ""}`}>
        <div className={`${styles.contentWrapper} ${styles.reverse}`}>
        <div className={styles.textWrapper}>
            <h2 className={styles.heading}>Our Vision Statement</h2>
            <p className={styles.description}>
              Figma ipsum component variant main layer. Select connection flows edit fill. Layer horizontal line scale mask. Pen italic flatten list figjam main. Move flatten blur text boolean object distribute main horizontal. Polygon rotate plugin ipsum opacity group layout.
              Thumbnail export blur style mask. Figjam editor create union duplicate project arrange pen plugin reesizing. Flatten hand duplicate font star strikethrough object device editor. Horizontal inspect link style auto. Strikethrough object image follower star. Duplicate export main horizontal rectangle shadow. Draft distribute underline style undo fill team flatten. Figjam figma device bullet.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={VisionImage} alt="Vision Image" className={styles.image} />
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionSection;
