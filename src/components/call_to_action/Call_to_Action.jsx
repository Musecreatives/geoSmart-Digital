import Image from 'next/image';
import Link from 'next/link';
import styles from './Call_to_action.module.css';

const CallToActionSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/assets/imgs/calltoaction.jpg"
          alt="GeoSmart Digital Solutions Team"
          width={500}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.heading}>
          At GeoSmart Digital Solutions we distinguish ourselves through:
        </h3>
        <p className={styles.description}>
          Experienced Instructors, Learn from industry professionals with extensive expertise in their respective fields.
        </p>
        {/* Apply Button with a Link */}
        <Link href="https://docs.google.com/forms" passHref>
          <button className={styles.applyButton}>
            Apply Now →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToActionSection;
