// components/HeroSlider.jsx
import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './hero_slider.module.css';

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-slider functionality
  useEffect(() => {
    if (!emblaApi) return;

    // Set interval for auto-scroll every 5 seconds
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // 5000ms = 5 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  return (
    <div className={styles.heroSlider}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {/* Slide 1 */}
          <div className={styles.embla__slide}>
            <div className={styles.textContent}>
              <h1>GeoSmart Digital Solutions</h1>
              <p>Your premier destination for comprehensive training and consultancy services in Remote sensing/GIS and IT</p>
              <button className={styles.applyNowBtn}>Apply Now</button>
            </div>
            <div className={styles.imageContent}>
              <Image src="/assets/imgs/slide_1.jpg" alt="Slide 1" objectFit="cover" fill />
            </div>
          </div>

          {/* Slide 2 */}
          <div className={styles.embla__slide}>
            <div className={styles.textContent}>
              <h1>What we do</h1>
              <p>At Geosmart Digital Solutions we empower individuals and organizations 
              to harness the power of technology for informed decision-making and innovation.</p>
              <button className={styles.applyNowBtn}>Apply Now</button>
            </div>
            <div className={styles.imageContent}>
              <Image src="/assets/imgs/slide_2.jpg" alt="Slide 2" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className={styles.embla__buttonPrev} onClick={scrollPrev}>‹</button>
      <button className={styles.embla__buttonNext} onClick={scrollNext}>›</button>
    </div>
  );
};

export default HeroSlider;
