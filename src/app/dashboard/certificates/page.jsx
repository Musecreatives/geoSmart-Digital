"use client"
import { useState } from "react";

import styles from "./certificate.module.css";
import CertificateOverview from "@/components/certificate_overview/CertOverview";
import AddCertificatePopup from "@/components/dasboard/popup/Popup";
import ActionBtns from "@/components/dasboard/certPageActionBtns/ActionBtns";
import CertHead from "@/components/dasboard/certHead/certHead";

const Certificate = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [openAddCerticate, useopenAddCerticate] = useState(false);

    const openMenuOptsHandler = (certId) => {
      setOpenMenu((current) => (current === certId ? null : certId));
    };

    // add certificate handler popup
    const addCertificatePopupHandler = () => {
      useopenAddCerticate(initial => {
        console.log(initial)
        return !initial;
      })
    }
    
    return(
        <div className={styles.container}>
            {/* popup */}
            {
              openAddCerticate &&
              (<div className={styles.popup_add_certificate}>
                <AddCertificatePopup popupHandler={addCertificatePopupHandler}/>
              </div>)
            }

            {/* action btns */}
            <ActionBtns addBtnHander={addCertificatePopupHandler}/>
          
            {/* headings */}
            <CertHead />
            <div className={styles.certifcates}>
                <CertificateOverview 
                checkBox={true}
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
                checkBox={true}
                name="Angela Okpifo"
                acceptSatus="Pending"
                certId="NCRS090234"
                regDate="9/112/2024"
                status="Active"
                uniqueKey="2a"
                isMenuOpen={openMenu === "1a"}
                toggleMenuFunc={() => openMenuOptsHandler("1a")}
                />
                <CertificateOverview 
                checkBox={true}
                name="Angela Okpifo"
                acceptSatus="Pending"
                certId="NCRS090234"
                regDate="9/112/2024"
                status="Active"
                uniqueKey="3a"
                isMenuOpen={openMenu === "1a"}
                toggleMenuFunc={() => openMenuOptsHandler("1a")}
                />
                <CertificateOverview 
                checkBox={true}
                name="Angela Okpifo"
                acceptSatus="Pending"
                certId="NCRS090234"
                regDate="9/112/2024"
                status="Active"
                uniqueKey="4a"
                isMenuOpen={openMenu === "1a"}
                toggleMenuFunc={() => openMenuOptsHandler("1a")}
                />
            </div>
        </div>
    );
}

export default Certificate;