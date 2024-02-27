"use client"

import CardList from '@/components/cardList/CardList';
import { CardData } from '@/components/cardList/cardData';
import { Item } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';

const Category = () => {
  const params = useParams();
  const { cat } = params;
  console.log(cat);

  let products: Item[];

  // Check if cat is undefined, show all items
  if (cat === undefined) {
    products = CardData;
  } else {
    // Filter items based on the provided cat
    products = CardData.filter(item => item.category === cat);
  }
  console.log(products)
  console.log(CardData)

  return (
    <div>
      <CardList products={products} />
    </div>
  );
};

export default Category;
