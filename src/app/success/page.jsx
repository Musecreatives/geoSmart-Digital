// /success/page.jsx
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./success.module.css";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const name = searchParams.get("name");
  const certificateId = searchParams.get("certificate_id");
  const dateAwarded = searchParams.get("date_awarded");
  const status = searchParams.get("status");

  // Create an object to store certificate details
  const certDetails = {
    title: title, // Use the extracted title from search params
    id: certificateId, // Use the extracted ID from search params
    awardee: name, // Use the extracted name from search params
    status: status, // Assuming "Issued" is a default status
    programme: " ", // Replace with the actual program name 
    date: dateAwarded, // Use the extracted date from search params
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Certificate Valid</h1>
      <p className={styles.subheading}>Your Request has been processed successfully.</p>
      <div className={styles.details}>
        <div>
          <span>Title of Certificate:</span>
          <span>{certDetails.title}</span>
        </div>
        <div>
          <span>Certification ID:</span>
          <span>{certDetails.id}</span>
        </div>
        <div>
          <span>Name of Awardee:</span>
          <span>{certDetails.awardee}</span>
        </div>
        <div>
          <span>Status:</span>
          <span>{certDetails.status}</span>
        </div>
        <div>
          <span>Programme:</span>
          <span>{certDetails.programme}</span>
        </div>
        <div>
          <span>Date Awarded:</span>
          <span>{certDetails.date}</span>
        </div>
      </div>
      <a href="/" className={styles.homeButton}>
        Go Back to Home
      </a>
    </div>
  );
};

// Wrap in Suspense and set dynamic rendering
export default function SuccessWrapper() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SuccessPage />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
