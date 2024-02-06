"use client"

import React, { useState } from 'react';
import styles from './filter.module.scss';
import DesktopFilter from './desktopFilter/DesktopFilter';
import MobileFilter from './mobileFilter/MobileFilter';



const Filter = () => {

  const [openFilterSlider, setOpenFilterSlider] = useState(false);
  const [openDropDown, setOpenDropDown] = useState<string | null>(null);

  const openDropDownHandler = (label:string | null ) => {
      if (label === openDropDown) return setOpenDropDown(null);
      setOpenDropDown(label);
  };


  const toogleFilterSlider=()=>{
    setOpenFilterSlider(!openFilterSlider);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.setionTitle}>Sale</span>

        {/* Mobile Filter View */}
        <div className={styles.mobileFilter} onClick={toogleFilterSlider}>
          <div className={styles.filterContainer}>
            <li>Filters and Sort</li>
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#5a5858" d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z" />
            </svg>
          </div>
        </div>


        {openFilterSlider && <MobileFilter openDropDownHandler = {openDropDownHandler} openDropDown={openDropDown} openFilterSlider={openFilterSlider} toogleFilterSlider={toogleFilterSlider}/>}
        <DesktopFilter openDropDownHandler = {openDropDownHandler} openDropDown={openDropDown}/>


      </div>
    </div>
  );
};

export default Filter;
