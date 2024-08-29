"use client"

import { useState } from "react";
import Image from "next/image";
// style
import styles from "./MobileNav.module.css";
// images
import Logo from "../../../public/assets/ncrs-logo.png";
import Link from "next/link";

const MobileNav = () => {
    const [isMenuOpen, useIsMenuOpen] = useState(false);

    const handleMenu = () => useIsMenuOpen(current => !current)

    return(
        <div className={styles.main_container}>
            {/* logo and hamburger - head */}
            <div className={styles.logo_hamburger_container}>
                <div className={styles.logo_wrapper}>
                    <Image src={Logo} alt="ncrs logo" fill/>
                </div>
                <div className={styles.hamburger_wrapper} onClick={() => {handleMenu()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#000000"} fill={"none"}>
                        <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            {/* menu links - body */}
            {
                isMenuOpen && 
                (
                    <div className={styles.menu_items_container}>
                        <ul className={styles.links_wrapper}>
                            <li onClick={() => {handleMenu()}}><Link href="/">Home</Link></li>
                            <li onClick={() => {handleMenu()}}><Link href="/about">About</Link></li>
                            <li className={styles.multiple_link}>
                                <div>Program</div>
                                <ul className={styles.inner_link_wrapper}>
                                    <li onClick={() => {handleMenu()}}><Link href="/computer-application">Computer Application</Link></li>
                                    <li onClick={() => {handleMenu()}}><Link href="/computer-maintainance">Computer Maintainance</Link></li>
                                    <li onClick={() => {handleMenu()}}><Link href="/computer-networking">Computer networking</Link></li>
                                    <li onClick={() => {handleMenu()}}><Link href="/remote-sensing">Remote Sensing/GIS</Link></li>
                                    <li onClick={() => {handleMenu()}}><Link href="/software-engineering">Software Engineering</Link></li>
                                </ul>
                            </li>
                            <li onClick={() => {handleMenu()}}><Link href="/services">Services</Link></li>
                            <li className={styles.multiple_link}>
                                <div>Certificate</div>
                                <ul className={styles.inner_link_wrapper}>
                                    <li onClick={() => {handleMenu()}}><Link href="/validate">Validate Certificate</Link></li>
                                    <li onClick={() => {handleMenu()}}><Link href="/login">Admin Portal</Link></li>
                                </ul>
                            </li>
                            <li onClick={() => {handleMenu()}}><Link href="/contact">contact</Link></li>
                        </ul>
                    </div>
                )
            }
            {/* </div> base div */}
        </div>
    );
}

export default MobileNav;