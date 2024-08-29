"use client";
import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./CertOverview.module.css";
import Menu from "../../../public/assets/icons/menu.png";
import Image from "next/image";

const CertificateOverview = forwardRef(
  (
    {
      checkBox = false,
      name = "Angela Okpifo",
      acceptSatus = "Pending",
      certId = "NCRS090234",
      regDate = "9/112/2024",
      status = "Active",
      uniqueKey,
      isMenuOpen,
      toggleMenuFunc,
    },
    ref
  ) => {
    const [checked, useCheck] = useState(false);

    const handleCheckBoxClick = () => {
      useCheck((current) => !current);
    };

    useImperativeHandle(ref, () => ({
      toggleCheckbox: handleCheckBoxClick,
    }));

    return (
      <div className={`${styles.container} ${styles.certificateOverview}`}>
        {/* checkbox */}
        {checkBox === true && (
          <div
            className={!checked ? styles.unchecked : styles.checked}
            onClick={handleCheckBoxClick}
          ></div>
        )}
        <span>{name}</span>
        <span>{acceptSatus}</span>
        <span>{certId}</span>
        <span>{regDate}</span>
        <span className={styles.activeStatus}>{status}</span>
        <span className={styles.menuIcon} onClick={toggleMenuFunc}>
          <Image src={Menu} alt="Menu" />
        </span>
        {isMenuOpen && (
          <div className={styles.menuOpts}>
            <ul>
              <li>Delete</li>
              <li>View Details</li>
              <li>Suspend</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
);

export default CertificateOverview;
