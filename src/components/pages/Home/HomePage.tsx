import { useEffect } from "react";
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectCurrentUser, selectIsAuthenticated } from '@components/auth/authSelectors';

import styles from './HomePage.module.css';
import { API_ENDPOINT } from '@/config/constants';

const HomePage = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectCurrentUser);
  
  // dev: avoid logging Vite-only globals during tests
  console.log('API_ENDPOINT', API_ENDPOINT);

  
  useEffect(() => {
    throw new Error("Test crash from React app");
  }, []);


  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Hello, World! 👋</h1>
      <p className={styles.subtext}>
        This is your starting point for building application.
      </p>

      <section className={styles.stateSection}>
        <h2>Redux store check</h2>
        <p>
          Authenticated: <strong>{isAuthenticated ? 'Yes' : 'No'}</strong>
        </p>
        <p>
          Current user: <strong>{user ? user.name ?? JSON.stringify(user) : '—'}</strong>
        </p>
      </section>

      <ul className={styles.featureList}>
        <li>⚡ Vite for lightning-fast builds</li>
        <li>🔷 TypeScript strict mode</li>
        <li>🗃️ Redux Toolkit pre-wired</li>
        <li>✅ Jest + RTL testing ready</li>
      </ul>
    </main>
  );
};

export default HomePage;
