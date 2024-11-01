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
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const certDetails = await checkCert(certificateCode);

      if (certDetails && certDetails.status === 200) {
        const { title, name, certificate_id, date_awarded, status } = certDetails.data.userCertificate;

        router.push(
          `/success?title=${encodeURIComponent(title)}&name=${encodeURIComponent(name)}&certificate_id=${encodeURIComponent(certificate_id)}&date_awarded=${encodeURIComponent(date_awarded)}&status=${encodeURIComponent(status)}`
        );
      }
      else if (certDetails && certDetails.status === 400) {
        setError(certDetails.data.msg);
      } else {
        setError(certDetails.data.msg || "An error occurred, try again.");n
      }
    } catch (err) {
      setError("An unexpected error occurred.");
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
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Validating..." : "Submit"}
          </button>
        </form>

        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
};

export default ValidateCertificate;
