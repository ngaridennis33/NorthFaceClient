import styles from "./dropdown.module.scss"

const Dropdown = ({tree}) => {
return (
    <div className={styles.dropdown}>
        <ul className={styles.list}>
        {tree.map(({label, color}, index)=>(
            
            <li key = {index} className={styles.listItems}>
                {/* Check Box */}
            <div className={styles.content}>
                <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox}/>
                </label>
            </div>
            {color &&<div className={styles.color} style={{background:`${color}`}}/>}
            <span>{label}</span>
            </li>
        ))
    }
    </ul>

    <div className={styles.bottom}>
        <button className={styles.actionBtn}>Clear All</button>
        <button className={styles.ctaBtn}>Apply</button>
    </div>
    </div>
)
}

export default Dropdown