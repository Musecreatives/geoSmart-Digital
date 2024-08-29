import Links from "./links/Links";
import styles from "./sideNav.module.css";

import logoutIcon from "../../../../public/assets/icons/logout-btn.png"
import Image from "next/image";

const DashboardSideNav = () => {
    return(
        <div className={styles.side_nav_wrapper}>
            <div className={styles.navigation_wrapper}>
                <Links />
            </div>
            {/* logout */}
            <div className={styles.logout_btn_container}>
                <button className={styles.logout_btn}>
                    {/* Icon */}
                    <span>
                        <Image src={logoutIcon} width={20} alt="Logout"/>
                    </span>
                    {/* text */}
                    <span className={styles.btn_text}>Log out</span>
                </button>
            </div>
        </div>
    );
}

export default DashboardSideNav;