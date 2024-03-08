"use client"

import CardList from '@/components/cardList/CardList';
import { CardData } from '@/components/cardList/cardData';
import { Item } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';
import styles from "./page.module.scss";
import Banner from '@/components/banner/Banner';
import Filter from '@/components/filter/Filter';

const Category = () => {
  const params = useParams();
  const { cat } = params;


  let products: Item[];

  // Check if cat is undefined, show all items

    // Filter items based on the provided cat
    products = CardData.filter(item => item.category === cat);

    // Handle the case where the items are not found
    if (products.length == 0) {
      return <div>Item not found</div>;
    }

  return (
    <div className={styles.container}>
      <Banner/>
      <Filter/>
      <hr />
      <CardList products={products} />
    </div>
  );
};

export default Category;
