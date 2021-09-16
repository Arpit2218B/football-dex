import styles from '../../styles/Details.module.css'

const TeamData = ({ imageUrl, name, short_code, league, country }) => {
    return (
        <div className={styles.details}>
            <img src={imageUrl} className={styles.details__image}></img>
            <h2 className={styles.details__name}>{name}</h2>
            <h4 className={styles.details__shortCode}>{short_code}</h4>
            <div className={styles.details__metadata}>
                <div>
                    <div className={styles.details__metadata__value}>{league}</div>
                    <div className={styles.details__metadata__label}>League</div>
                </div>
                <div>
                    <div className={styles.details__metadata__value}>{country}</div>
                    <div className={styles.details__metadata__label}>Country</div>
                </div>
            </div>
        </div>
    )
}

export default TeamData
