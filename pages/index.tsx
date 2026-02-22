import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import List from "../components/List";

import website from "../public/websites.json";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xiaojiba (@ErwanVi)</title>
        <meta name="description" content="Xiaojiba's website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-2653993181090618" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Xiaojiba&apos;s website</h1>

        <p className={styles.description}>
          Meet me on{" "}
          <Link href="https://github.com/erwanvivien" className={styles.link}>
            Github
          </Link>{" "}
          and{" "}
          <Link href="https://x.com/ErwanVi" className={styles.link}>
            X (Twitter)
          </Link>
        </p>

        <h2>Websites</h2>
        <div className={styles.grid}>
          <List key="title" Component={Card} data={website} />
        </div>
      </main>
    </div>
  );
};

export default Home;
