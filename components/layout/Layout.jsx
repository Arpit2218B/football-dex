import Navbar from "./Navbar";
import Head from 'next/head';
import styles from '../../styles/Layout.module.css';

const Layout = ({ children, title = 'Football Dex' }) => {
    return (
        <div className={styles.layout__container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Football players statistics " />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
