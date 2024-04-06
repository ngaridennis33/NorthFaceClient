"use client"

import React, { useEffect, useState } from "react";
import styles from "./announcement.module.scss";
import { XIcon } from "@/components/icons/Icons";

const Announcement = () => {
    const [showAnnouncement, setShowAnnouncement] = useState(false);

    const handleAnnouncement = () => {
        setShowAnnouncement(false);
    };

    useEffect(() => {
        if (!showAnnouncement) {
            setShowAnnouncement(true);
            const timeout = setTimeout(() => {
                setShowAnnouncement(false);
            }, 8000);
            return () => clearTimeout(timeout);
        }
    }, []);

    return (
        <div className={`${styles.container} ${!showAnnouncement ? styles.showAnnouncement : ''}`}>
            <div className={styles.wrapper}>
                <span className={styles.text}>
                    Join XPLR Pass & get 10% off your first online order. Sign up now. Sale excluded. Terms apply.
                </span>
                <div className={styles.close} onClick={handleAnnouncement}>
                    <XIcon />
                </div>
            </div>
        </div>
    );
};

export default Announcement;
