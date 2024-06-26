"use client"

import React, { Suspense, useState } from 'react';
import styles from "./page.module.scss";
import { useParams } from 'next/navigation';
import { CardData } from '@/components/cardList/cardData';
import ProductDetail from '@/components/productDetail/ProductDetail';
import CardList from '@/components/cardList/CardList';
import Corousel from '@/components/corousel/Corousel2';



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
      <ProductDetail product={product}/>
      <Corousel type="Similar Products"/>
    </div>
  );
};


export default SinglePage;
