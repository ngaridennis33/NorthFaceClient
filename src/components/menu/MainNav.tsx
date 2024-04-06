"use client"
import React, { useEffect, useState } from 'react';
import Announcement from './announcement/Announcement';
import styles from './mainNav.module.scss';
import HeaderNav from './headerNav/HeaderNav';
import PrimaryNav from './primaryNav/PrimaryNav';

const MainNav =  () => {
      // Show box shadow on scroll
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const threshold =10; // Change this value to set your scroll threshold
      const isPastThreshold = window.scrollY > threshold;
      setIsVisible(!isPastThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  return (
    <nav className={styles.container}>

      {/* Announcement */}
      <div className={styles.announcement}>
        <Announcement />
      </div>

      {/* Header-Nav */}
      <div className={`${styles.headerNav} ${!isVisible ? styles.invinsible : ''}`}>
         <HeaderNav />
      </div>

      {/* Primary-Nav */}
      <div className={`${styles.primaryNav} ${!isVisible ? styles.invinsible : ''}`}>
        <PrimaryNav/>
      </div>
    </nav>
  );
};

export default MainNav;