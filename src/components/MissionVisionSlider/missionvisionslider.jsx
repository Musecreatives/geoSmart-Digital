import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './missionvisionslider.module.css'; // Ensure you create a corresponding CSS file

const MissionVisionSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 4, draggable: true });

  // Autoplay function
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Every 3 seconds, go to the next slide
    return () => clearInterval(timer);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) autoplay();
  }, [emblaApi, autoplay]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <div className={styles.card}>
            <p>Our Mission & Vision</p>
            <h2>Nurturing a Vision</h2>
            <p>At GeoSmart Digital Solutions, we distinguish ourselves through experienced instructors and learning from industry professionals with extensive expertise in their respective fields.</p>
          </div>
        </div>
        <div className={styles.embla__slide}>
          <div className={styles.card}>
            <p>Innovative Solutions</p>
            <h2>Leading the Way</h2>
            <p>Our company prioritizes delivering cutting-edge technology to enable businesses to thrive and adapt in a rapidly changing world.</p>
          </div>
        </div>
        <div className={styles.embla__slide}>
          <div className={styles.card}>
            <p>Commitment to Excellence</p>
            <h2>Driving Change</h2>
            <p>We focus on excellence in service and quality, ensuring our customers experience the best technological solutions tailored to their needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSlider;
