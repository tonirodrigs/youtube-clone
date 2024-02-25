import React from "react";
import styles from "../styles/navbar.module.css"

import Logo from "./logo";
import Menu from "./menu";
import Search from "./search";
import LoginBtn from "./loginBtn";

export default function Navbar(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <Menu />
        <Logo />
      </div>

      <Search />

      <div className={styles.side} style={{ justifyContent: "flex-end" }}>
        <LoginBtn />
      </div>
    </div>
  )
}