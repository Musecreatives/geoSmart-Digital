"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import styles from './validate.module.css';

const ValidateCertificate = () => {
    const [certificateCode, setCertificateCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [validationResult, setValidationResult] = useState(null); // Store the result
    const router = useRouter(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setValidationResult(null); // Clear previous result

        try {
          const response = await fetch(`/api/validate?cert_id=${certificateCode}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });        

            if (response.ok) {
                const data = await response.json();
                console.log('Certificate Validation Data:', data); // Log the API response
                setValidationResult(data); // Set the result for display
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Invalid certificate code');
            }
        } catch (error) {
            setError('Server error');
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

                {/* Display the validation result if available */}
                {validationResult && (
                    <div>
                        <h2>Validation Result:</h2>
                        {/* Display relevant information from validationResult */}
                        <p>Status: {validationResult.status || 'Unknown'}</p>
                        <p>Message: {validationResult.message || 'No message'}</p>
                        {/* ... add more details from validationResult if needed ... */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ValidateCertificate;
