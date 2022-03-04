import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
import styles from "../../styles/Home.module.css";

const Contact = () => {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        Go to <Link href="/">Home!</Link>
        {/* Go to <a href="/">Home!</a> */}
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/contact.js</code>
      </p>
    </MainLayout>
  );
};

export default Contact;
