import Link from "next/link";
import Image from "next/image";

import styles from "./success.module.css";

import logoIcon from "../../../../public/assets/logo-icon.png";
import CheckIcon from "../../../../public/assets/icons/check.png";
import NotFoundImg from "../../../../public/assets/imgs/not-found.png";

const CertificateValidSuccess = () => {
    let isValid = false;

    return(
        <div className={styles.res_success_wrapper} style={isValid ? {} : { backgroundColor: '#1b5237' }}>
            {/* logo and org name */}
            <div className={styles.org_details_container}>
                {/* back btn */}
                {
                    isValid && <Link className={styles.back_link} href="/validate">Go back</Link> }
                {/* heading */}
                <div className={styles.org_name_wrapper}>
                    {/* logo */}
                    <Image src={logoIcon} width={40}  alt="logo"/>
                    {/* org name */}
                    <h2>GeoSmart CERTIFICATION PORTAL</h2>
                </div>
                {/* request response */}
                {
                    isValid && <h4 className={styles.request_heading}>Your Request</h4>
                }
            </div>
            {/* certifate details */}
            <div className={styles.certificate_details_container}>
                {
                    isValid ? 
                        (
                            // return certificate details
                            <div className={styles.success_details}>
                                {/* valid heading msg */}
                                <div className={styles.validation_checker}>
                                    <Image 
                                    src={CheckIcon} 
                                    width={20}
                                    alt="Certificate is valid"
                                    />
                                    <span>Certificate Valid</span>
                                </div>
                                {/* credential */}
                                <div className={styles.credentials_container}>
                                    <h3 className={styles.c_heading}>Your Credentials</h3>
                                    {/* certificate info */}
                                    <div className={styles.certificate_info}>
                                        <div className={styles.info}>
                                            <span className={styles.title}>Title of Certificate:</span>
                                            <span className={styles.detail}>NCRS Training Program</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (
                            // return not found
                            <div className={styles.fail_details}>
                                <Image 
                                src={NotFoundImg}
                                alt="Certification not found"
                                />
                                {/* not found message */}
                                <div className={styles.f_headings}>
                                    <h2 className={styles.f_h}>Certificate not found</h2>
                                    <p className={styles.f_p}>Sorry, this certificate doesn’t exist or has been suspended, <br></br> please try again later, thank you!</p>
                                    <Link href="/">
                                        <button className={styles.f_btn}>Back to home</button>
                                    </Link>
                                </div>
                            </div>
                        )
                        
                }
            </div>
        </div>
    )
}

export default CertificateValidSuccess;