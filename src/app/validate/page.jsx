"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './validate.module.css';

const ValidateCertificate = () => {
  const [certificateCode, setCertificateCode] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder validation logic (replace with actual API call)
    if (certificateCode === 'N9TT-9G0A-BF7Q-RANC') {
      setIsValid(true);  // Valid code
    } else {
      setIsValid(false); // Invalid code
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        {/* Fix: Remove <a> tag inside the Link */}
        <Link href="/" className={styles.goBack}>
          Go Back
        </Link>

        <h1 className={styles.heading}>Validate Certificate</h1>
        <p className={styles.subheading}>Enter the certificate validation code</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            className={styles.inputField}
            value={certificateCode}
            onChange={(e) => setCertificateCode(e.target.value)}
            placeholder="N9TT-9G0A-BF7Q-RANC"
            required
          />
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>

        {isValid === true && <p className={styles.successMessage}>Certificate is valid!</p>}
        {isValid === false && <p className={styles.errorMessage}>Invalid certificate code.</p>}
      </div>
    </div>
  );
};

export default ValidateCertificate;
