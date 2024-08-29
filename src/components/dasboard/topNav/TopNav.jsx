import Image from "next/image";

// style
import styles from "./topnav.module.css";
// assets
import logo from "../../../../public/assets/ncrs-logo.png";

const TopNav = () => {
    return(
        <div className={styles.dashboard_top_nav}>
            {/* logo */}
            <div className={styles.logo_wrapper}>
                <Image src={logo} width={100} alt="NCRS"/>
            </div>
            {/* account */}
            <div className={styles.user_profile}>
                <div className={styles.user_heading}>
                    <p>Kolawunla Adesuwa</p>
                    <small>Admin</small>
                </div>
                <div className={styles.user_img_wrapper}>
                    <Image src="https://via.placeholder.com/40x40" width={40} height={40} alt="User profile" />
                </div>
            </div>
        </div>
    )
}

export default TopNav;