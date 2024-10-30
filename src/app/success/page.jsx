// /success/page.jsx
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./Success.module.css";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const name = searchParams.get("name");
  const certificateId = searchParams.get("certificate_id");
  const dateAwarded = searchParams.get("date_awarded");

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

// Wrap in Suspense and set dynamic rendering
export default function SuccessWrapper() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SuccessPage />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
