import Head from 'next/head';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';
import Welcome from '@/components/welcome';

export default function Home() {
  const [getStarted, setGetStarted] = useState(false);

  return (
    <>
      <Head>
        <title>Wallet Application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.desktopContent}>
        <Welcome getStarted={getStarted} setGetStarted={setGetStarted} />
      </div>
      <div className={styles.mobileContent}>
        <Welcome getStarted={getStarted} setGetStarted={setGetStarted} />
      </div>
    </>
  );
}
