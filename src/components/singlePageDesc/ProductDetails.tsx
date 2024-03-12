"use client"

import React, { useState } from 'react'
import styles from "./productDetails.module.scss";
import { Item } from '@/types';
import { CartIcon } from '../icons/Icons';

interface ProductDetailsProps{
    product: Item;
}
const ProductDetails = ({product}:ProductDetailsProps) => {
    const [quantity, setQuantity] = useState(1);
  return (
    <div className={styles.right}>
        <h1 className={styles.label}>{product.label}</h1>
        <div className={styles.price}>
        <span className={styles.prevPrice}>${product.prevPrice}</span>
        <span className={styles.currentPrice}>${product.currPrice}</span>
        </div>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, similique. Modi rerum sed vero nemo nesciunt aliquam, itaque adipisci suscipit.
        </p>
                <div className={styles.selectColor}>
                    {product.color.map((color, index) => (
                        <div key={index} className={styles.color} style={{ backgroundColor: color }} />
                    ))}
                </div>
        <div className={styles.quantity}>
          <button className={styles.pButton} onClick={()=> setQuantity((prev)=> (prev === 1 ? 1 : prev-1))}>-</button>
          {quantity}
          <button className={styles.pButton} onClick={()=> setQuantity(prev=>prev+1)}>+</button>
        </div>
          <button className={styles.add}><CartIcon/> ADD TO CART</button>
          <div className={styles.links}>
            <div className={styles.item}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="50" height="50">
            <title/>
            <g data-name="1" id="_1">
            <path fill="#2879fe" d="M370.24,425.59a14.89,14.89,0,0,1-7-1.72L257,368,150.74,423.87A15,15,0,0,1,129,408.06l20.3-118.32-86-83.8a15,15,0,0,1,8.31-25.59l118.81-17.26L243.55,55.43a15,15,0,0,1,26.9,0l53.13,107.66,118.8,17.26a15,15,0,0,1,8.32,25.59l-86,83.8L385,408.06a15,15,0,0,1-14.78,17.53ZM106,205.67l69.85,68.09A15,15,0,0,1,180.17,287l-16.49,96.14L250,337.78a15,15,0,0,1,14,0l86.34,45.39L333.83,287a15,15,0,0,1,4.31-13.27L408,205.67l-96.53-14a15,15,0,0,1-11.29-8.2L257,96l-43.17,87.47a15,15,0,0,1-11.3,8.2Z"/>
            </g>
            </svg>
          Add to wish list
            </div>
            <div className={styles.item}>
            <svg height={50} width={50} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="Product_price_comparison"><path fill="#2879fe" d="M230.7843,318.5234a21.0094,21.0094,0,0,0-20.9024-18.707h-29.26V273.5928a45.6919,45.6919,0,1,0-91.3838,0v26.2236h-29.26a21.0078,21.0078,0,0,0-20.9014,18.707L24.4815,449.7441a35.0092,35.0092,0,0,0,34.7949,38.88h150.795a35.467,35.467,0,0,0,35.2509-39.3886ZM101.2384,273.5928a33.6919,33.6919,0,1,1,67.3838,0v26.2236H101.2384ZM227.5606,468.8057a23.4968,23.4968,0,0,1-17.4892,7.8183H59.2764A23.0112,23.0112,0,0,1,36.4073,451.07L51.003,319.8486a9.0214,9.0214,0,0,1,8.9756-8.0322h29.26V336.69h12V311.8164h67.3838V336.69h12V311.8164h29.26a9.0239,9.0239,0,0,1,8.9766,8.0332l14.5381,130.7119A23.4966,23.4966,0,0,1,227.5606,468.8057Z"/><path fill="#2879fe" d="M134.6807,348.7537a50.1675,50.1675,0,1,0,50.1674,50.1674A50.2242,50.2242,0,0,0,134.6807,348.7537Zm3.6728,69.36v7.2337h-9V418.23h-9.4424v-9h16.7617a4.5659,4.5659,0,1,0,0-9.1318H132.999a12.58,12.58,0,0,1-2.6758-24.8731v-7.4121h9v7.1191h10.4131v9H132.999a3.5831,3.5831,0,0,0,0,7.1661h3.6738a13.56,13.56,0,0,1,1.6807,27.0163Z"/><path fill="#2879fe" d="M489.609,449.2354l-14.5381-130.712a21.0094,21.0094,0,0,0-20.9024-18.707h-29.26V273.5928a45.6919,45.6919,0,1,0-91.3838,0v26.2236h-29.26a21.0076,21.0076,0,0,0-20.9013,18.707L268.7681,449.7441a35.0092,35.0092,0,0,0,34.795,38.88H454.358a35.4672,35.4672,0,0,0,35.251-39.3886ZM345.525,273.5928a33.6919,33.6919,0,1,1,67.3838,0v26.2236H345.525ZM471.8472,468.8057a23.4965,23.4965,0,0,1-17.4892,7.8183H303.5631A23.0113,23.0113,0,0,1,280.6939,451.07L295.29,319.8486a9.0214,9.0214,0,0,1,8.9756-8.0322h29.26V336.69h12V311.8164h67.3838V336.69h12V311.8164h29.26a9.0239,9.0239,0,0,1,8.9766,8.0332l14.5381,130.7119A23.4963,23.4963,0,0,1,471.8472,468.8057Z"/><path fill="#2879fe" d="M378.9673,348.7537a50.1675,50.1675,0,1,0,50.1675,50.1674A50.2242,50.2242,0,0,0,378.9673,348.7537Zm3.6728,69.36v7.2337h-9V418.23h-9.4423v-9H380.96a4.5659,4.5659,0,1,0,0-9.1318h-3.6739a12.58,12.58,0,0,1-2.6757-24.8731v-7.4121h9v7.1191h10.413v9H377.2856a3.5831,3.5831,0,0,0,0,7.1661H380.96A13.56,13.56,0,0,1,382.64,418.114Z"/><path fill="#2879fe" d="M340.7627,115.2312c-2.9829-2.3994-6.6953-5.3855-7.3286-7.3392-.7041-2.1673.5722-6.9357,1.5981-10.767,1.8482-6.903,3.9424-14.7271-.393-20.6843-4.3731-6.0083-12.5088-6.4256-19.6871-6.794-3.9272-.2014-8.8134-.4519-10.6-1.7514-1.7343-1.2624-3.4565-5.7874-4.8413-9.4229-2.5752-6.7659-5.4951-14.4342-12.6465-16.7558-6.91-2.2442-13.6357,2.1259-19.57,5.9821-3.5547,2.3085-7.582,4.9248-9.9633,4.9248s-6.4087-2.6163-9.962-4.9248c-5.936-3.8552-12.6626-8.2278-19.5708-5.9821-7.1508,2.3216-10.0708,9.99-12.6464,16.7553-1.3843,3.6355-3.107,8.1605-4.8414,9.4224-1.7861,1.3-6.6723,1.5506-10.6,1.7519-7.1782.3684-15.3139.7857-19.687,6.794-4.3354,5.9573-2.2412,13.781-.393,20.6838,1.0258,3.8318,2.3022,8.6,1.5986,10.7675-.6338,1.9532-4.3457,4.9393-7.3286,7.3388-5.6851,4.5733-12.1284,9.7568-12.1284,17.3893s6.4433,12.8159,12.1284,17.3893c2.9829,2.3995,6.6948,5.3856,7.3286,7.3388.7036,2.1667-.5728,6.9353-1.5986,10.767-1.8482,6.9029-3.9429,14.7266.392,20.6834,4.3731,6.0093,12.51,6.4265,19.688,6.7949,3.9263.2013,8.8125.4519,10.5987,1.7514,1.7343,1.2623,3.457,5.7873,4.8413,9.4229,2.5757,6.7654,5.4956,14.4336,12.6465,16.7558,6.9072,2.2423,13.6352-2.1269,19.5708-5.9821,3.5542-2.3086,7.582-4.9248,9.9629-4.9248s6.4086,2.6162,9.9633,4.9248c4.815,3.1278,10.15,6.5935,15.6812,6.5935a12.4968,12.4968,0,0,0,3.8891-.6114c7.1514-2.3217,10.0713-9.99,12.6465-16.7553,1.3848-3.6361,3.107-8.1606,4.8413-9.423,1.7862-1.2994,6.6724-1.55,10.5987-1.7513,7.1782-.3684,15.3149-.7856,19.688-6.7941,4.3354-5.9567,2.24-13.78.393-20.6832-1.0259-3.8318-2.3022-8.6-1.5981-10.7685.6333-1.9532,4.3457-4.9393,7.3286-7.3388,5.6841-4.5734,12.1274-9.7567,12.1274-17.3893S346.4468,119.8041,340.7627,115.2312Zm-96.499,44.6433a5.4994,5.4994,0,0,1-5.21,3.7383h-6.6309a5.4981,5.4981,0,0,1-5.2041-3.7217l-16.7807-49.11h11.6235l13.667,39.9954,13.5254-39.9954h11.6113Zm42.26,3.7383H265.5859v-11h20.9375a5.8235,5.8235,0,0,0,0-11.647h-4.5888a15.5962,15.5962,0,1,1,0-31.1924H302.84v11H281.9346a4.5962,4.5962,0,1,0,0,9.1924h4.5888a16.8235,16.8235,0,0,1,0,33.647Z"/></g></svg>
                Add to compare
            </div>
          </div>
          <div className={styles.info}>
            <span>Vendor: POLO</span>
            <span>Product Type: T-shirt</span>
            <span>Vendor: POLO</span>
            <span>Tag: T-shirt, Women, Top</span>
          </div>
          <hr/>
          <div className={styles.info}>
            <span>DESCRIPTION</span>
            <hr />
            <span>Additional info</span>
            <hr />
            <span>FAQ</span>
          </div>
      </div>
  )
}

export default ProductDetails