import styles from '../../styles/Home.module.css'
import SearchBar from './SearchBar'

const TopBar = ({ number }) => {
    return (
        <div className={styles.top__bar}>
            <span>Found {number} players</span>
            <SearchBar />
        </div>
    )
}

export default TopBar
