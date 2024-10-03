import { useEffect, useState } from "react";
import styles from "./MissionCore.module.css";

const MissionCoreSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("mission-core-section");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="mission-core-section"
      className={`${styles.missionCoreContainer} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.missionStatement}>
        <h2>Our Mission Statement</h2>
        <p>
          Provide cost-effective, high-quality innovative solutions & services, powered by state-of-the-art technologies, anchored on our basic principles of:
        </p>
        <ul className={styles.listContainer}>
          <li>Explore</li>
          <li>Innovate</li>
          <li>Improve</li>
        </ul>
        <p>
          The strong R&D team of Broad Height is constantly working to upgrade existing solutions and develop new products. Broad Height is transparent and accountable to customers, shareholders, partners, and employees and strives to deliver on commitments and results.
        </p>
      </div>
      <div className={styles.coreValues}>
        <h2>Our Core Values & Philosophy</h2>
        <p>
          Broad Height respects and seeks to maintain the highest standards of fairness, equality, integrity, and honesty. Our corporate philosophy is:
        </p>
        <ul className={styles.listContainer}>
          <li>Total customer satisfaction, continuous improvement, and total involvement.</li>
          <li>Constantly and consistently deliver products and services of the highest quality.</li>
          <li>Keep pace with change and continuously strive for innovation while keeping in step with modern technology and methodology.</li>
        </ul>
        <p>
          Our core value centers on total customer satisfaction and a quest toward ensuring good corporate citizenship.
        </p>
      </div>
    </div>
  );
};

export default MissionCoreSection;
