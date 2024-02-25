import React from "react";
import styles from "../styles/loginBtn.module.css";

import { PiUserCircleThin } from "react-icons/pi";

export default function LoginBtn(): JSX.Element {
  return (
    <button className={styles.login}>
      <PiUserCircleThin className={styles.loginIcon} />
      Fazer login
    </button>
  );
}