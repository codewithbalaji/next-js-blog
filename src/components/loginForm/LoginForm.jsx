"use client";
import React from "react";
import styles from "./loginForm.module.css";
import { useActionState } from "react";
import { login } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useActionState(login, undefined);

  const router = useRouter();

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">{"Don't have an account?"} <b>Register</b></Link>
    </form>
  );
};

export default LoginForm;
