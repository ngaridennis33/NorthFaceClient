"use client";

import React from 'react'
import { useForm } from 'react-hook-form';
import styles from "./page.module.scss";
import Image from 'next/image'
import Link from 'next/link'
import { loginRequest } from '../../../../utils/network';
import Notification from '@/components/notification/Notification';
import { SpinnerLoader } from '@/components/loaders/Loaders';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUserSchema, TLoginUserInput } from '@/lib/types';


const SignIn = () => {
  // const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TLoginUserInput>({
    resolver: zodResolver(loginUserSchema)
  });

  const onSubmit = async (data: TLoginUserInput) => {
    console.log("clicked")
      await new Promise((resolve)=> setTimeout(resolve,1000));
      
      reset();
  };

 
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <span className={styles.heading}>Sign in</span>
        <h3 className='text-heading'>Welcome to Northface</h3>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
        {/* Email Container */}
        <div className={styles.inputCont}>
          <input 
              {...register("email")}
              type="email"
              placeholder=" "
              className={styles.input}
          />
          <label htmlFor="input"  className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Email Address</span>
          </label>
        </div>
        {errors.email && (
          <span className={styles.error}> 
            {`${errors.email.message}`} 
          </span>
        )}

        {/* Password Container */}
        <div className={styles.inputCont}>
        <input 
               {...register("password")}
              type="password"
              placeholder=" "
              className={styles.input}
          />
          <label htmlFor="input" className={styles.inputLabel}>
            <span className={styles.inputLabelName}>Password</span>
          </label>
        </div>
        {errors.password && (
          <span className={styles.error}> 
            {`${errors.password.message}`} 
          </span>
        )}
        
        <div className={styles.action}>
        <div className={styles.checkbox}>
                <input
                type="checkbox"
                />
            <label>Remember me</label>
        </div>

        <Link className="text-link" href="forgotpassword" ><span className={styles.text}> Forgot Password? </span></Link>
        </div>
            <button
              style={{ width: "100%" }}
              disabled={isSubmitting}
              className={styles.ctaBtn}
              type="submit" // Make sure this attribute is included
            >
              {isSubmitting ? <SpinnerLoader /> : "Login"}
            </button>
            {/* {errors && <Notification status={"error"} desc={"error happened"}/>} */}
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
