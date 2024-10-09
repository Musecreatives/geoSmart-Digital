import styles from "./ProgramHeader.module.css";
import Image from "next/image"; // Use for optimization if using an image element

const ProgramHeader = ({
  bg, // New dynamic background prop
  programTitle = "Software  Engineering",
  certificate = "Training Program",
  fee = "_______",
  duration = "Flexible",
  startDate = "_ _ _ _ _ _",
  location = "Jos, Nigeria",
}) => {
  const headerStyle = {
    backgroundImage: `url(${bg.src})`, // Use the 'src' property for dynamic backgrounds
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={styles.container} style={headerStyle}>
      {/* program title */}
      <h1>{programTitle}</h1>
      {/* program table */}
      <div className={styles.program_table}>
        <ul className={styles.program}>
          <li>
            <span className={styles.title}>Program:</span>{" "}
            <span className={styles.desc}>{programTitle}</span>
          </li>
          <li>
            <span className={styles.title}>Certificate:</span>{" "}
            <span className={styles.desc}>{certificate}</span>
          </li>
          <li>
            <span className={styles.title}>Application Fee:</span>{" "}
            <span className={styles.desc}>{fee}</span>
          </li>
        </ul>

        <ul className={styles.program}>
          <li>
            <span className={styles.title}>Program Length:</span>{" "}
            <span className={styles.desc}>{duration}</span>
          </li>
          <li>
            <span className={styles.title}>Start Date:</span>{" "}
            <span className={styles.desc}>{startDate}</span>
          </li>
          <li>
            <span className={styles.title}>Location:</span>{" "}
            <span className={styles.desc}>{location}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgramHeader;
