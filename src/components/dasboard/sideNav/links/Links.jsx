"use client"
// 
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// style
import styles from "./links.module.css";
import homeIcon from "../../../../../public/assets/icons/home.png"
import workIcon from "../../../../../public/assets/icons/work.png"

const Links = () => {
    const paths = [
        {title: "Home", path: "/dashboard/home", icon: homeIcon},
        {title: "Certificates", path: "/dashboard/certificates", icon: workIcon},
    ]

    const pathname = usePathname();
    
    return(
        <div className={styles.dashboard_nav_links}>
            {paths.map((linkpath, index) => {
                return <Link key={index} href={linkpath.path} className={`${styles.link_item} ${pathname === linkpath.path && styles.active}`}>
                    <span><Image src={linkpath.icon} alt={linkpath.title}/></span>
                    <span>{linkpath.title}</span>
                </Link>
            })}
        </div>
    );
}

export default Links