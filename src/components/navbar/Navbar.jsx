"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// styles
import styles from "./Navbar.module.css";
// images
import NcrsLogo from "../../../public/assets/ncrs-logo.png"
import DropDownDark from "../../../public/assets/icons/dropdown-dark.png"

const LandingPageNav = () => {
    const pathname = usePathname()
    const [isDropdownOpen, useIsDropdownOpen] = useState(null)

    const handleDropdown = (dropdown) => {
        useIsDropdownOpen(current => current === dropdown ? null : dropdown)
    }
    
    return(
        <div className={styles.container}>
            {/* logo */}
            <div className={styles.logo}>
                <Image src={NcrsLogo} height={45} width={90} />
            </div>
            {/* line divider */}
            <div className={styles.lineDivider}></div>
            {/* links container */}
            <div className={styles.linkWrapper}>
                <ul className={styles.navLink}>
                    <li><Link className={`${pathname == "/" ? styles.active_link : styles.none_active}`} href={"/"}>Home</Link> </li>
                    <li><Link className={`${pathname == "/about" ? styles.active_link : styles.none_active}`} href={"/about"}>About GeoSmart</Link> </li>
                    <li className={styles.program_dropdown} onClick={() => handleDropdown("d1")}>
                        <div className={styles.dropdownLinkWrapper}>
                            <div className={styles.link}>
                                <span><Link href={"/"}>Programs</Link></span>
                                {/* dropdown icon */}
                                <span>
                                    <Image src={DropDownDark}  alt="Program dropdown" height={10} width={10}/>
                                </span>
                            </div>
                            
                            {
                                isDropdownOpen=="d1" &&
                                <div className={styles.dropDown}>
                                    <div>
                                        <Link href="/computer-application" >Computer Application</Link>
                                    </div>
                                    <div>
                                        <Link href="/computer-maintainance" >Computer Maintainance</Link>
                                    </div>
                                    <div>
                                        <Link href="/computer-networking" >Computer Networking</Link>
                                    </div>
                                    <div>
                                        <Link href="/remote-sensing" >Remote Sensing and GIS</Link>
                                    </div>
                                    <div>
                                        <Link href="/software-engineering" >Software Engineering</Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </li>
                    <li><Link href={"/"}>Services</Link></li>
                    <li className={styles.program_dropdown} onClick={() => handleDropdown("d2")}>
                        <div className={styles.link}>
                            <span><Link href={"/"}>Certificates</Link></span>
                            {/* dropdown icon */}
                            <span>
                                <Image src={DropDownDark}  alt="Certificates dropdown" height={10} width={10}/>
                            </span>
                        </div>
                        {
                            isDropdownOpen=="d2" &&
                            <div className={styles.dropDown}>
                                <div>
                                    <Link  href="/">Validate Certificate</Link>
                                </div>
                                <div>
                                    <Link  href="/">Admin portal</Link>
                                </div>
                            </div>
                        }
                    </li>
                    <li><Link className={`${pathname == "/contact" ? styles.active_link : styles.none_active}`} href={"/contact"}>Contact</Link> </li>
                </ul>
                <button className={styles.applyBtn}>Apply Now</button>
            </div>
        </div>
    );
}

export default LandingPageNav;