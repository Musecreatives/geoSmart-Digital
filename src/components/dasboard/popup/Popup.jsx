import AddCertificateInput from "./inputs/In/Inputs";

import styles from "./Popup.module.css";

const AddCertificatePopup = (
    {
        popupHandler
    }
) => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.closeBtn} onClick={() => popupHandler()}>x</div>
                
                <h4 className={styles.title}>Add Certificate Data</h4>
                <form>
                    <AddCertificateInput 
                    label="Certificate title"
                    inputPlacehold="Higher Diploma for Sciences"
                    />
                    <AddCertificateInput 
                    label="Name of Awardee"
                    inputPlacehold="Happy Owen"
                    />
                    <AddCertificateInput 
                    label="Certificate ID"
                    inputPlacehold="NCRS00341233445"
                    />
                    <AddCertificateInput 
                    label="Status"
                    inputPlacehold="Active"
                    />
                    <AddCertificateInput 
                    label="Date awarded"
                    inputPlacehold="02/10/23"
                    />
                    <button>Add Certificate</button>
                </form>
            </div>
        </div>
    )
}

export default AddCertificatePopup;