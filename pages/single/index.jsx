import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function SingleHero() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Single</h1>
      </main>
    </div>
  );
}
