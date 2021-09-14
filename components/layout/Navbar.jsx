import styles from '../../styles/Layout.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={styles.logo__container}>
            <Link href="/">
                <h2>Football <span className={styles.logo}>Dex</span></h2>
            </Link>
        </div>
    )
}

export default Navbar;
