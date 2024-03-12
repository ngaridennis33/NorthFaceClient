"use client"

import React, { Suspense, useState } from 'react';
import styles from "./page.module.scss";
import { useParams } from 'next/navigation';
import { CardData } from '@/components/cardList/cardData';
import ProductDetails from '@/components/productDetails/ProductDetails';
import SinglePageImageGallery from '@/components/ImageGallery/ImageGallery';


const SinglePage = () => {
  const params = useParams();
  const {slug} = params;

//   search for item with the slug
const product = CardData.filter(item => item.slug === slug)[0];


  // Handle the case where the items are not found
  if (!product) {
    return <div>No item Found</div>;
  }

  return (
    <div className={styles.container}>
      <SinglePageImageGallery product={product}/>
      <ProductDetails product={product}/>
    </div>
  );
};


export default SinglePage;
