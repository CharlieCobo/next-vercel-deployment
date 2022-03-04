import Head from "next/head";
import { FC } from "react";
import { NavBar } from "../NavBar";
import styles from "./Layout.module.css";

export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
