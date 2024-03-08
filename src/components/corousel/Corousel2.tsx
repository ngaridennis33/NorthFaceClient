"use client"

import React, { RefObject, useRef, useState } from 'react'
import styles from "./corousel2.module.scss";
import { CardData } from '../cardList/cardData';
import Image from 'next/image';
import { LeftIcon, RightIcon } from '../icons/Icons';
import Link from 'next/link';

const Corousel = () => {
  const listRef: RefObject<HTMLDivElement> = useRef(null);
  const [slideIndex, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    console.log("clicked");
    if (listRef.current) {
      const slideWidthPercentage = 100;
      const maxSlides = CardData.length/4;
      console.log(slideIndex)
  
      if (direction === 'left' && slideIndex > 0) {
        const translateValue = (slideIndex - 1) * -slideWidthPercentage;
        setSlideNumber(slideIndex - 1);
        listRef.current.style.transform = `translateX(${translateValue}%)`;
      } else if (direction === 'right' && slideIndex < maxSlides - 1) {
        const translateValue = (slideIndex + 1) * -slideWidthPercentage;
        setSlideNumber(slideIndex + 1);
        listRef.current.style.transform = `translateX(${translateValue}%)`;
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Black Friday Sale</h1>
      </div>
    <div className={styles.wrapper}>
      <div className={styles.handle} onClick={() => handleClick('left')} style={{left:".5rem"}}>
        <LeftIcon/>
      </div>
      <div className={styles.slider} ref={listRef}>
      {CardData.map((items)=>(
        <Link href={`/${items.category}`} key = {items.id} className={styles.imgLink}>
          <Image className={styles.img} width={500} height={500} alt = ""src={items.img[0]}/>
          <div className={styles.bg}></div>
        </Link>
        ))}
      </div>
      <div className={styles.handle} onClick={() => handleClick('right')} style={{right:".5rem"}}>
        <RightIcon/>
      </div>
    </div>
        </div>
  )
}

export default Corousel