// import Logo from "@/components/menu/logo/Logo"
import TopNav from "@/components/menu/topnav/TopNav"
import styles from "./layout.module.scss"
import { ReactNode } from "react"
import NavBar from "@/components/menu/navBar/NavBar"

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <NavBar/>
            {children}
            </div>
    )
}

export default Layout