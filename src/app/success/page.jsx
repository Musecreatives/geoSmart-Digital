// /app/success/page.jsx
"use client";

import { useSearchParams } from "next/navigation";
import styles from "./success.module.css";
import React from 'react';

const SuccessPage = () => {
  const searchParams = useSearchParams();

  const certificateDetails = {
    title: searchParams.get("title"),
    id: searchParams.get("certificate_id"),
    awardee: searchParams.get("name"),
    status: searchParams.get("status"), // Assuming the certificate is verified
    programme: "", // Add programme if available
    date: searchParams.get("date_awarded"),
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Certificate Valid</h1>
      <p className={styles.subheading}>Your Request has been processed successfully.</p>
      <div className={styles.details}>
        <div>
          <span>Title of Certificate:</span>
          <span>{certificateDetails.title}</span>
        </div>
        <div>
          <span>Certification ID:</span>
          <span>{certificateDetails.id}</span>
        </div>
        <div>
          <span>Name of Awardee:</span>
          <span>{certificateDetails.awardee}</span>
        </div>
        <div>
          <span>Status:</span>
          <span>{certificateDetails.status}</span>
        </div>
        <div>
          <span>Programme:</span>
          <span>{certificateDetails.programme}</span>
        </div>
        <div>
          <span>Date Awarded:</span>
          <span>{certificateDetails.date}</span>
        </div>
      </div>
      <a href="/" className={styles.homeButton}>
        Go Back to Home
      </a>
    </div>
  );
};

export default SuccessPage;
