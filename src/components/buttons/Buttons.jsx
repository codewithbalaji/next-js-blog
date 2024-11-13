"use client";
import React from "react";
import styles from "./buttons.module.css";
import { useRouter } from 'next/navigation'


const Buttons = () => {
    const router = useRouter()
  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={() => router.push("/register")}>Create Now</button>
      <button className={styles.button} onClick={() => router.push("/contact")}>Contact Us</button>
    </div>
  );
};

export default Buttons;
