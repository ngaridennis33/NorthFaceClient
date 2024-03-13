import styles from "./layout.module.scss"
import { ReactNode } from "react"
import NavBar from "@/components/menu/navBar/NavBar"
import Footer from "@/components/footer/footer"

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div className={styles.container}>
            <NavBar/>
            <div className={styles.wrapper}>
            {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout