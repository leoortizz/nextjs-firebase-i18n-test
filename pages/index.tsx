import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const LOCALES = ["en", "es"];

export default function Home() {
  const { locale: currentLocale, defaultLocale } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Current locale: {currentLocale}</h1>
        <h2>Default locale: {defaultLocale}</h2>
        <div className={styles.grid}>
          {LOCALES.map((lang) => (
            <Link href="/" key={lang} className={styles.card} locale={lang}>
              to /{lang}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
