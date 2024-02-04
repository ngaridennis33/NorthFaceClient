import styles from "./search.module.scss"

const Search = () => {
  return (
    <div className={styles.form}>
                <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/>
                </svg>
                <input className={styles.input} placeholder="Search" required type="text"/>
                <span className={styles.inputBorder}></span>
    </div>
  )
}

export default Search