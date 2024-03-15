"use client"

import styles from "./navBar.module.scss";
import DesktopLinks from "./desktopNav/DesktopLinks";
import { MenuClose, MenuOpen, SearchIcon } from "./mobileNav/hamburger/Hamburger";
import Search from "../../search/Search";
import { useEffect, useState } from "react";
import Logo from "@/components/logo/Logo";
import TopNav from "../topnav/TopNav";
import Announcement from "@/components/announcement/Announcement";
import Mobile from "./mobileNav/mobileLinks/MobileLinks";
import { CartIcon } from "@/components/icons/Icons";
import Cart from "@/components/cart/Cart";

const NavBar = () => {
  // Open and close Cart
  const [openCart,setOpenCart] = useState(false);

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
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const handleAnnouncement = () => {
      setShowAnnouncement(false);
      localStorage.setItem('announcementShown', 'true'); // Store flag in localStorage
  };

  useEffect(() => {
      const announcementShown = localStorage.getItem('announcementShown');
      if (!announcementShown) {
          setShowAnnouncement(true);
          const timeout = setTimeout(() => {
              setShowAnnouncement(false);
              localStorage.setItem('announcementShown', 'true'); // Update flag in localStorage after timeout
          }, 3000); // 3 seconds in milliseconds

          return () => clearTimeout(timeout); // Cleanup the timer if the component unmounts
      }
  }, []);

  // Handle hamburger Open and close
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toogleHamburgerIcon = () => setNavbarOpen(!navbarOpen);
  const mobileMenu = `${styles.mobileLinks} ${navbarOpen ? styles.mobileLinksShow : ""}`;

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
          <div className={styles.cart} onClick={()=> setOpenCart(!openCart)}>
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
            
            <div onClick={()=> setOpenCart(!openCart)}>
            <CartIcon />
            </div>


            {/* Mobile View Hamburger */}
            <div className={styles.mobileHamburgerCotainer} onClick={toogleHamburgerIcon}>
              {navbarOpen ? <MenuClose /> : <MenuOpen />}
            </div>

            {/* MobileNav Links */}
            {/* {navbarOpen && ( */}
              <div className={mobileMenu}>
                <Mobile handleHamburgerClose={toogleHamburgerIcon} />
                <TopNav />
              </div>
            {/* )} */}
          </div>
        </div>
      </div>
      {openCart && <Cart/>}
    </nav>
  );
};

export default NavBar;
