import { Outlet, Link } from 'react-router-dom';

import styles from './Layout.module.css';

const Layout = () => (
  <div className={styles.page}>
    <header className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/create">Create</Link>
      </nav>
    </header>
    <main className={styles.main}>
      <Outlet />
    </main>
    <footer className={styles.footer}>© {new Date().getFullYear()} MyApp</footer>
  </div>
);

export default Layout;
