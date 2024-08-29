"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./layout.module.css";
import logo from "../../../public/assets/ncrs-logo.png";
import topArrowIllustration from "../../../public/assets/imgs/top-arrow.png";
import bottomArrowIllustration from "../../../public/assets/imgs/bottom-arrow.png";

const FormPageLayout = ({ children }) => {
  const pathname = usePathname();
  const path = pathname.split("/");
  const removeGeneralLayout = path.includes("validate") && path.length > 2;

  return (
    <div className={removeGeneralLayout ? styles.main_wrapper : null}>
      {!removeGeneralLayout && (
        <>
          {/* Top */}
          <div className={styles.top_container}>
            <Image
              src={logo}
              width={100}
              alt="Logo"
              className={styles.logo}
            />
            <div className={styles.arrow_illustration_wrapper}>
              <Image
                src={topArrowIllustration}
                alt="Top Arrow Illustration"
                layout="intrinsic"
                // width={50} 
                // height={50}
              />
            </div>
          </div>
        </>
      )}
      {/* Form Field */}
      <div className={!removeGeneralLayout && styles.form_wrapper}>{children}</div>
      {!removeGeneralLayout && (
        <>
          {/* Bottom */}
          <div className={styles.arrow_illustration_wrapper_bottom}>
            <Image
              src={bottomArrowIllustration}
              alt="Bottom Arrow Illustration"
              layout="intrinsic"
              // width={50}
              // height={50}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FormPageLayout;
