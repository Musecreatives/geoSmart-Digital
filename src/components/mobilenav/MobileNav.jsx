"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// style
import styles from "./MobileNav.module.css";
// images
import Logo from "../../../public/assets/ncrs-logo.png";

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className={styles.main_container}>
            {/* logo and hamburger - head */}
            <div className={styles.logo_hamburger_container}>
                <div className={styles.logo_wrapper}>
                    <Image src={Logo} alt="ncrs logo" fill />
                </div>
                <div className={styles.hamburger_wrapper} onClick={handleMenu}>
                    {isMenuOpen ? (
                        // Close icon when menu is open
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"}>
                            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        // Hamburger icon when menu is closed
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#000000"} fill={"none"}>
                            <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </div>
            </div>
            {/* menu links - body */}
            {isMenuOpen && (
                <div className={`${styles.menu_items_container} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.links_wrapper}>
                        <li onClick={handleMenu}><Link href="/" className={styles.link}>Home</Link></li>
                        <li onClick={handleMenu}><Link href="/about" className={styles.link}>About GeoSmart</Link></li>
                        <li className={styles.multiple_link}>
                            <div className={styles.link}>Program</div>
                            <ul className={styles.inner_link_wrapper}>
                                <li onClick={handleMenu}><Link href="/computer_application" className={styles.link}>Computer Application</Link></li>
                                <li onClick={handleMenu}><Link href="/computer_maintainance" className={styles.link}>Computer Maintenance</Link></li>
                                <li onClick={handleMenu}><Link href="/computer_networking" className={styles.link}>Computer Networking</Link></li>
                                <li onClick={handleMenu}><Link href="/remote_sensing" className={styles.link}>Remote Sensing/GIS</Link></li>
                                <li onClick={handleMenu}><Link href="/software-engineering" className={styles.link}>Software Engineering</Link></li>
                            </ul>
                        </li>
                        <li onClick={handleMenu}><Link href="/contact" className={styles.link}>Contact Us</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
