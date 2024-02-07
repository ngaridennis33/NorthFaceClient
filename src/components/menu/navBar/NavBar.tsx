"use client"

import styles from "./navBar.module.scss";
import DesktopLinks from "./desktopNav/DesktopLinks";
import { MenuClose, MenuOpen, SearchIcon } from "./mobileNav/hamburger/Hamburger";
import Search from "../../search/Search";
import { useEffect, useState } from "react";
import Logo from "@/components/logo/Logo";
import Cart from "@/components/cart/Cart";
import TopNav from "../topnav/TopNav";
import Announcement from "@/components/announcement/Announcement";
import Mobile from "./mobileNav/mobileLinks/MobileLinks";

const NavBar = () => {

  // Show box shadow on scroll
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
          const threshold = 10; // Change this value to set your scroll threshold
          const isPastThreshold = window.scrollY > threshold;
          setIsVisible(!isPastThreshold);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  // Handle Announcement Timeout
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const handleAnnouncement = () => {
    setShowAnnouncement(!showAnnouncement);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnnouncement(false);
    }, 3000); // 3 seconds in milliseconds

    return () => clearTimeout(timeout); // Cleanup the timer if the component unmounts
  }, []);

  // Handle hamburger Open and close
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toogleHamburgerIcon = () => setNavbarOpen(!navbarOpen);

  // Handle search Open and close
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearchIcon = () => setSearchOpen(!searchOpen);

  return (
    <nav className={styles.container} style={{ boxShadow: !isVisible ? "0px 0px 10px rgba(0, 0, 0, 0.3)" : "" }}>
      {/* Announcement */}
      {showAnnouncement && (
        <div className={styles.announcement}>
          <Announcement handleAnnouncement={handleAnnouncement} />
        </div>
      )}

      {/* Top NavBar */}
      <div className={styles.topNav}>
        <TopNav />
      </div>

      {/* Bottom NavBar */}
      <div className={styles.box}>
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
            <Cart />
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

            <Cart />

            {/* Mobile View Hamburger */}
            <div className={styles.mobileHamburgerCotainer} onClick={toogleHamburgerIcon}>
              {navbarOpen ? <MenuClose /> : <MenuOpen />}
            </div>

            {/* MobileNav Links */}
            {navbarOpen && (
              <div className={styles.mobileLinks}>
                <Mobile handleHamburgerClose={toogleHamburgerIcon} />
                <TopNav />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
