import styles from "./validate.module.css";

const ValidateCertificate = () => {
    return(
        <div className={styles.validate_ctf_form}>
            {/* form heading */}
            <div className={styles.form_heading}>
                <h2>Validate Certificate</h2>
                <p className={styles.paragraph}>Enter the certificate validation code</p>
            </div>
            {/* form */}
            <form className={styles.validation_form_wrapper}>
                <input className={styles.validation_input} type="text" name="certificate-vl" placeholder="N9TT-9G0A-B7FQ-RANC"/>
                <button className={styles.validation_submit_btn}>Submit</button>
            </form>
        </div>
    );
}

export default ValidateCertificate;