'use client'; // Required for Next.js client-side rendering
import { motion } from "framer-motion";
import styles from "./RequiredSkillLevel.module.css";

const RequiredSkillLevel = () => {
    return(
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={styles.container}
        >
            <h2 className={styles.title}>Who Should Enroll?</h2>
            <ul>
                <li>Individuals who are new to computers and want to build a strong foundation in essential skills.</li>
                <li>Students who need to develop computer proficiency for academic or professional purposes.</li>
                <li>Professionals who want to enhance their Microsoft Office skills and become more productive in their day-to-day work.</li>
            </ul>
        </motion.div>
    );
}

export default RequiredSkillLevel;
