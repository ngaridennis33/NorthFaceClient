"use client";

import React from "react";
import styles from "./desktopFilter.module.scss";
import Dropdown from "./dropdown/Dropdown";
import { filterData } from "../filterData";
import { OpenDropdown } from "@/components/menu/primaryNav/mobileNav/hamburger/Hamburger";

interface FilterItem {
  label: string;
  tree: { label: string; color?: string }[];
}

interface DesktopFilterProps {
  openDropDownHandler: (label: string | null) => void;
  openDropDown: string | null;
}

const isFilterItem = (data: any): data is FilterItem => {
  return (
    typeof data === "object" &&
    data !== null &&
    "label" in data &&
    "tree" in data &&
    Array.isArray(data.tree)
  );
};

const DesktopFilter: React.FC<DesktopFilterProps> = ({ openDropDownHandler, openDropDown }) => {
  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <ul className={styles.filterItems}>
          {filterData.map((item, index) => {
            if (!isFilterItem(item)) {
              return null;
            }
            const { label, tree } = item;
            const isopen = openDropDown === label;

            return (
              <React.Fragment key={index}>
                <div
                  className={styles.filterItemsContainer}
                  style={{
                    background: isopen ? "#fff" : "#F8F8F8",
                    zIndex: isopen ? "999" : "3",
                    border: isopen ? "1px solid #b5b3b3" : "",
                    borderBottom: isopen ? "1px solid transparent" : "",
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
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <button className={styles.borderbtn}>Sort by Relevence</button>
        </div>
      </div>
    </div>
  );
};

export default DesktopFilter;
