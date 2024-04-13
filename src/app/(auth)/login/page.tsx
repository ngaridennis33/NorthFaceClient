"use client";

import React, { useEffect, useState } from 'react'
import styles from "./page.module.scss";
import Image from 'next/image'
import Link from 'next/link'
import { newRequest } from '../../../../utils/network';
import Notification from '@/components/notification/Notification';
import { SpinnerLoader } from '@/components/loaders/Loaders';
import { useRouter } from 'next/navigation';


const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus(null); 
    setIsLoading(true);
    try {
      const res = await newRequest.post("/auth/login",{email,password});
      console.log("res",res)
      router.push("/")
      setIsLoading(false)
    
        
    } catch (err:any) {
      setError(err.response.data.errorMessage);
      setStatus(err.response.data.status)
      setIsLoading(false);
    }
};
 
console.log(status, error)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <span className={styles.heading}>Sign in</span>
        <h3 className='text-heading'>Welcome to Northface</h3>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Email Container */}
        <div className={styles.inputCont}>
        <input className={`${styles.input} ${error && styles.errorInput}`} placeholder=" " required name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="input"  className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Email Address</span>
          </label>
        </div>

        {/* Password Container */}
        <div className={styles.inputCont}>
        <input className={`${styles.input} ${error && styles.errorInput}`} placeholder=" " type="password" required name="password" onChange={(e) =>setPassword(e.target.value)}/>
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
            <button style={{width:"100%"}} disabled={isLoading} className={styles.ctaBtn} type="submit">{isLoading ? <SpinnerLoader/>: "Login"}</button>
            {status && <Notification status={status} desc={error}/>}
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
