import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

const VerifyEmailContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const title = searchParams.get('title') || 'Default Title';
  const message = searchParams.get('res') || 'Default Message';

  return (
    <div className={styles.container}>
      <div className={styles.verifyEmail}>
        <svg height="10vh" width="10vh" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 504.669 504.669" xmlSpace="preserve">
          <g>
            <polygon style={{ fill: '#46F8FF' }} points="291.035,341.804 291.215,341.804 469.835,504.669 469.835,179.129" />
            <polygon style={{ fill: '#9BFBFF' }} points="469.835,179.129 336.764,179.129 336.764,278.528 252.335,278.528 167.905,278.528 
                    167.905,179.129 34.835,179.129 252.335,376.899" />
            <polygon style={{ fill: '#00E7F0' }} points="291.035,341.804 252.335,376.899 213.545,341.804 34.835,504.669 469.835,504.669 
                    291.215,341.804" />
            <polygon style={{ fill: '#46F8FF' }} points="34.835,179.129 34.835,504.669 213.545,341.804" />
            <polygon style={{ fill: '#2488FF' }} points="252.335,278.528 252.335,0 102.576,164.099 167.905,164.099 167.905,179.129 
                    167.905,278.528" />
            <polygon style={{ fill: '#005ECE' }} points="336.764,278.528 336.764,179.129 336.764,164.099 402.094,164.099 252.335,0 
                    252.335,278.528" />
          </g>
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