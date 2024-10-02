// components/Navbar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import your CSS module

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/assets/ncrs-logo.png" alt="NCRS Logo" className={styles.logoImage} />
        </Link>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About GeoSmart</Link>
        </li>
        <li className={styles.dropdown}>
        <button onClick={toggleDropdown} className={styles.dropdownBtn}>
            Programs <svg className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
          </button>
          {isDropdownOpen && (
            <ul className={styles.dropdownContent}>
              <li><Link href="/computer-application">Computer Application</Link></li>
              <li><Link href="/computer-maintainance">Computer Maintainance</Link></li>
              <li><Link href="/computer-Networking">Computer Networking</Link></li>
              <li><Link href="/remote-sensing">Remote Sensing and GIS</Link></li>
              <li><Link href="/software-engineering">Software Engineering</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/validate">Verify Certificate</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us  </Link>
        </li>
        <button className={styles.applyButton}>Apply Now</button>
      </ul>
    </nav>
  );
};

export default Navbar;
