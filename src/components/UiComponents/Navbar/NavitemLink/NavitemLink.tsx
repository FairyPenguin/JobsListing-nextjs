"use client";
// ======/ Imports /======
import Link from "next/link";
import { usePathname } from "next/navigation";
// CSS-Module File Import
import styles from "./NavitemLink.module.css";

interface NavItemI {
  navItem: {
    title: string;
    url: string;
  };
}

export default function NavitemLink({ navItem }: NavItemI) {
  const currentActiveNavItem = usePathname();

  const activeNavItemClass =
    currentActiveNavItem === navItem.url ? "active" : "";

  return (
    <li>
      <Link
        href={navItem.url}
        className={`${styles["item__link"]} ${styles[activeNavItemClass]}`}
      >
        {navItem.title}
      </Link>
    </li>
  );
}
