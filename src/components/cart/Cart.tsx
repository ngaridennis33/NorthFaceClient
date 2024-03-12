import React from 'react'
import styles from "./cart.module.scss";
import Image from 'next/image';
import { DeleteIcon } from '../icons/Icons';

const CartData = [
  {
      id:1,
      slug:"mens-Lhotse-1",
      label:"Men’s Lhotse Reversible Hoodie",
      category:"black-friday-sale",
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque provident hic illo consequatur ab soluta consectetur id vero veniam incidunt, quibusdam labore illum dolor ipsum. Ullam deleniti explicabo quibusdam, vitae quod at obcaecati harum eius natus, tenetur modi nulla dolores iste dolor rerum eveniet. Tempore rerum nobis quibusdam, voluptate voluptatum ullam voluptatibus, maxime ut eum adipisci, deleniti dolor distinctio qui ad. Quae molestiae harum cum eos cumque assumenda obcaecati, a fugit eius velit dignissimos ab amet quia facilis commodi ipsa tempore iste architecto expedita nobis repellendus. Reiciendis vitae praesentium, minus autem quis laudantium earum dignissimos sunt sit quisquam. Illum, iure",
      img:[
          "/catwomen.jpg",
          "/catkids.jpg",
          "/catmen.jpg",
          "/catwomenshoes.jpg",
      ],
      prevPrice:"280.00",
      currPrice:"196.00",
      color:[
          "#000",
          "#999",
          "#e4e4",
          "#80e3"
      ]
  },
  {
      id:2,
      slug:"mens-Lhotse-2",
      label:"Women’s Lhotse Reversible Jacket",
      category:"womens",
      img:[
          "/catkids.jpg",
          "/catmen.jpg",
          "/catwomenshoes.jpg",
          "/catwomen.jpg"
      ],
      prevPrice:"280.00",
      currPrice:"196.00",
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque provident hic illo consequatur ab soluta consectetur id vero veniam incidunt, quibusdam labore illum dolor ipsum. Ullam deleniti explicabo quibusdam, vitae quod at obcaecati harum eius natus, tenetur modi nulla dolores iste dolor rerum eveniet. Tempore rerum nobis quibusdam, voluptate voluptatum ullam voluptatibus, maxime ut eum adipisci, deleniti dolor distinctio qui ad. Quae molestiae harum cum eos cumque assumenda obcaecati, a fugit eius velit dignissimos ab amet quia facilis commodi ipsa tempore iste architecto expedita nobis repellendus. Reiciendis vitae praesentium, minus autem quis laudantium earum dignissimos sunt sit quisquam. Illum, iure",
      color:[
          "#000",
          "#999",
          "#e4e4",
          "#80e3"
      ]
}
]

const Cart = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Products in your cart</h1>
      {CartData.map((item)=>(
        <div className={styles.item} key={item.id}>
          <Image className={styles.img} src={item.img[3]} alt="" height={500} width={500}/>
          <div className={styles.details}>
            <h1 className={styles.label}>{item.label}</h1>
            <p>{item.desc.substring(0,50)}</p>
            <p className={styles.price}>1 X {item.currPrice}</p>
            <div className={styles.delete}><DeleteIcon/></div>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <div className={styles.bottom}>
      <button className={styles.ctaBtn}>PROCEED TO CHECKOUT</button>
      <span className={styles.reset}>RESET CART</span>
      </div>
    </div>
  )
}

export default Cart