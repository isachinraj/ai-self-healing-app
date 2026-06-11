import { useEffect } from "react";
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectCurrentUser, selectIsAuthenticated } from '@components/auth/authSelectors';

import styles from './HomePage.module.css';
import { API_ENDPOINT } from '@/config/constants';

const onAppError = (message: string, source?: string, error?: Error | null) => {
  // Trigger function when an error happens in the app
  console.error('[AppError]', { message, source, error });
};

const HomePage = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectCurrentUser);

  // dev: avoid logging Vite-only globals during tests
  console.log('API_ENDPOINT', API_ENDPOINT);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      onAppError(event.message, event.filename, event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = event.reason instanceof Error ? event.reason : null;
      const message = error?.message ?? String(event.reason);
      onAppError(message, 'unhandledrejection', error);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
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