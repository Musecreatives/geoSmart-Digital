"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use from 'next/navigation' in the app directory
import styles from './validate.module.css';

const ValidateCertificate = () => {
  const [certificateCode, setCertificateCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter(); // Now it will work with app directory

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Make a POST request to the Next.js API route
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ certificateCode }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // On successful validation, navigate to the success page and pass data
        router.push(`/validate/success?title=${data.title}&name=${data.name}&certificate_id=${data.certificate_id}&date_awarded=${data.date_awarded}`);
      } else {
        // Handle validation error
        setError(data.message || 'Invalid certificate code');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
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
            placeholder="Enter your certificate code"
            required
          />
          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Validating...' : 'Submit'}
          </button>
        </form>

        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
};

export default ValidateCertificate;
