"use client"

import React from "react";
import styles from "../styles/search.module.css";

import { GoSearch } from "react-icons/go";
import { BiSolidMicrophone } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

export default function Search(): JSX.Element {
  const [SearchValue, setSearchValue] = React.useState<string>("");

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.container}>
        <input
          placeholder="Pesquisar"
          value={SearchValue}
          onChange={e => setSearchValue(e.target.value)}
        />

        <button className={styles.search}>
          <GoSearch className={styles.searchIcon} />
        </button>

        {
          SearchValue.length > 0 && (
            <button className={styles.clear} onClick={() => setSearchValue("")}>
              <GrClose className={styles.clearIcon} />
            </button>
          )
        }

        <button className={styles.mic}>
          <BiSolidMicrophone className={styles.micIcon} />
        </button>
      </div>
    </div>
  );
}