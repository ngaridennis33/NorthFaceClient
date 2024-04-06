import Logo from "@/components/logo/Logo"
import styles from "./layout.module.scss"
import { ReactNode } from "react"

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Logo/>
            {children}
            </div>
        </div>
    )
}

export default Layout
