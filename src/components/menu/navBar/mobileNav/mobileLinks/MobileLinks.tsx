import React, { useContext, useState } from 'react'
import styles from "./mobileLinks.module.scss"
import Dropdown from './dropDown/Dropdown'
import Link from 'next/link'
import {NavBarDataMobile } from '../../../navLinksData'
import { OpenDropdown } from '../hamburger/Hamburger'

const Mobile = ({handleHamburgerClose}) => {

    const [openDropDown, setOpenDropDown] = useState(null)
    const openDropDownHandler = (label)=>{
        if(label === openDropDown) return setOpenDropDown(null);
        setOpenDropDown(label)
    }

    return (
    <>
        {NavBarDataMobile.map(({link, label,tree},index) => {
        const isopen = openDropDown === label;
        
            return(
            <ul className={styles.navMenu} key = {index}>
            {link && <li className={styles.navMenuItem}><Link onClick={handleHamburgerClose} href={link}>{label}</Link></li>}
            {!link && (<div className={styles.dropdownContainer} onClick={() => openDropDownHandler(label)}>
                <div className={styles.dropdownLabel} dataisopen={isopen.toString()}><span>{label}</span> <OpenDropdown/> </div>
            </div>)}
            {isopen && (<Dropdown handleHamburgerClose = {handleHamburgerClose} tree = {tree}/>)}
            </ul>
        );
        })}
    </>
    )
    }

export default Mobile