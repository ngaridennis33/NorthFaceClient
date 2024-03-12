import React from 'react'
import styles from "./footer.module.scss";
import { CategoriesData, TopNavData } from '../menu/navData';
import Logo from '../logo/Logo';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.item}>
          <h1 className={styles.title}> Categories</h1>
          {CategoriesData.map((cat,index)=>(
            <Link href={cat.link} className={styles.link} key={index}>
              <span className={styles.links}>{cat.label}</span>
            </Link>
          ))}
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}> Links</h1>
          {TopNavData.map((item,index)=>(
            <Link href={item.link} className={styles.link} key={index}>
            <span className={styles.links}>{item.label}</span>
          </Link>
          ))}
        </div>

        
        <div className={`${styles.item} ${styles.text}`}>
          <h1 className={styles.title}>About</h1>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perferendis unde maxime voluptate magnam minus consectetur mollitia a, porro quibusdam.</span>
        </div>

        
        <div className={`${styles.item} ${styles.text}`}>
          <h1 className={styles.title}>Contact</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>

      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <Logo/>
          <span className={styles.copyright}>© copyright 2024. All RIghts Reserved</span>
        </div>
        <div className={styles.right}>
          <Image className={styles.img} src="/payment.png" width={500} height={500} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Footer