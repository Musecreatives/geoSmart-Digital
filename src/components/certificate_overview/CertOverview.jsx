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
      acceptStatus = "Pending",
      certId = "NCRS090234",
      regDate = "09/11/2024",
      status = "Active",
      uniqueKey,
      isMenuOpen,
      toggleMenuFunc,
    },
    ref
  ) => {
    const [checked, setChecked] = useState(false);

    const handleCheckBoxClick = () => {
      setChecked((current) => !current);
    };

    useImperativeHandle(ref, () => ({
      toggleCheckbox: handleCheckBoxClick,
    }));

    return (
      <div className={`${styles.container} ${styles.certificateOverview}`}>
        {/* checkbox */}
        {checkBox && (
          <div
            className={!checked ? styles.unchecked : styles.checked}
            onClick={handleCheckBoxClick}
          ></div>
        )}
        <span>{name}</span>
        <span>{acceptStatus}</span>
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

CertificateOverview.displayName = "CertificateOverview";

export default CertificateOverview;
