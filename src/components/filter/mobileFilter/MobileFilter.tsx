import { MenuClose, OpenDropdown } from "@/components/menu/navbar/mobileNav/hamburger/Hamburger";
import React from "react";
import { filterData } from "../filterData";
import MobileFilterDropdown from "./dropdown/MobileFilterDropdown";
import styles from "./mobilefilter.module.scss"


const MobileFilter = ({openDropDownHandler, openDropDown, openFilterSlider, toogleFilterSlider}) => {
    const container = `${styles.container} ${openFilterSlider === true ? styles.showMenu  : ''}`;
    
return (
<div className={container}>
    <div className={styles.header}>
        <span className={styles.title}> Sales</span>
        <div onClick={toogleFilterSlider}>
            <MenuClose/>
        </div>
    </div>

    <ul className={styles.filterItems}>
    {filterData.map(({ label, tree }, index) => {
        const isopen = openDropDown === label;

        return (
            <div className={styles.filterItemsContainer} key={index}>
            <div className={styles.items} onClick={() => openDropDownHandler(label)}>
                <li>{label}</li>
                <OpenDropdown />
            </div>
            {isopen && <MobileFilterDropdown tree={tree} />}
            </div>
        );
    })}

    </ul>

    <div className={styles.bottom}>
        <button className={styles.actionBtn}>Clear All</button>
        <button className={styles.ctaBtn}>Apply</button>
    </div>

</div>
)
}

export default MobileFilter