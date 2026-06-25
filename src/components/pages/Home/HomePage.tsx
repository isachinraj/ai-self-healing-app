import { useEffect } from "react";
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectCurrentUser, selectIsAuthenticated } from '@components/auth/authSelectors';

import styles from './HomePage.module.css';

const onAppError = (error: Error) => {
  console.error('[App Error Handler]', error.message);
};

const HomePage = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectCurrentUser);

  useEffect(() => {
    const handleWindowError = (event: ErrorEvent) => {
      onAppError(new Error(event.message));
    };

    window.addEventListener('error', handleWindowError);
    return () => {
      window.removeEventListener('error', handleWindowError);
    };
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