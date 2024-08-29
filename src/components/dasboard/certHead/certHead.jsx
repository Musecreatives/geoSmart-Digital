import styles from "./certHead.module.css";

const CertHead = () => {
    return(
        <div className={styles.container}>
            {/* checkbox */}
            <div className={styles.checkbox}></div>
            <span>Name</span>
            <span>Accepted</span>
            <span>ID</span>
            <span>Date Registered</span>
            <span>Status</span>
        </div>
    )
}

export default CertHead;