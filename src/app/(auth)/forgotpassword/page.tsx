"use client";
import Link from "next/link"
import styles  from "./page.module.scss"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ForgorPassword = () => {
    // const router = useRouter();

    const [email, setEmail] = useState("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div className={styles.container}>
          <div className={styles.header}>
              <h1 className={styles.heading}>Forgot Password</h1>
            <span> Enter the email address associated with your account.</span>
          </div>
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.inputLabel}>Email</label>
            <input className={styles.input} autoFocus type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
            <span className={styles.errorMessage}>⁕ Email should be a valid email address!</span>
    
            <button className={styles.ctaBtn} style={{width:"100%", marginTop:"5px"}} type="submit">Continue</button>
        </form>
    
        <div className={styles.bottom}> <span className={styles.span}>Don&apos;t have an account? <Link className={styles.link} href="register">Sign Up</Link></span></div>
        </div>
      )
    }
    
    export default ForgorPassword