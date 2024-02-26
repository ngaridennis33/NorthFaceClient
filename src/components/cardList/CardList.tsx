import Card from './card/Card'
import { CardData } from './cardData'
import styles from "./cardList.module.scss"


const CardList = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
          {CardData.map((items)=>(

            <Card key={items.id} items={items}/>
          ))}
        </div>

        <button className={styles.ctaBtn}>Show More (24)</button>
    </div>
  )
}

export default CardList