import React from "react";
import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

export const NavBar = () => {
  return (
    <nav className={styles["menu"]}>
      {routes.map(({ label, href }, idx) => (
        <ActiveLink key={idx} label={label} href={href} />
      ))}
    </nav>
  );
};
