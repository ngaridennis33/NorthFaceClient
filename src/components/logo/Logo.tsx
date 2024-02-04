import Link from "next/link"
import styles from "./logo.module.scss"

const Logo = () => {
  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>Northface</Link>
    </div>
  )
}

export default Logo