import React from 'react';
import { Item } from '@/types'
import Card from './card/Card'
import styles from "./cardList.module.scss"

interface CardListProductProps{
  products: Item[];
  type:string;
}
const CardList: React.FC<CardListProductProps> = ({ products, type }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}> {type} Products</h1>
      </div>
        <div className={styles.wrapper}>
          {products && products.map((items)=>(
            <Card key={items.id} items={items}/>
          ))}
        </div>
        <div className={styles.more}><button className={styles.ctaBtn}>Show More (24)</button></div>

          
    </div>
  )
}

export default CardList