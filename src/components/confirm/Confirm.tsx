import React, { ReactNode } from 'react'
import styles from "./confirm.module.scss";


type ConfirmProps = {
    title:string;
    svg: ReactNode;
    desc:string;
}

const Confirm = ({title,svg, desc}: ConfirmProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.svg}>{svg}</div>
        <div className={styles.title}>
            <h3>{title}</h3>
        </div>
        <div className={styles.desc}>
            <span>{desc}</span>
        </div>
    </div>
  )
}

export default Confirm