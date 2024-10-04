import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from './Testimonial.module.css';

const testimonials = [
  {
    name: 'Katy Jane',
    title: 'Student Developer',
    image: '/assets/imgs/review_1.jpg',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.\nAliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
  },
  {
    name: 'Thomas Waje',
    title: 'Student Developer',
    image: '/assets/imgs/review_2.png',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nUt et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
  },
  {
    name: 'Anna White',
    title: 'Junior Web Developer',
    image: '/assets/imgs/review_1.jpg',
    feedback: 'A great experience! The team at Geosmart helped me level\nup my skills in GIS and web development. The support has been amazing, and I learned so much.',
  }
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(autoScroll); // Cleanup on unmount
  }, [emblaApi]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Testimonials</h2>
      <p className={styles.subheading}>
        Don&apos;t just take our word for it! Hear from our satisfied clients.
      </p>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.embla__slide}>
              <div className={styles.testimonialCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className={styles.profileImage}
                  />
                </div>
                <div className={styles.testimonialContent}>
                  <p className={styles.title}>{testimonial.title}</p>
                  <h3 className={styles.name}>{testimonial.name}</h3>
                  <p className={styles.feedback}>{testimonial.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
