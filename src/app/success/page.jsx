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
    <div className={styles.successContainer}>
      <h1>Certificate Validation Successful</h1>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Certificate ID:</strong> {certificateId}</p>
      <p><strong>Date Awarded:</strong> {dateAwarded}</p>
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
