"use client"

import React, { Suspense, useState } from 'react';
import styles from "./page.module.scss";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { CardData } from '@/components/cardList/cardData';
import Cart from '@/components/cart/Cart';

interface Item {
  img: string[];
  label: string;
  currPrice: string;
  prevPrice: string;
  color: string[];
}

const SinglePage = () => {
  const params = useParams();
  const {slug} = params;

//   search for item with the slug
const product = CardData.filter(item => item.slug === slug)[0];

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Handle the case where the items are not found
  if (!product) {
    return <div>No item Found</div>;
  }

  return (
    <div className={styles.container}>
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
      <div className={styles.right}>
        <h1>{product.label}</h1>
        <span>${product.currPrice}</span>
        <span>${product.prevPrice}</span>
                <div className={styles.selectColor}>
                    {product.color.map((color, index) => (
                        <div key={index} className={styles.color} style={{ backgroundColor: color }} />
                    ))}
                </div>
        <div className={styles.quantity}>
          <button className={styles.pButton} onClick={()=> setQuantity((prev)=> (prev === 1 ? 1 : prev-1))}>-</button>
          {quantity}
          <button className={styles.pButton} onClick={()=> setQuantity(prev=>prev+1)}>+</button>
          <button><Cart/></button>
        </div>
      </div>
    </div>
  );
};


export default SinglePage;
