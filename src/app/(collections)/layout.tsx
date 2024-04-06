import styles from "./layout.module.scss"
import { ReactNode } from "react"
import Footer from "@/components/footer/footer"
import MainNav from "@/components/menu/MainNav"
import { ModalProvider } from "@/components/context/ModalContext"

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div className={styles.container}>
          <ModalProvider>
            <MainNav/>
            <div className={styles.wrapper}>
            {children}
            </div>
            <Footer/>
          </ModalProvider>
        </div>
    )
}

export default Layout