import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './success.module.css';

const SuccessPage = () => {
  const router = useRouter();
  const { title, name, certificate_id, date_awarded } = router.query; // Get the certificate details from the query

  return (
    <div className={styles.container}>
      <h1>Certificate Validated Successfully!</h1>

      <div className={styles.details}>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Certificate ID:</strong> {certificate_id}</p>
        <p><strong>Date Awarded:</strong> {date_awarded}</p>
      </div>

      <Link href="/" className={styles.homeButton}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default SuccessPage;
