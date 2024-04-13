import React from 'react'
import styles from "./notification.module.scss";
import { RedirectIcon, SuccessIcon, WarningIcon } from '../icons/Icons';


type NotificationProps = {
  status: string | null;
  desc: string | null;
}
const Notification = ({status,desc}:NotificationProps) => {
  // console.log(status)
  return (
      <div className={`${styles.notification} ${status && styles[status.toLowerCase()]}`}>
          <div className={styles.notificationBody}>
              <div className={styles.notificationIcon}>
              {status === 'success' && <SuccessIcon />}
              {status === 'redirect' && <RedirectIcon />}
              {(status !== 'success' && status !== 'redirect') && <WarningIcon />}
                </div>
                {desc}
              </div>
          <div className={styles.notificationProgress}></div>
      </div>
  )
}

export default Notification