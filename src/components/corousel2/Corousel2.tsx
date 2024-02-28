"use client"

import React, { RefObject, useRef, useState } from 'react'
import styles from "./corousel2.module.scss";
import { CardData } from '../cardList/cardData';
import Image from 'next/image';
import { LeftIcon, RightIcon } from '../icons/Icons';

const Corousel = () => {
  const listRef: RefObject<HTMLDivElement> = useRef(null);
  const [slideIndex, setSlideNumber] = useState(1);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    console.log("clicked");
    if (listRef.current) {
      const slideWidthPercentage = 100;
      const maxSlides = CardData.length;
  
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
      <div className={`${styles.handle} ${styles.left}`} onClick={() => handleClick('left')} >
        <LeftIcon/>
      </div>
      <div className={styles.slider} ref={listRef}>
      {CardData.map((items)=>(
          <Image className={styles.img} width={500} height={500} alt = "" key = {items.id} src={items.img[0]}/>
        ))}
      </div>
      <div className={`${styles.handle} ${styles.right}`}onClick={() => handleClick('right')} >
        <RightIcon/>
      </div>

    </div>
  )
}

export default Corousel