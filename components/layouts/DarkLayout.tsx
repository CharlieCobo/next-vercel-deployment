import { FC } from "react";
import styles from "./Layout.module.css";

export const DarkLayout: FC = ({ children }) => {
  return <div className={styles["main-dark"]}>{children}</div>;
};
