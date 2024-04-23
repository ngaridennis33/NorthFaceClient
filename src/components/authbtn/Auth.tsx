import React, { ReactNode, useContext } from 'react'
import styles from "./auth.module.scss";
import Link from 'next/link';
import Confirm from '../confirm/Confirm';
import { ModalContext } from '../context/ModalContext';
import { logout } from '../../../utils/actions';

export const SignInBtn = () => {

  return (
    <div className={styles.container}>
        <Link href="/login">
        <button className={styles.btn}>Sign In</button>
        </Link>
    </div>
  )
}

export const SignOutBtn = () => {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await logout();
  };
  // const {openModal} = useContext(ModalContext);

  return (
    <div className={styles.container}>
    {/* <div className={styles.container} onClick={() => openModal(<Confirm title="Sign Out" svg="" desc="Are you sure you want to log Out?" />)}> */}
        <button className={styles.btn} onClick={handleClick} >Sign Out</button>
    </div>
    // </div>
  )
}