import DashboardSideNav from "@/components/dasboard/sideNav/SideNav";
import TopNav from "@/components/dasboard/topNav/TopNav";

// style
import styles from "./layout.module.css";

const DashboardLayout = ({children}) => {
    return(
        <div>
            {/* top nav */}
                <TopNav />
            <div className={styles.content_wrapper}>
                {/* side nav */}
                <DashboardSideNav />
                {/* children */}
                <div className={styles.page_content}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;