import styles from './contactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.contactItem}>
        <img src="/assets/icons/phone-icon.png" alt="Phone Icon"/>
        <div className={styles.textContainer}>
          <p>Phone</p>
          <strong>+2348035998585</strong>
        </div>
      </div>
      <div className={styles.contactItem}>
        <img src="/assets/icons/email-icon.png" alt="Email Icon" />
        <div className={styles.textContainer}>
          <p>E-MAIL</p>
          <strong className={styles.email}>geosmart.ncrs@gmail.com</strong>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
