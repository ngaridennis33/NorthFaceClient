import React, { Fragment, useState, ReactNode } from 'react';
import Link from 'next/link';
import styles from "./dropDown.module.scss";
import { OpenDropdown } from '../../hamburger/Hamburger';

interface TreeItemProps {
  label: string;
  children?: ReactNode;
  link?: string;
  handleHamburgerClose: () => void;
}

const TreeItem: React.FC<TreeItemProps> = ({ label, children, link, handleHamburgerClose }) => {
  const [dataisopen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.treeItemContainer}>
      {link && (
        <li className={styles.navMenuItem}>
          <Link style={{ width: '100%', padding: '0 10px' }} href={link}>
            {label}
          </Link>
        </li>
      )}
      {!link && (
        <div className={styles.dropdownContainer} onClick={toggleIsOpen}>
          <div data-isopen={dataisopen.toString()} className={styles.dropdownLabel}>
            <span>{label}</span> <OpenDropdown />
          </div>
        </div>
      )}
      {children && dataisopen && <div className={styles.treeChildContainer}>{children}</div>}
    </div>
  );
};

interface DropdownProps {
  tree: { label: string; link?: string; branches?: any[] }[];
  handleHamburgerClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ tree, handleHamburgerClose }) => {
  const createTree = (branch: { label: string; link?: string; branches?: any[] }) => (
    <TreeItem key={branch.label} label={branch.label} link={branch.link} handleHamburgerClose={handleHamburgerClose}>
      {branch?.branches?.map((branch) => createTree(branch))}
    </TreeItem>
  );

  return <div className={styles.dropdownContainer}>{tree.map((branch) => createTree(branch))}</div>;
};

export default Dropdown;
