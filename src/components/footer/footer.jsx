import Link from "next/link";
import Image from "next/image";
// style
import styles from "./footer.module.css";
// image
import CircleLogo from "../../../public/assets/logo-icon.png";

const Footer = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.links_container}>
                <div className={styles.logo}>
                    <Image src={CircleLogo} alt="Logo" fill />
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
                        <div> <Link className={styles.link} href="/computer_application" >
                            Computer Application
                        </Link></div>
                        <div> <Link className={styles.link} href="/computer_maintainance" >
                            Computer Maintainance
                        </Link></div>
                        <div> <Link className={styles.link} href="/computer_networking" >
                            Computer Networking
                        </Link></div>
                        <div> <Link className={styles.link} href="/software-engineering">Software Engineering</Link></div>
                        <div> <Link className={styles.link} href="/remote_sensing">Remote Sensing/GIS</Link></div>
                        <div> <Link className={styles.link} href="/validate">Verify Certificate</Link></div>
                        <div> <Link className={styles.link} href="/contact">Contact Us</Link></div>
                        <div> <Link className={styles.link} href="https://www.ncrs.gov.ng">Visit NCRS Main Website</Link></div>
                    </div>
                </div>

                <div className={styles.content}>
                    <h4 className={styles.heading}>Email/Phone No.</h4>
                    <div className={styles.body}>
                        <div>geosmart@ncrs.gov.ng</div>
                        <div>+2348088714963</div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>© GeoSmart Digital Solution 2024</div>
        </div>
    );
}

export default Footer;