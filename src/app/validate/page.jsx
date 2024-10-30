"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./validate.module.css";
import checkCert from "../api/validate/route";

const ValidateCertificate = () => {
  const [certificateCode, setCertificateCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationResult, setValidationResult] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setValidationResult(null);
    // Not usable
    // try {
    //   // Correct the API endpoint
    //   const response = await fetch(`/api/validate?cert_id=${certificateCode}`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // });

    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log('Certificate Validation Data:', data);
    //         setValidationResult(data);
    //     } else {
    //         const errorData = await response.json();
    //         setError(errorData.message || 'Invalid certificate code');
    //     }
    // } catch (error) {
    //     setError('Server error');
    // } finally {
    //     setIsLoading(false);
    // }
    /*end*/

    try {
      const certDetails = await checkCert(certificateCode);

      if (certDetails && certDetails.status == 200) {
        setValidationResult(certDetails.data.userCertificate);
      } else if (certDetails && certDetails.status == 400) {
        setError(certDetails.data.msg);
      } else {
        setError(certDetails.data.msg || "An error occured, try again");
      }
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
        <p className={styles.subheading}>
          Enter the certificate validation code
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            className={styles.inputField}
            value={certificateCode}
            onChange={(e) => setCertificateCode(e.target.value)}
            placeholder="Enter your certificate code"
            required
          />
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Validating..." : "Submit"}
          </button>
        </form>

        {error && <p className={styles.errorMessage}>{error}</p>}

        {validationResult && (
          <div>
            <h2>Validation Result:</h2>
            <p>Status: {validationResult.status || "Unknown"}</p>
            <p>Message: {validationResult.title || "No message"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValidateCertificate;
