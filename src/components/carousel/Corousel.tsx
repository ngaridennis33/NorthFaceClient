"use client"

import React, { useRef, RefObject, useState } from 'react';
import styles from './carousel.module.scss';
import ListItem from '../listItem/ListItem';
import { LeftIcon, RightIcon } from '../icons/Icons';
import { CardData } from '../cardList/cardData';


const Carousel = () => {
  const listRef: RefObject<HTMLDivElement> = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (listRef.current) {
      const distance = listRef.current.getBoundingClientRect().x - 50;
  
      if (direction === 'left' && slideNumber > 0) {
        setSlideNumber(slideNumber - 1)
        const translateValue = 230 + distance;
        listRef.current.style.transform = `translateX(${translateValue}px)`;
      } else if (direction === 'right' && slideNumber < 5) {
        setSlideNumber(slideNumber + 1)
        const translateValue = -230 + distance;
        listRef.current.style.transform = `translateX(${translateValue}px)`;
      }
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Black Friday Sale</span>
      <div className={styles.wrapper}>
        <div className={`${styles.icon} ${styles.left}`} onClick={() => handleClick('left')} style={{ opacity: slideNumber === 0 ? '.1' : 1 }}>
          <LeftIcon />
        </div>

        <div className={styles.list} ref={listRef}>
            {CardData.map((items)=>(

          <ListItem items={items} key={items.id} />
            ))}

        </div>

        <div className={`${styles.icon} ${styles.right}`} onClick={() => handleClick('right')}>
          <RightIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
