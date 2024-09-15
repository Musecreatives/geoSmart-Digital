import Link from "next/link";
import Image from "next/image";
// style
import styles from "./footer.module.css";
// image
import CircleLogo from "../../../public/assets/circle-logo.png";

const Footer = () => {
    return(
        <div className={styles.main_container}>
            <div className={styles.links_container}>
                <div className={styles.logo}>
                    <Image src={CircleLogo} alt="Logo" fill/>
                </div>

                {/* visit */}
                <div className={styles.content}>
                    <h4 className={styles.heading}>Visit Us</h4>
                    <div className={styles.body}>
                        <p className={styles.location}>Km 11, Bukuru Express, Jos, Plateau State</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <h4 className={styles.heading}>Working Hours</h4>
                    <div className={styles.body}>
                        <p>Monday - Friday: 9AM – 5PM</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <h4 className={styles.heading}>Quick Links</h4>
                    <div className={styles.body}>
                        <div> <Link className={styles.link} href="/about" >About GeoSmart</Link></div>
                        <div> <Link className={styles.link} href="/services">Service</Link></div>
                        <div> <Link className={styles.link} href="/validate">Verify Certificate</Link></div>
                        <div> <Link className={styles.link} href="/contact">Contact</Link></div>
                        <div> <Link className={styles.link} href="https://www.ncrs.gov.ng">Visit NCRS Main Website</Link></div>
                    </div>
                </div>

                <div className={styles.content}>
                    <h4 className={styles.heading}>Email/Phone No.</h4>
                    <div className={styles.body}>
                        <div>geosmart.ncrs@gmail.com</div>
                        <div>+2348035998585</div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>© GeoSmart Digital Solution 2024</div>
        </div>
    );
}

export default Footer;