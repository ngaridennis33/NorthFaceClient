"use client"

import React, { useState } from 'react';
import styles from "./page.module.scss";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface Item {
  img: string[];
  label: string;
  currPrice: string;
  prevPrice: string;
  color: string[];
}

const SinglePage = () => {
  const searchParams = useSearchParams();
  const itemsString = searchParams.get('items');

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

  // Parse the items string back to an object
  const parsedItems: Item | null = itemsString ? JSON.parse(itemsString) : null;
  if (!parsedItems) {
    // Handle the case where the items are not found
    return <div>Items not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.images}>
          {parsedItems && parsedItems.img.map((image, index) => (
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
          <Image className={styles.img} src={parsedItems.img[selectedImg]} width={500} height={500} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>Title</h1>
        <span>$999</span>
        <div className={styles.quantity}>
          <button>+</button>
          {quantity}
          <button>-</button>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
