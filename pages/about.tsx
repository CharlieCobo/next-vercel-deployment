import Link from "next/link";
import { ReactElement } from "react";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <h1 className={styles.title}>
        Go to <Link href="/">Home!</Link>
        {/* Go to <a href="/">Home!</a> */}
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/about.js</code>
      </p>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default About;
