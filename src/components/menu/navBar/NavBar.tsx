"use client"

import styles from "./navBar.module.scss"
import DesktopLinks from "./desktopNav/DesktopLinks"
import { MenuClose, MenuOpen, SearchIcon } from "./mobileNav/hamburger/Hamburger"
import Search from "../../search/Search"
import Cart from "../../cart/Cart"
import { useContext, useEffect, useState } from "react"
import Mobile from "./mobileNav/mobileLinks/MobileLinks"
import TopNav from "../topNav/TopNav"
import Announcement from "../announcement.jsx/Announcement"
// import SignIn from "@/components/authLinks/signin/Signin"
import Modal from "@/components/modal/Modal"
import { ModalContext } from "@/components/context/ModalContext"
import Logo from "@/components/logo/Logo"


const NavBar = () => {

    //Handle the modal
    const {isModalOpen,openModal, modalContent,} = useContext(ModalContext);

    // Handle Announcement Timeout
    const [showAnnouncement, setShowAnnouncement] = useState(true);
    const handleAnnouncement=()=>{
        setShowAnnouncement(!showAnnouncement);
    }

    useEffect(() => {
    const timeout = setTimeout(() => {
        setShowAnnouncement(false);
    }, 3000); // 10 seconds in milliseconds

    return () => clearTimeout(timeout); // Cleanup the timer if the component unmounts
    }, []);


    // Handle hamburger Open and close 
    const [navbarOpen,setNavbarOpen] = useState(false);
    const toogleHamburgerIcon = () => setNavbarOpen(!navbarOpen);

     // Handle hamburger Open and close 
     const [searchOpen,setSearchOpen] = useState(false);
     const toggleSearchIcon = () => setSearchOpen(!searchOpen);

    // All components Using the Modal
    const modalComponents = {
        // login: <SignIn openModal={openModal} />,
        // Add more content types and their corresponding components here
    }; 

  return (
    <>
   {isModalOpen &&
          <Modal isModalOpen={isModalOpen}>
          {modalComponents[modalContent] || (""
          )}
        </Modal>
        }

    <nav className={styles.container}>

        {/* Announcement */}
        {showAnnouncement && (<div className={styles.announcement}> <Announcement handleAnnouncement={handleAnnouncement}/> </div>)}
        
        {/* Top NavBar */}
        <div className={styles.topNav}> <TopNav openModal={openModal}/></div>
        
        {/* Bottom NavBar */}
    <div className={styles.box}>

        {/* Desktop View */}
        <div className={styles.deskTopwrapper}>

            {/* Logo Section */}
            <div className={styles.logo}>
                <Logo/>
            </div>

            {/* Desktop Links Section */}
            <div className={styles.desktopLinks}>
                <DesktopLinks/>
            </div>

            {/* Search Section */}
            <div className={styles.search}>
                <Search/>
            </div>

            {/* Shopping Cart Section  */}
            <div className={styles.cart}>
                <Cart/>
            </div>

        </div>

        {/* Mobile View */}
        <div className={styles.mobileViewWrapper}>

            <div className={styles.left}>
                <Logo/>
            </div>

            <div className={styles.right}>
                {searchOpen && <Search/>} 
                <div className={styles.searchIconToogle} onClick={toggleSearchIcon}>
                    {searchOpen ? <MenuClose/> : <SearchIcon/>}
                </div>
                
                <Cart/>
                {/* Mobile View Hamburger */}
                <div className={styles.mobileHamburgerCotainer} onClick={toogleHamburgerIcon}>
                    {navbarOpen ? <MenuClose /> : <MenuOpen />}
                </div>

                {/* MobileNav Links */}
                {navbarOpen && (<div className={styles.mobileLinks}>
                    <Mobile handleHamburgerClose={toogleHamburgerIcon}/>
                    <TopNav/>
                </div>)}

            </div>
        </div>
    </div>
    </nav>
    </>
    )
}

export default NavBar