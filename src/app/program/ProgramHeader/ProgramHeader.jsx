import styles from "./ProgramHeader.module.css";
// images
import HeaderBg from "../../../../public/assets/imgs/program-bg.png";

const ProgramHeader = (
    {
        bg=HeaderBg,
        programTitle="Computer Programing",
        certificate="Training Prgram",
        fee="_______",
        duration="Flexible",
        startDate="September 12, 2024",
        location="Jos, Nigeria"
    }
) => {
    const headerStyle = {
        background: HeaderBg,
    }
    
    return(
        <div className={styles.container}>
            {/* program title */}
            <h1>{programTitle}</h1>
            {/* program table */}
            <div className={styles.program_table}>
                <ul className={styles.program}>
                    <li><span className={styles.title}>Program:</span> <span className={styles.desc}>{programTitle}</span></li>
                    <li><span className={styles.title}>Certificate:</span> <span className={styles.desc}>{certificate}</span></li>
                    <li><span className={styles.title}>Application Fee:</span> <span className={styles.desc}>{fee}</span></li>
                </ul>

                <ul className={styles.program}>
                    <li><span className={styles.title}>Program Length:</span> <span className={styles.desc}>{duration}</span></li>
                    <li><span className={styles.title}>Start Date:</span> <span className={styles.desc}>{startDate}</span></li>
                    <li><span className={styles.title}>Location:</span> <span className={styles.desc}>{location}</span></li>
                </ul>
            </div>
        </div>
    );
}

export default ProgramHeader;