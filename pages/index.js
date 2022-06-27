import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jun Long's Portfolio</title>
        <meta name="description" content="Web Development Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my portfolio!</h1>

        <p className={styles.description}>Web developer</p>
      </main>
    </div>
  );
}
