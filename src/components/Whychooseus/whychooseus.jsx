// src/components/WhyChooseUs.jsx
import styles from './whychooseus.module.css';
import Image from 'next/image';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '/assets/icons/hands-on-learning.png', // Replace with actual path to your icon image
      title: 'Hands-On Learning',
      description: 'Gain practical experience through interactive sessions and real-world projects.',
    },
    {
      icon: '/assets/icons/customized-solutions.png',
      title: 'Customized Solutions',
      description: 'Tailored training programs and consultancy services to meet your specific needs and objectives.',
    },
    {
      icon: '/assets/icons/ongoing-support.png',
      description: 'Access to resources, mentorship, and support to ensure your continued success.',
    },
  ];

  return (
    <section className={styles.whyChooseUsSection}>
      <h2 className={styles.heading}>
        Why choose <span className={styles.highlight}>us?</span>
      </h2>
      <div className={styles.reasonsContainer}>
        {reasons.map((reason, index) => (
          <div className={styles.reasonCard} key={index}>
            <div className={styles.iconWrapper}>
              <Image src={reason.icon} alt={reason.title} width={50} height={50} />
            </div>
            <h3 className={styles.reasonTitle}>{reason.title}</h3>
            <p className={styles.reasonDescription}>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
