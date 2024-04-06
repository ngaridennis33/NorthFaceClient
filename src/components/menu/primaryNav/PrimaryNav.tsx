"use client"

import React, { useEffect, useState } from 'react';
import { CartIcon } from '@/components/icons/Icons';
import Logo from '@/components/logo/Logo';
import DesktopLinks from './desktopNav/DesktopLinks';
import HeaderNav from '../headerNav/HeaderNav';
import MobileLinks from './mobileNav/mobileLinks/MobileLinks';
import { MenuClose, MenuOpen, SearchIcon } from './mobileNav/hamburger/Hamburger';
import Search from '../../search/Search';
import styles from './primaryNav.module.scss';

const PrimaryNav = () => {
  // Show box shadow on scroll
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 10; // Change this value to set your scroll threshold
      const isPastThreshold = window.scrollY > threshold;
      setIsVisible(!isPastThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle hamburger Open and close
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleHamburgerIcon = () => setNavbarOpen(!navbarOpen);
  const mobileMenu = `${styles.mobileLinks} ${navbarOpen ? styles.mobileLinksShow : ''}`;

  // Handle search Open and close
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearchIcon = () => setSearchOpen(!searchOpen);

  return (
    <div className={`${styles.container} ${!isVisible ? styles.invinsible : ''}`}>
      {/* Desktop View */}
      <div className={styles.deskTopwrapper}>
        {/* Logo Section */}
        <div className={styles.logo}>
          <Logo />
        </div>

        {/* Desktop Links Section */}
        <div className={styles.desktopLinks}>
          <DesktopLinks />
        </div>

        {/* Search Section */}
        <div className={styles.search}>
          <Search />
        </div>

        {/* Shopping Cart Section */}
        <div className={styles.cart}>
          <CartIcon />
        </div>
      </div>

      {/* Mobile View */}
      <div className={styles.mobileViewWrapper}>
        <div className={styles.left}>
          <Logo />
        </div>

        <div className={styles.right}>
          {searchOpen && <Search />}
          <div className={styles.searchIconToogle} onClick={toggleSearchIcon}>
            {searchOpen ? <MenuClose /> : <SearchIcon />}
          </div>

          <div>
            <CartIcon />
          </div>

          {/* Mobile View Hamburger */}
          <div className={styles.mobileHamburgerCotainer} onClick={toggleHamburgerIcon}>
            {navbarOpen ? <MenuClose /> : <MenuOpen />}
          </div>

          {/* MobileNav Links */}
          <div className={mobileMenu}>
            <MobileLinks handleHamburgerClose={toggleHamburgerIcon} />
            <HeaderNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNav;