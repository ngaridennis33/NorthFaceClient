import React from 'react'
import styles from "./loader.module.scss";

export const BoxLoader = () => {
  return (
    <div className={styles.loading}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export const SpinnerLoader = () => {
    return (
      <div className={styles.progressBar}>
        <div className={`${styles.circle} ${styles.border}`}></div>
    </div>
    )
  }