"use client";
import { useState } from "react";

import CertificateOverview from "@/components/certificate_overview/CertOverview";
import styles from "./home.module.css";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const openMenuOptsHandler = (certId) => {
    setOpenMenu((current) => (current === certId ? null : certId));
  };

  return (
    <div>
      <div className={styles.greeting_container}>
        <h2>{`Hello Kolawunla`}</h2>
        <p className={styles.welcome}>Welcome back</p>
      </div>
      {/* recent uploads */}
      <div className={styles.recent_uploads}>
        <h3>Recently uploaded</h3>
      </div>
      {/* certificates */}
      <div className={styles.certificate_container}>
        <CertificateOverview
          checkBox={false}
          name="Angela Okpifo"
          acceptSatus="Pending"
          certId="NCRS090234"
          regDate="9/112/2024"
          status="Active"
          uniqueKey="1a"
          isMenuOpen={openMenu === "1a"}
          toggleMenuFunc={() => openMenuOptsHandler("1a")}
        />
        <CertificateOverview
          checkBox={false}
          name="John Doe"
          acceptSatus="Approved"
          certId="NCRS090235"
          regDate="9/12/2024"
          status="Active"
          uniqueKey="1b"
          isMenuOpen={openMenu === "1b"}
          toggleMenuFunc={() => openMenuOptsHandler("1b")}
        />
        <CertificateOverview
          checkBox={false}
          name="Jane Smith"
          acceptSatus="Rejected"
          certId="NCRS090236"
          regDate="9/13/2024"
          status="Inactive"
          uniqueKey="3a"
          isMenuOpen={openMenu === "3a"}
          toggleMenuFunc={() => openMenuOptsHandler("3a")}
        />
      </div>
    </div>
  );
};

export default Home;
