import TopBar from '../components/index/TopBar'
import DataRow from '../components/layout/DataRow'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <TopBar />
      <DataRow heading={true} name="Name" stata="Stat A" statb="Stat B" statc="Stat C" />
      <DataRow name="Cristiano Ronaldo" stata="100" statb="20" statc="99" />
    </Layout>
  )
}
