import React from 'react';
import Announcement from './announcement/Announcement';
import styles from './mainNav.module.scss';
import HeaderNav from './headerNav/HeaderNav';
import PrimaryNav from './primaryNav/PrimaryNav';
import { getSession } from '../../../utils/actions';

const MainNav =  () => {
  return (
    <nav className={styles.container}>

      {/* Announcement */}
      <div className={styles.announcement}>
        <Announcement />
      </div>

      {/* Header-Nav */}
      <div className={styles.headerNav}>
        <HeaderNav />
      </div>

      {/* Primary-Nav */}
      <div className={styles.primaryNav}>
        <PrimaryNav />
      </div>
    </nav>
  );
};

export default MainNav;