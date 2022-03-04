import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./Navbar.module.css";

interface Props {
  label: string;
  href: string;
}
export const ActiveLink: FC<Props> = ({ label, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a className={asPath === href ? styles["isActive"] : ""}>{label}</a>
    </Link>
  );
};
