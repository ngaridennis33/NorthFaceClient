import React from "react";
import styles from "./announcement.module.scss";

interface AnnouncementProps {
  handleAnnouncement: React.MouseEventHandler<HTMLElement>;
}

const Announcement: React.FC<AnnouncementProps> = ({ handleAnnouncement }) => {
  return (
    <div className={styles.container} onClick={handleAnnouncement}>
      <div className={styles.wrapper}>
        <span className={styles.text}>
          Join XPLR Pass & get 10% off your first online order. Sign up now. Sale excluded. Terms apply.
        </span>
        <div className={styles.close}>
          <svg width="20" height="20" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffff" d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Announcement;