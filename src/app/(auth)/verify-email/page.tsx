"use client"

import React, { Suspense } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const VerifyEmailContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const title = searchParams.get('title') || 'Default Title';
  const message = searchParams.get('res') || 'Default Message';

  return (
    <div className={styles.container}>
      <div className={styles.verifyEmail}>
        <svg
          height="10vh"
          width="10vh"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 504.669 504.669"
          xmlSpace="preserve"
        >
          {/* ... (your SVG code) */}
        </svg>

        <div className={styles.wrapper}>
          <h2 className={styles.heading}> {title} </h2>
          <span className={styles.text}> {message} </span>
          <span className={styles.text}>
            <Link className={styles.link} href="#" onClick={() => router.back()}>
              Click here,
            </Link>{' '}
            if you did not receive an email or would like to change the email address.
          </span>
        </div>
      </div>
    </div>
  );
};

const VerifyEmail = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
};

export default VerifyEmail;