import styles from "./layout.module.scss"
import { ReactNode } from "react"
import NavBar from "@/components/menu/navBar/NavBar"

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div className={styles.container}>
            {/* <nav className={styles.logo}><Logo/></nav> */}
            <NavBar/>
            <div className={styles.wrapper}>
            {children}
            </div>
        </div>
    )
}

export default Layout