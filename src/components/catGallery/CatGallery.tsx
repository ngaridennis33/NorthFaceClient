import React from 'react';
import styles from "./catGallery.module.scss";
import Image from 'next/image';
import Link from 'next/link';

const CatGallery = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1 >
      <div className={styles.wrapper}>
      <div className={styles.col}>
        <div className={styles.row}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="/catkids.jpg" alt="" width={500} height={500}/>
            <div className={styles.overlay}></div>
            <div className={styles.center}><span className={styles.catName}>@Kids</span>
              <button className={styles.catBtn}><Link href="/"> Sale </Link></button>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="/catbag.jpg" alt="" width={500} height={500}/>
            <div className={styles.overlay}></div>
            <div className={styles.center}><span className={styles.catName}>@bags</span>
              <button className={styles.catBtn}><Link href="/"> Sale </Link></button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="/blackFriday.jpg" alt="" width={500} height={500}/>
            <div className={styles.overlay}></div>
            <div className={styles.center}><span className={styles.catName}>@promotions</span>
              <button className={styles.catBtn}><Link href="/"> Sale </Link></button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.col} ${styles.col_l}`}>
        <div className={`${styles.row} ${styles.row_l}`}>
          <div className={styles.col}>
            <div className={styles.row}>
              <div className={styles.imgContainer}>
                <Image className={styles.img} src="/catmen.jpg" alt="" width={500} height={500}/>
                <div className={styles.overlay}></div>
                <div className={styles.center}><span className={styles.catName}>@men</span>
              <button className={styles.catBtn}><Link href="/"> Sale </Link></button>
            </div>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <div className={styles.imgContainer}>
                <Image className={styles.img} src="/catwomenshoes.jpg" alt="" width={500} height={500}/>
                <div className={styles.overlay}></div>
                <div className={styles.center}><span className={styles.catName}>@shoes</span>
              <button className={styles.catBtn}><Link href="/"> Sale </Link></button>
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="/banner.jpg" alt="" width={500} height={500}/>
            <div className={styles.overlay}></div>
            <div className={styles.center}><span className={styles.catName}>@women</span>
              <button className={styles.catBtn}><Link href="/"> Sale </Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CatGallery;