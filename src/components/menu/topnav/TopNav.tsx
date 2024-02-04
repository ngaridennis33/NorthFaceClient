import { TopNavData } from "../navData"
import styles from "./topNav.module.scss"
import Link from "next/link"

const TopNav = () => {

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {TopNavData.map((item, index)=>(
                  <Link href={item.link} key={index} className={styles.listItem}>{item.label} 
                  {index !== TopNavData.length - 1 && <hr className={styles.hr} />}
                  </Link>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TopNav