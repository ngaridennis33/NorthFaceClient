"use client"
import styles from "./page.module.scss";
import FormInput from '@/components/RegisterFormInput/FormInput';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";

interface FormInputValues{
  name:string;
  email:string;
  password:string;
  confirmPassword:string;
  [key: string]: string; 
}
const Register = () => {

  const [values, setValues] = useState<FormInputValues>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setValues({...values, [e.target.name]: e.target.value})
    }

  const formInputData=[
    {
        id:1,
        name:"email",
        type:"email",
        placeholder:"Email",
        errorMessage:"⁕ Email should be a valid email address!",
        label:"Email",
        required:true,
    },
    {
    id:2,
    name:"name",
    placeholder:"Enter full name",
    label:"Full Name",
    required:true,
},
    {
        id:3,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:"⁕ Password should be between 8-20 characters. MUST include 1 uppercase and lowe case letter, 1 digit and 1 special character! (eg. asdASD123*)",
        label:"Password",
        pattern: "^.{8,20}$",
        required:true,
    },
    {
        id:4,
        name:"confirmPassword",
        type:"password",
        placeholder:"Confirm Password",
        errorMessage:"⁕ Passwords DO NOT match!",
        label:"ConfirmPassword",
        pattern:values.password,
        required:true,
    }
]

  return (
    <>
        <div className={styles.container}>
          <div className={styles.header}>
          <span className={styles.logo}>Register</span>
            <h3 className='text-heading'>Create your NorthFace account</h3>
          </div>
    
          <form className={styles.form} onSubmit={handleSubmit}>
          {formInputData.map((input)=>(
                  <FormInput 
                    names={input.label}
                    key={input.id} 
                    {...input} 
                    value={values[input.name]} 
                    onChange={onChange}
                  />
                    ))}
          <button className={styles.ctaBtn} style={{width:"100%", marginTop:"5px"}} type="submit" >Validate</button>

          </form>
    
          <div className={styles.bottom}>

              {/* Or Container */}
              <div className={styles.orCont}>
              <hr className={styles.hr}/>
              <span className={styles.orText}>OR</span>
              <hr className={styles.hr}/>
          </div>
    
          <div className={styles.socialLogin}>
            <Image width={20} height={20} src="/google.png" alt="google"  priority={true}/>
            <span className={styles.socialText}>Continue with Google</span>
          </div>

          <div className={styles.login}>
            <span className={styles.text}>Already have an account?</span>
              <Link href="/login" className="text-link">Sign In</Link>
          </div>
          </div>
    
          </div>
          </>
      )
}

export default Register