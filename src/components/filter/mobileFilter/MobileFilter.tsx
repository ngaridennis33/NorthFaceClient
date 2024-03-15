import React, { FC } from "react";
import { FilterItem, filterData } from "../filterData";
import MobileFilterDropdown from "./dropdown/MobileFilterDropdown";
import styles from "./mobilefilter.module.scss";
import { MenuClose, OpenDropdown } from "@/components/menu/navBar/mobileNav/hamburger/Hamburger";

interface Props {
    openDropDownHandler: (label: string) => void;
    openDropDown: string | null;
    // openFilterSlider: boolean;
    toogleFilterSlider: () => void;
}

const MobileFilter: FC<Props> = ({ openDropDownHandler, openDropDown, toogleFilterSlider }) => {
    // const container = `${styles.container} ${openFilterSlider ? styles.showMenu : ""}`;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.title}>Filter Items</span>
                <div onClick={toogleFilterSlider}>
                    <MenuClose />
                </div>
            </div>
                {filterData.map(({ label, tree }: FilterItem, index: number) => {
                    const isopen = openDropDown === label;

                    return (
                        <div className={styles.filterItemsContainer} key={index}>
                            <div className={styles.items} onClick={() => openDropDownHandler(label)}>
                                <div>{label}</div>
                                <OpenDropdown />
                            </div>
                            {isopen && <MobileFilterDropdown tree={tree} />}
                        </div>
                    );
                })}
            </div>

            <div className={styles.bottom}>
                <button className={styles.actionBtn}>Clear All</button>
                <button className={styles.ctaBtn}>Apply</button>
            </div>
        </div>
    );
};

export default MobileFilter;
