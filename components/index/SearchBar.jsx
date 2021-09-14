import { SearchRounded } from "@material-ui/icons"
import styles from '../../styles/Home.module.css'

const SearchBar = () => {
    return (
        <div class={styles.search__bar}>
            <SearchRounded />
            <input placeholder="Search by player name or club"></input>
        </div>
    )
}

export default SearchBar
