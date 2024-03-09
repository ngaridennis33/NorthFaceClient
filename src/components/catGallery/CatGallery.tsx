import React from 'react'
import styles from "./catGallery.module.scss";
import Image from 'next/image';
import Link from 'next/link';

const CatGallery = () => {
  return (
    <div className={styles.container}>
        <div className={styles.col}>
            <div className={styles.row}> <Image className={styles.img} src="/catkids.jpg" alt="" width={500} height={500}/><button className={styles.catBtn}><Link href="/"> Sale </Link></button></div>
            <div className={styles.row}> <Image className={styles.img} src="/catkids.jpg" alt="" width={500} height={500}/><button className={styles.catBtn}><Link href="/"> Sale </Link></button></div>
        </div>
        <div className={styles.col}>
        <div className={styles.row}> <Image className={styles.img} src="/catwomen.jpg" alt="" width={500} height={500}/><button className={styles.catBtn}><Link href="/"> Sale </Link></button></div>
        </div>
        <div className={`${styles.col} ${styles.col_l}`}>
        <div className={styles.row}>
        <div className={styles.col}>
        <div className={styles.row}> <Image className={styles.img} src="/catmen.jpg" alt="" width={500} height={500}/><button className={styles.catBtn}><Link href="/"> Sale </Link></button></div>
        </div>
        <div className={styles.col}>
        <div className={styles.row}> <Image className={styles.img} src="/catbag.jpg" alt="" width={500} height={500}/><button className={styles.catBtn}><Link href="/"> Sale </Link></button></div>
         </div>

        </div>
        <div className={styles.row}> <Image className={styles.img} src="/banner.jpg" alt="" width={500} height={500}/><button className={styles.catBtn}><Link href="/"> Sale </Link></button></div>
            
        </div>
    </div>
  )
}

export default CatGallery