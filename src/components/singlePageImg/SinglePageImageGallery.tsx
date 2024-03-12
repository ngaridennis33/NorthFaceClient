"use client";

import React, { useState } from 'react'
import styles from "./imagGallery.module.scss";
import Image from 'next/image';
import { Item } from '@/types';


interface ImageGalleryProps {
    product: Item;
}

const SinglePageImg = ({ product }: ImageGalleryProps)  => {
    const [selectedImg, setSelectedImg] = useState(0);
    
    // Show the Images on mobile screen.
    const [trajectory, setTrajectory] = useState<'l' | 'r' | ''>('');
    const [index, setIndex] = useState(0);

    const handleClick = (direction: 'l' | 'r') => {
        const maxIndex = product.img.length - 1;
        let nextIndex;

        if (direction === 'l') {
            nextIndex = index > 0 ? index - 1 : maxIndex;
            setTrajectory('l');
        } else {
            nextIndex = index < maxIndex ? index + 1 : 0;
            setTrajectory('r');
        }

        setIndex(nextIndex);
    };

  return (
    <div className={styles.left}>
        <div className={styles.images}>
          {product && product.img.map((image, index) => (
            <Image
              className={`${styles.img} ${selectedImg === index ? styles.selectedImg : ''}`}
              src={image}
              key={index}
              width={500}
              height={500}
              alt=""
              onClick={e => setSelectedImg(index)}
            />
          ))}
        </div>
        <div className={styles.mainImg}>
          <Image className={styles.imgBig} src={product.img[selectedImg]} width={500} height={500} alt="" />

        </div>
      </div>
  )
}

export default SinglePageImg