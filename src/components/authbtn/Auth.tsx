import React from 'react'
import styles from "./auth.module.scss";
import Link from 'next/link';

const Auth = () => {

  return (
    <div className={styles.container}>
        <Link href="/login">
        <button className={styles.btn}>Sign In</button>
        </Link>
    </div>
  )
}

export default Auth