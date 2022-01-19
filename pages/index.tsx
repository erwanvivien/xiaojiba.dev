import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

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
          Find more about my work on
          <code className={styles.code}>
            <Link href="https://github.com/erwanvivien">
              <a>Github</a>
            </Link>
          </code>
        </p>

        <h2>Websites</h2>

        <div className={styles.grid}>
          <Link href="https://qify.app">
            <a className={[styles.card, styles.qify].join(" ")}>
              <h2>📯 Qify &rarr;</h2>
              <p>A shared playlist jukebox using Spotify</p>
            </a>
          </Link>

          <Link href="https://ms-setting.com">
            <a className={[styles.card, styles.ms_setting].join(" ")}>
              <h2>⚙️ MS-Setting &rarr;</h2>
              <p>MS-Setting provides direct links to Windows settings</p>
            </a>
          </Link>

          <Link href="https://drunkeen.app">
            <a className={[styles.card, styles.drunkeen].join(" ")}>
              <h2>😎 Drunkeen &rarr;</h2>
              <p>
                Create and manage party easily: invitations, info, shopping list
              </p>
            </a>
          </Link>
        </div>

        <h2>Code project</h2>

        <div className={styles.grid}>
          <Link href="https://github.com/erwanvivien/QR-Gen">
            <a className={[styles.card, styles.qrgen].join(" ")}>
              <h2>🔲 QRGen &rarr;</h2>
              <p>Create QRCode at high speed using Rust</p>
            </a>
          </Link>
          <Link href="https://github.com/erwanvivien/discord_eGLD">
            <a className={[styles.card, styles.goldr].join(" ")}>
              <h2>💰 Goldr &rarr;</h2>
              <p>Discord bot watching crypto $eGLD</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
