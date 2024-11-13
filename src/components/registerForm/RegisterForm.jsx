"use client";
import React, { useEffect } from "react";
import styles from "./registerForm.module.css";
import { useActionState } from "react";
import { register } from "@/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useActionState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">Have an account? <b>Login</b></Link>
    </form>
  );
};

export default RegisterForm;