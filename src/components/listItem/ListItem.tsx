import React from 'react'
import styles from "./listItem.module.scss";
import Image from 'next/image';

const ListItem = () => {
  return (
    <div className={styles.listItem}>
      <Image src="/catwomenshoes.jpg" alt="" width={500} height={500}/>
    </div>
  )
}

export default ListItem