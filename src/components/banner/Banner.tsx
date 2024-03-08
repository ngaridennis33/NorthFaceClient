import React from 'react'
import styles from "./banner.module.scss"
import Image from 'next/image'

const Banner = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
        <div className={styles.textBox}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Elevate Your Style in the Women&apos;s Wardrobe Wonderland</h1>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolorem accusamus eum iusto iure quisquam?</p>
            <button className={styles.ctaBtn}>Get Started</button>
            </div>
        </div>
        <div className={styles.imageBox}>
                <Image className={styles.img} width={500} height={500} src="/catwomen.jpg" alt=""/>
        </div>
    </div>
    </div>
  )
}

export default Banner