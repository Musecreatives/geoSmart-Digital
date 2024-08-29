import styles from "./WhoCanEnroll.module.css";

const WhoCanEnroll = (
    {
        array
    }
) => {
    return(
        <div className={styles.container}>
            <h3>Who Should Enroll?</h3>
            <ul className={styles.reasons}>
                {
                    array.map((content, index) => <li key={index}>{content}</li>)
                }
            </ul>
        </div>
    )
}

export default WhoCanEnroll;