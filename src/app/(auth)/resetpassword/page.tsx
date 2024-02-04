"use client"
import { useState } from "react";
import styles from "./page.module.scss";
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";

interface ResetPasswordValues {
    password: string;
    passwordConfirm: string;
    [key: string]: string;
}

const ResetPassword = () => {
    const router = useRouter();

    const [values, setValues] = useState<ResetPasswordValues>({
        password: "",
        passwordConfirm: "",
      });
    
    // State to reveal Password.
    const [showPassword, setshowPassword] = useState(true);
    const toggleShowPassword = () => {
        setshowPassword(!showPassword)
    };

    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setValues({...values, [e.target.name ]: e.target.value})
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const formInputData=[
        {
            id: 1,
            name: "password",
            // type: "password",
            placeholder: "Password",
            errormessage: "⁕ Password should have a Minimum eight characters, at least one letter, one number, and one special character",
            label: "Password",
            pattern: "^.{8,20}$",
            required: true,
        },
        {
            id:2,
            name:"passwordConfirm",
            // type:"password",
            placeholder:"Confirm Password",
            errormessage:"⁕ Passwords DO NOT match!",
            label:"ConfirmPassword",
            pattern:values.password,
            required:true,
        }
    ]

return (
    <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.logo}>Password Reset</span>
            <h3 className='text-heading'>Confirm your new password to complete the reset.</h3>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
            {formInputData.map((input) => (
                <div className={styles.wrapper} key={input.id}>
                    <label className={styles.inputLabel} htmlFor={input.id.toString()}>{input.label}</label>
                    <input
                        className={styles.input}
                        {...input}
                        type={showPassword ? "password" : "text"}
                        placeholder={input.placeholder}
                        value={values[input.name]}
                        onChange={onChange}
                        id={input.id.toString()}
                    />
                    <span className={styles.errorMessage}>{input.errormessage}</span>
                </div>
            ))}

            <div className={styles.checkbox}>
                <label>
                    <input
                    type="checkbox"
                    checked={!showPassword}
                    onChange={toggleShowPassword}
                    />
                    Show Password
                </label>
            </div>
            
            <button style={{width:"100%"}} className={styles.ctaBtn} type="submit">Reset Password</button>
        </form>
    </div>
)
}

export default ResetPassword;