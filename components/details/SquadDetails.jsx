import styles from '../../styles/Details.module.css'

const positions = {
    1: 'GK',
    2: 'DF',
    3: 'MF',
    4: 'ATT'
}

const SquadDetails = ({ squad }) => {
    const imageUrl = 'https://cdn.sportmonks.com/images/soccer/players/1/25057.png';
    const name = 'Iker Cassilas';
    const position = 'GK';
    const nationality = 'Spain';

    return (
        <div className={styles.squad}>
            {
                squad.data.map(player => {
                    return (
                        <Player 
                        key={player.id} 
                        imageUrl={player.player.data.image_path} 
                        name={player.player.data.common_name} 
                        position={positions[player.position_id]} 
                        nationality={player.player.data.nationality} 
                        />
                    )
                })
            }
        </div>
    )
}

const Player = ({ imageUrl, name, position, nationality }) => {
    return (
        <div className={styles.player__container}>
            <div className={styles.player__image__container}>
                <img src={imageUrl} className={styles.player__image}></img>
                <span className={styles.player__position}>{position}</span>
            </div>
            <div className={styles.player__name}>{name}</div>
            <div className={styles.player__nationality}>{nationality}</div>
        </div>
    )
}

export default SquadDetails
