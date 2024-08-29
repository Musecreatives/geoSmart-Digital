import styles from "./Input.module.css"

const AddCertificateInput = ({
    label,
    inputPlacehold,
    inputType
}) => {
    return(
        <div className={styles.inputGroupingContainer}>
            <label>{label}</label>
            <input type={inputType} placeholder={inputPlacehold} className={styles.input} />
        </div>
    );
}

export default AddCertificateInput