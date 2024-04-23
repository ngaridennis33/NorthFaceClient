import {SignInBtn,SignOutBtn} from "@/components/authbtn/Auth"
import { TopNavData } from "../navData"
import styles from "./headerNav.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getSession } from "../../../../utils/actions"

const HeaderNav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserSession = async () => {
        const res = await getSession();
        setUser(res?.data)
    };
    getUserSession();
  }, [user]);
  console.log(user)

  return (
      <div className={styles.container}>
          <div className={styles.wrapper}>
              <ul className={styles.list}>
                  {TopNavData.map((item, index)=>(
                    <Link href={item.link} key={index} className={styles.listItem}>{item.label} 
                    <hr className={styles.hr}/>
                    </Link>
                  ))}
                {user ? <SignOutBtn /> : <SignInBtn />}
              </ul>
          </div>
      </div>
  )
}

export default HeaderNav