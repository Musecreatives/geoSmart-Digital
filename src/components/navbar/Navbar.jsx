// components/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import styles from './Navbar.module.css'; // Import your CSS module

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Only run the router logic after the component has mounted
    setMounted(true);
}, []);


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

    // If not mounted, don't use `pathname` to avoid SSR issues
    if (!mounted) {
      return null;
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/assets/ncrs-logo.png" alt="NCRS Logo" className={styles.logoImage} />
        </Link>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={pathname === "/" ? styles.active : ""} onClick={closeDropdown}>
              Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={pathname === "/about" ? styles.active : ""} onClick={closeDropdown}>
              About GeoSmart
          </Link>
        </li>
        <li className={styles.dropdown} onMouseLeave={closeDropdown}>
          <button onClick={toggleDropdown} className={styles.dropdownBtn}>
            Programs <svg className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg"><title>Sort-Down-arrow-drop-triangle</title><path d="M18,8H6a1,1,0,0,0-.71,1.71l6,6a1,1,0,0,0,1.41,0l6-6A1,1,0,0,0,18,8Z"/><text x="0" y="39" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by IconSrc</text><text x="0" y="40" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
          </button>
          {isDropdownOpen && (
            <ul className={styles.dropdownContent}>
              <li><Link href="/computer_application" className={pathname === "/computer_application" ? styles.active : ""} onClick={closeDropdown}>
                  Computer Application
              </Link></li>
              <li><Link href="/computer_maintainance" className={pathname === "/computer_maintainance" ? styles.active : ""} onClick={closeDropdown}>
                  Computer Maintainance
              </Link></li>
              <li><Link href="/computer_networking" className={pathname === "/computer_networking" ? styles.active : ""} onClick={closeDropdown}>
                  Computer Networking
              </Link></li>
              <li><Link href="/remote_sensing" className={pathname === "/remote_sensing" ? styles.active : ""} onClick={closeDropdown}>
                  Remote Sensing and GIS
              </Link></li>
              <li><Link href="/software-engineering" className={pathname === "/software-engineering" ? styles.active : ""} onClick={closeDropdown}>
                  Software Engineering
              </Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/contact" className={pathname === "/contact" ? styles.active : ""} onClick={closeDropdown}>Contact Us</Link>
        </li>
        <li> <Link className={styles.link} href="/validate">Verify Certificate</Link></li>
        
        <button className={styles.applyButton}>Apply Now</button>
      </ul>
    </nav>
  );
};

export default Navbar;
