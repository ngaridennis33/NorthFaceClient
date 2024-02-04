import React, { useState, ChangeEvent, FocusEvent } from 'react';
import styles from "./formInput.module.scss";

interface FormInputProps {
  label: string;
  errorMessage?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: number;
  value:string;
  names:string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const [list, setList] = useState(false);

  const handleFocus = () => {
    setList(true);
  };

  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className={styles.wrapper}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        className={styles.input}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        list={list.toString()}
        onFocus={() => inputProps.names === 'confirmPassword' && setList(true)}
      />
      <span className={styles.errorMessage}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
