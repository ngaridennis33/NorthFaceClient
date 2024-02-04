import Link from 'next/link'
import styles from "./desktopLinks.module.scss"
import Image from "next/image"
import { NavBarData } from '../../navLinksData'

const DesktopLinks = () => {
  return (
<nav className={styles.nav}>
  {NavBarData.map(({ label,img, tree,link }, index) => (
  <ul className={styles.navList} key={index}>
      <li className={styles.navListItem}>
      <Link href={link} className={styles.navListItemLink}>{label}</Link>
      {tree && (
          <div className={styles.dropDown}>
          <ul className={styles.dropdownList}>
              {tree.map(({ label, branches, link }, index) => (
              <li className={styles.dropDownListItems} key={index}>
                  {link && <Link href={link}>{label}</Link>}
                  {!link && branches && (
                      <ul className={styles.dropDownListItem}>
                      <li className={styles.dropDownListItemLabel}>{label}</li>
                      {branches.map(({ label, link }, index) => (
                      <Link key={index} href={link}>
                          <li className={styles.dropDownListItemList}>{label}</li>
                      </Link>
                      ))}
                  </ul>
                  )}
              </li>
              ))}
          </ul>

            {img && 
              <div className={styles.imageContainer}>
                <Image className={styles.image} fill src={img} alt=""/> 
                <span className={styles.imgText}>{label}<br/>$40% OFF</span>
                </div>
                }
          
          </div>
      )}
      </li>
  </ul>
  ))}
</nav>
  )
}

export default DesktopLinks