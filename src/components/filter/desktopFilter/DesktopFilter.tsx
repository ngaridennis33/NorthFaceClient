"use client"

import { OpenDropdown } from "@/components/menu/navbar/mobileNav/hamburger/Hamburger";
import styles from "./desktopfilter.module.scss"
import Dropdown from "./dropdown/Dropdown";
import React, { useState } from "react";
import { filterData } from "../filterData";

const DesktopFilter = ({openDropDownHandler,openDropDown}) => {


return (
    <div className={styles.box}>
    <div className={styles.left}>
    <ul className={styles.filterItems}>
    {filterData.map(({ label, tree }, index) => {
        const isopen = openDropDown === label;

        return (
        <React.Fragment key={index}>
            <div
            className={styles.filterItemsContainer}
            style={{
                background: isopen ? '#fff' : '#F8F8F8',
                zIndex: isopen ? '999' : '3',
                border: isopen ? '1px solid #b5b3b3' : '',
                borderBottom: isopen && '1px solid transparent',
            }}
            >
            <div className={styles.items} onClick={() => openDropDownHandler(label)}>
                <li>{label}</li>
               
                <OpenDropdown />
            </div>
            {isopen && <Dropdown tree={tree} />}
            </div>
        </React.Fragment>
        );
    })}
    </ul>
</div>
<div className={styles.right}>right</div>
</div>
)
}

export default DesktopFilter