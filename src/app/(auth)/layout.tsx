// import Logo from "@/components/menu/logo/Logo"
import styles from "./layout.module.scss"
import { ReactNode } from "react"

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div className={styles.container}>
            <nav className={styles.logo}>logo</nav>
            <div className={styles.wrapper}>
            {children}
            </div>
        </div>
    )
}

export default Layout