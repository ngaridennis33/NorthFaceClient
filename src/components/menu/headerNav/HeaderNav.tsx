import {SignInBtn,SignOutBtn} from "@/components/authbtn/Auth"
import { TopNavData } from "../navData"
import styles from "./headerNav.module.scss"
import { getSession } from "../../../../utils/actions"
import Link from "next/link"

const HeaderNav =  () => {
  // const session = await getSession();
  // console.log(session)

  return (
      <div className={styles.container}>
          <div className={styles.wrapper}>
              <ul className={styles.list}>
                  {TopNavData.map((item, index)=>(
                    <Link href={item.link} key={index} className={styles.listItem}>{item.label} 
                    <hr className={styles.hr}/>
                    </Link>
                  ))}
              {/* {session ? <SignOutBtn/>: <SignInBtn/>} */}
              <SignOutBtn />
              </ul>
          </div>
      </div>
  )
}

export default HeaderNav