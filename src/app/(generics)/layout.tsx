// import Logo from "@/components/menu/logo/Logo"
import TopNav from "@/components/menu/topnav/TopNav"
import styles from "./layout.module.scss"
import { ReactNode } from "react"

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <TopNav/>
            {children}
            </div>
    )
}

export default Layout