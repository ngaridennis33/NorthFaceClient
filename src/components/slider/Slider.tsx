"use client"

import React, { useCallback, useState } from 'react'
import styles from "./slider.module.scss"
import { CategoriesData } from '../menu/navData'
import Image from 'next/image'
import { MobileSwipper } from '../mobile-sipper/MobileSwiper'

const Slider = () => {
    const [currSlide, setcurrSlide] = useState(0);
    const numSlides = CategoriesData.length -1;

    const prevSlide=()=>{
        setcurrSlide(currSlide === 0 ? numSlides : (prev) => prev -1 )
    }
    const nextSlide=()=>{
        setcurrSlide(currSlide === numSlides ? 0 : (prev) => prev + 1 )
    }

    const handleSwipe = useCallback(({ deltaX, deltaY }: { deltaX: number, deltaY: number }) => {
        if (Math.abs(deltaX) > 0) {
            prevSlide();
        } else if (deltaX < 0) {
            nextSlide();
        }
        console.log(currSlide)
    }, [prevSlide, nextSlide]);

  return (
    <MobileSwipper onSwipe={handleSwipe}>
    <div className={styles.slider}>
        <div className={styles.container} style={{transform:`translateX(-${currSlide  * 100}vw)`}}>
        {CategoriesData.map((category, index) => (
                <div key={index} className={styles.wrapper}>
                <Image
                    className={styles.img}
                    src={category.img}
                    alt={category.label}
                    width={500}
                    height={500}
                />
                <div className={styles.textWrapper} style={{background:`${category.bg}`}}>
                        <span className={styles.featuredCategory}>{category.label}</span>
                        <span className={styles.offer}> 50% OFF </span>
                        <span className={styles.text}>🎉 Exclusive Offer! Limited Time Only! 🎁 </span>
                        <button className={styles.ctaBtn}>View Offer</button>
                </div>
                    </div>
            ))}
        </div>
        <div className={styles.iconWrapper}>

        <div className={styles.icon} onClick={prevSlide}>
        <svg width={40} height={40} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path fill='#000' d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z"/></g></svg>
        </div>

        <div className={styles.icon} onClick={nextSlide}>
        <svg width={40} height={40} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path fill='#000' d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"/></g></svg>
        </div>
        </div>
    </div>
    </MobileSwipper>
  )
}

export default Slider