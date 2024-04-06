import styles from "./layout.module.scss"
import { ReactNode } from "react"
import Footer from "@/components/footer/footer"
import MainNav from "@/components/menu/MainNav"

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div className={styles.container}>
            <MainNav/>
            <div className={styles.wrapper}>
            {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout