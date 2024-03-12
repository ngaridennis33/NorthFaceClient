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
      <div className={styles.title}>
        <h1> {type} Products</h1>
      </div>
        <div className={styles.wrapper}>
          {products && products.map((items)=>(
            <Card key={items.id} items={items}/>
          ))}
        </div>

        <button className={styles.ctaBtn}>Show More (24)</button>
    </div>
  )
}

export default CardList