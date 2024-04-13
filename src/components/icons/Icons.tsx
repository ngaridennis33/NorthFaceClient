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


export const CartIcon = () => {
    return (
      <div>
          <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"/>
          </svg>
      </div>
    )
  }

export const DeleteIcon = () => {
  return (
    <div>
      <svg width={32} height={32} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="#ff0000" d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"/></svg>
    </div>
  )
}

export const XIcon = () => {
  return (
    <div className={styles.containersm}>
      <svg width="20" height="20" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffff" d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
      </svg>
    </div>
  )
}

export const SuccessIcon = () => {
  return (
    <div className={styles.containersm}>
       <svg className={styles.successIcon} viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path className={styles.circle} d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"/><path className={styles.tick} d="M6.5 13.5L10 17l8.808621-8.308621"/></g></svg>
    </div>
  )
}

export const WarningIcon = () => {
  return (
    <div className={styles.containersm}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill='currentColor' d="m16 2a14 14 0 1 0 14 14 14 14 0 0 0 -14-14zm0 26a12 12 0 1 1 12-12 12 12 0 0 1 -12 12z"/><path fill='currentColor' d="m15 8h2v11h-2z"/><path fill='currentColor' d="m16 22a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>
    </div>
  )
}


export const RedirectIcon = () => {
  return (
    <div className={styles.containersm}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M30.586 21.414L39.171 30H16v4h23.171l-8.585 8.586 2.828 2.828L46.829 32 33.414 18.586z"/><path  d="M32 4C16.537 4 4 16.537 4 32s12.537 28 28 28 28-12.537 28-28S47.463 4 32 4zm0 54C17.664 58 6 46.336 6 32S17.664 6 32 6s26 11.664 26 26-11.664 26-26 26z"/></svg>
    </div>
  )
}

