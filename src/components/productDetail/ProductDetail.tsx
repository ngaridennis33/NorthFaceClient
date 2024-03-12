import React from 'react'
import styles from "./productDetal.module.scss";
import ProductDetails from '../singlePageDesc/ProductDetails';
import SinglePageImg from '../singlePageImg/SinglePageImageGallery';
import { Item } from '@/types';

interface ProductDetailProps{
    product:Item;
}
const ProductDetail = ({product}:ProductDetailProps) => {
  return (
    <div className={styles.wrapper}>
        <SinglePageImg product={product}/>
        <ProductDetails product={product}/>

    </div>
  )
}

export default ProductDetail