import Link from "next/link";
import { ReactElement } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import styles from "../../styles/Home.module.css";

const Pricing = () => {
  return (
    <>
      <h1 className={styles.title}>
        Go to <Link href="/">Home!</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/pricing/index.js</code>
      </p>
    </>
  );
};

Pricing.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Pricing;
