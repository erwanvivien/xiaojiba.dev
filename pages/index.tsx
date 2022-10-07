import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import List from "../components/List";

import website from "../public/websites.json";
import codeProject from "../public/projects.json";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Xiaojiba</title>
        <meta name="description" content="Xiaojiba's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Xiaojiba&apos;s website</h1>

        <p className={styles.description}>
          Find more about my work on{" "}
          <Link href="https://github.com/erwanvivien">
            <a className={styles.link}>Github</a>
          </Link>
          <br />
          and here is my{" "}
          <Link href="/CV.pdf" target={"_blank"}>
            <a className={styles.link}>resume</a>
          </Link>
        </p>

        <h2>Websites</h2>
        <div className={styles.grid}>
          <List key="title" Component={Card} data={website} />
        </div>

        <h2>Code project</h2>
        <div className={styles.grid}>
          <List key="title" Component={Card} data={codeProject} />
        </div>
      </main>
    </div>
  );
};

export default Home;
