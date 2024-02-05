import Link from 'next/link';
import styles from './page.module.scss';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const message = searchParams.get('res');
  const route = searchParams.get('next');

  return (
    <div className={styles.container}>
      <div className={styles.verified}>
        <svg
          className={styles.svg}
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              className={styles.circle}
              d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"
            />
            <path
              className={styles.tick}
              d="M6.5 13.5L10 17 l8.808621-8.308621"
            />
          </g>
        </svg>

        <div className={styles.wrapper}>
          <h2 className={styles.heading}> {title} </h2>
          <span className={styles.text}>{message}</span>

          {route && (
            <Link href={route}>
              <button className={styles.ctaBtn}>{route}</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Success = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
};

export default Success;
