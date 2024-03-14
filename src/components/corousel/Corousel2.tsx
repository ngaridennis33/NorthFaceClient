"use client"

import React, { RefObject, useCallback, useRef, useState } from 'react'
import styles from "./corousel2.module.scss";
import { CardData } from '../cardList/cardData';
import Image from 'next/image';
import { LeftIcon, RightIcon } from '../icons/Icons';
import Link from 'next/link';
import { MobileSwipper } from '../mobile-sipper/MobileSwiper';

const Corousel = () => {
  const listRef: RefObject<HTMLDivElement> = useRef(null);
  const [slideIndex, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (listRef.current) {
        const slideWidthPercentage = 100;
        const maxSlides = Math.ceil(CardData.length / 4);
        let nextSlideIndex = slideIndex;

        if (direction === 'left' && slideIndex > 0) {
            nextSlideIndex = slideIndex - 1;
        } else if (direction === 'right' && slideIndex < maxSlides - 1) {
            nextSlideIndex = slideIndex + 1;
        }

        const translateValue = nextSlideIndex * -slideWidthPercentage;
        setSlideNumber(nextSlideIndex);
        listRef.current.style.transform = `translateX(${translateValue}%)`;
    }
};

  const handleSwipe = useCallback(({ deltaX }: { deltaX: number }) => {
    setIsMoved(true);
    const slideWidthPercentage = 100;
    const maxSlides = Math.ceil(CardData.length / 4);

    if (deltaX > 0 && slideIndex > 0) {
      const translateValue = (slideIndex - 1) * -slideWidthPercentage;
      setSlideNumber((prevSlideIndex) => prevSlideIndex - 1);
      listRef.current?.style.setProperty('transform', `translateX(${translateValue}%)`);
    } else if (deltaX < 0 && slideIndex < maxSlides - 1) {
      const translateValue = (slideIndex + 1) * -slideWidthPercentage;
      setSlideNumber((prevSlideIndex) => prevSlideIndex + 1);
      listRef.current?.style.setProperty('transform', `translateX(${translateValue}%)`);
    }
  }, [slideIndex]);

  return (
    <MobileSwipper onSwipe={handleSwipe}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Popular Items</h1>
      </div>
    <div className={styles.wrapper}>
    <div className={styles.handle} onClick={() => handleClick('left')} style={{left:".5rem", display:!isMoved ? "none": "block"}}>
        <LeftIcon/>
      </div>
      <div className={styles.slider} ref={listRef}>
      {CardData.map((items)=>(
        <Link href={`/${items.category}`} key = {items.id} className={styles.imgLink}>
          <Image className={styles.img} width={500} height={500} alt = ""src={items.img[0]} style={{background:items.color[0]}}/>
          <div className={styles.bg} ><span>{items.category}</span></div>
        </Link>
        ))}
      </div>
      <div className={styles.handle} onClick={() => handleClick('right')} style={{right:".5rem"}}>
        <RightIcon/>
      </div>
    </div>
        </div>
        </MobileSwipper>
  )
}

export default Corousel