import React from "react";
import styles from "./mobileFilterDropdown.module.scss";

interface TreeItem {
    label: string;
    color?: string;
}

interface Props {
    tree: TreeItem[];
}

const MobileFilterDropdown = ({ tree }: Props) => {
    return (
        <div className={styles.dropdown}>
            <ul className={styles.list}>
                {tree.map(({ label, color }, index) => (
                    <li key={index} className={styles.listItems}>
                        {/* Check Box */}
                        <div className={styles.content}>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" className={styles.checkbox} />
                            </label>
                        </div>
                        {color && <div className={styles.color} style={{ background: `${color}` }} />}
                        <span>{label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileFilterDropdown;
