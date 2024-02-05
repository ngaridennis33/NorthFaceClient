import React, { useState } from 'react';
import Dropdown from './dropDown/Dropdown';
import Link from 'next/link';
import { OpenDropdown } from '../hamburger/Hamburger';
import { NavBarDataMobile, NavBarDataMobileItem } from '@/components/menu/navData';
import styles from "./mobileLinks.module.scss";

interface MobileProps {
  handleHamburgerClose: () => void;
}

const Mobile: React.FC<MobileProps> = ({ handleHamburgerClose }) => {
  const [openDropDown, setOpenDropDown] = useState<string | null>(null);

  const openDropDownHandler = (label: string) => {
    if (label === openDropDown) return setOpenDropDown(null);
    setOpenDropDown(label);
  };

  return (
    <>
      {NavBarDataMobile.map(({ link, label, tree }:NavBarDataMobileItem, index) => {
        const isopen = openDropDown === label;

        return (
          <ul className={styles.navMenu} key={index}>
            {link && <li className={styles.navMenuItem}><Link onClick={handleHamburgerClose} href={link}>{label}</Link></li>}
            {!link && (
              <div className={styles.dropdownContainer} onClick={() => openDropDownHandler(label)}>
                <div className={styles.dropdownLabel} data-isopen = {isopen.toString()}>
                  <span>{label}</span> <OpenDropdown />
                </div>
              </div>
            )}
            {isopen && (<Dropdown handleHamburgerClose={handleHamburgerClose} tree={tree || []}/>)}
          </ul>
        );
      })}
    </>
  );
}

export default Mobile;