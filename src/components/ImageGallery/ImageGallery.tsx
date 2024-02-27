"use client";

import React, { useState } from 'react'
import styles from "./imagGallery.module.scss";
import Image from 'next/image';
import { Item } from '@/types';


interface ImageGalleryProps {
    product: Item;
}

const ImageGallery = ({ product }: ImageGalleryProps)  => {
    const [selectedImg, setSelectedImg] = useState(0);
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
          <Image className={styles.img} src={product.img[selectedImg]} width={500} height={500} alt="" />
        </div>
      </div>
  )
}

export default ImageGallery