import SquadDetails from '../components/details/SquadDetails';
import TeamData from '../components/details/TeamData';
import Layout from '../components/layout/Layout'
import styles from '../styles/Details.module.css'

export default function ID({ data }) {
  
  return (
    <Layout title="Details">
      <div className={styles.details__container}>
        <TeamData imageUrl={data.logo_path} name={data.name} short_code={data.short_code} league={data.league.data.name} country={data.country.data.name} />
        <SquadDetails squad={data.squad} />
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {

  const token = 'q6C5WQmEk1FWw4PMEHY2mrSU1AzqH4O1uSDmUHN8L9mnIcORZ01yKkd6cVal';
  const URL = `https://soccer.sportmonks.com/api/v2.0/teams/${query.id}?api_token=${token}&include=squad.player,league,country`;
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  const res = await fetch(URL, requestOptions);
  const data = await res.json();

  return {
    props: {
      data: data.data
    }
  }
} 
