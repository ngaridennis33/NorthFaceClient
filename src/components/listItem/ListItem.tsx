import React from 'react'
import styles from "./listItem.module.scss";
import Image from 'next/image';
import Cart from '../cart/Cart';
import { Item } from '@/types';

interface ListItemProps{
  items:Item;
}
const ListItem = ({items}:ListItemProps) => {
  return (
    <div className={styles.listItem}>
      <Image className={styles.img} src={items.img[0]} alt="" width={500} height={500}/>
    </div>
  )
}

export default ListItem