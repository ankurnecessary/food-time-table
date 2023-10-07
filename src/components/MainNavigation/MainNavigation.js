import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './MainNavigation.module.css';
import UserNavigation from './UserNavigation/UserNavigation';

const MainNavigation = () => {
    return <header className={styles.header}>
        <div>
            <h1><Link to="." className={styles.logo}>Go to home page</Link></h1>
        </div>
        <div className={styles['header-right']}>
            <UserNavigation />
        </div>
    </header>;
}

export default MainNavigation;