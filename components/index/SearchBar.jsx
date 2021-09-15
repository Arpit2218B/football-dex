import { SearchRounded } from "@material-ui/icons"
import styles from '../../styles/Home.module.css'

const SearchBar = ({ value, searchHandler }) => {
    return (
        <div className={styles.search__bar}>
            <SearchRounded />
            <input placeholder="Search by team name or year founded" value={value} onChange={e => searchHandler(e)}></input>
        </div>
    )
}

export default SearchBar
