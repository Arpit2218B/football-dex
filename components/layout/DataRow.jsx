import { styled } from "@material-ui/core"
import styles from '../../styles/Home.module.css'

const DataRow = ({ heading=false, imageUrl, name, stata, statb, statc }) => {
    return (
        <div className={heading ? styles.datarow__heading : styles.datarow__data}>
            <span className={styles.image}>a</span>
            <span className={styles.name}>{name}</span>
            <span className={styles.stata}>{stata}</span>
            <span className={styles.statb}>{statb}</span>
            <span className={styles.statc}>{statc}</span>
        </div>
    )
}

export default DataRow
