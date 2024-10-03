import styles from "./ProgramCoverage.module.css";
import Image from "next/image";

const ProgramCoverage = ({ array, icons }) => {
  return (
    <div className={styles.container}>
      <h3>Our Training Program Covers:</h3>
      <ul className={styles.reasons}>
        {array.map((content, index) => (
          <div key={index} className={styles.listItem}>
            {/* Render the icon next to each content */}
            {icons && icons[index] && (
              <Image 
                src={icons[index]} 
                alt={`Icon for ${content}`} 
                width={18} 
                height={18}
                className={styles.icon}
              />
            )}
            {content}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProgramCoverage;
