import React from 'react'
import styles from "./icons.module.scss";

export const RightIcon = () => {
    return (
        <svg className={styles.sliderArrow} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="#5d6370" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" />
        </svg>
    )
}

export const LeftIcon = () => {
    return (
        <svg className={styles.sliderArrow} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="#5d6370" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z" />
        </svg>
      )
  }
