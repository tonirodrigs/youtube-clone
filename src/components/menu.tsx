"use client"

import React, { useRef } from "react";
import styles from "../styles/menu.module.css"

export default function Menu(): JSX.Element {
  const bar01: any = useRef();
  const bar02: any = useRef();
  const bar03: any = useRef();

  function onClick(): void {
    const actived: boolean = bar02.current.style.display === "none";
    
    switch (actived) {
      case true: {
        bar02.current.style.display = "inherit";

        bar01.current.style.transform = "rotate(0)";
        bar03.current.style.transform = "rotate(0)";

        bar01.current.style.position = "inherit";
        bar03.current.style.position = "inherit";

        bar01.current.style.marginBottom = "5px";
        bar03.current.style.marginBottom = "5px";
        break;
      }
      
      case false: {
        bar02.current.style.display = "none";

        bar01.current.style.transform = "rotate(45deg)";
        bar03.current.style.transform = "rotate(-45deg)";

        bar01.current.style.position = "absolute";
        bar03.current.style.position = "absolute";

        bar01.current.style.marginBottom = "0px";
        bar03.current.style.marginBottom = "0px";
        break;
      }
    }
  }

  return (
    <button className={styles.container} onClick={onClick}>
      <span ref={bar01}></span>
      <span ref={bar02}></span>
      <span ref={bar03}></span>
    </button>
  )
}