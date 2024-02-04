"use client" 
import React, { useState } from 'react'
import styles from "./page.module.scss";
import Image from 'next/image'
import Link from 'next/link'

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <span className={styles.heading}>Sign in</span>
        <h3 className='text-heading'>Welcome to Northface</h3>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Email Container */}
        <div className={styles.inputCont}>
        <input className={styles.input} placeholder=" " required value={email} onChange={(e) => setEmail(e.target.value)}type="email" />
          <label htmlFor="input"  className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Email Address</span>
          </label>
        </div>

        {/* Password Container */}
        <div className={styles.inputCont}>
        <input className={styles.input} placeholder=" " type="password" required value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="input" className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Password</span>
          </label>
        </div>
        
        <div className={styles.action}>
        <div className={styles.checkbox}>
                <input
                type="checkbox"
                />
            <label>Remember me</label>
        </div>

        <Link className="text-link" href="forgotpassword" ><span className={styles.text}> Forgot Password? </span></Link>
        </div>
            <button style={{width:"100%"}}  className={styles.ctaBtn} type="submit">Login</button>
      </form>

{/* Or Container */}
    <div className={styles.orCont}>
      <hr className={styles.hr}/>
      <span className={styles.orText}>OR</span>
      <hr className={styles.hr}/>
    </div>

    <div className={styles.socialLogin} >
      <Image width={20} height={20} src="/google.png" alt="google"  priority={true}/>
      <span className={styles.socialText}>Continue with Google</span>
    </div>

    <div className={styles.register}>
      <span className={styles.text}> Don&apos;t have an account?</span>
      <Link href="/register" className="text-link" >Sign Up</Link>
    </div>
    </div>
  )
}

export default SignIn
