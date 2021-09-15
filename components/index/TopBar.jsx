import styles from '../../styles/Home.module.css'
import SearchBar from './SearchBar'

const TopBar = ({ number, searchTerm, searchHandler }) => {
    return (
        <div className={styles.top__bar}>
            <span>Found {number} teams</span>
            <SearchBar value={searchTerm} searchHandler={searchHandler} />
        </div>
    )
}

export default TopBar
