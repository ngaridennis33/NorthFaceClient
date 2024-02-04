"use client"
import React, { Fragment, useState } from 'react'
import styles from "./dropDown.module.scss"
import Link from 'next/link'
import { OpenDropdown } from '../../hamburger/Hamburger'


const TreeItem = ({label, children, link,handleHamburgerClose})=>{
const [dataisopen, setIsOpen] = useState(false)

return(
    <div className={styles.treeItemContainer}>
        {link && (<li className={styles.navMenuItem}><Link style={{width:"100%",padding: "0 10px"}}  href={link}>{label}</Link></li>)}
        {!link && (<div className={styles.dropdownContainer} onClick={() => setIsOpen((p)=> !p)}>
        <div dataisopen={dataisopen.toString()} className={styles.dropdownLabel}> <span>{label}</span> <OpenDropdown/> </div>
        </div>)}
        {children && dataisopen && <div className={styles.treeChildContainer}>{children}</div>}
    </div>
    )
}

const Dropdown = ({tree,handleHamburgerClose, mode}) => {

const createTree = (branch) => (
    <TreeItem label={branch.label} link = {branch.link} handleHamburgerClose={handleHamburgerClose}>
    {branch?.branches?.map((branch, index) => (
                <Fragment key={index}>{createTree(branch)}</Fragment>
            ))}
    </TreeItem>

)
return (
    <div className={styles.dropdownContainer}>
        {tree.map((branch, index) => (
        <Fragment key={index}>{createTree(branch)}</Fragment>
        ))}
    </div>
    )
}

export default Dropdown