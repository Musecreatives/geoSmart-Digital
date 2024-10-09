'use client'; // Required for Next.js client-side rendering
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Benefits.module.css";
import ManOnLaptopImage from "../../../../public/assets/imgs/man-on-laptop.png";

const ProgramBenefits = ({ title, array }) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={styles.container}
    >
      <div className={styles.text_content}>
      <h2>Benefits</h2> {/* Use dynamic title */}
        <p>{title}</p>
        <ul>
          {array.map((content, index) => (
            <li key={index}>
              <span className={styles.checkIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  width="1em"
                  height="1em"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 3.22a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  />
                </svg>
              </span>
              {content}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.img_content}>
        <Image src={ManOnLaptopImage} alt="Man on laptop" fill />
      </div>
    </motion.div>
  );
};

export default ProgramBenefits;
