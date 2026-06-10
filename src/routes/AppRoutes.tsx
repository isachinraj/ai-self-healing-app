import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '@components/common/Layout/Layout';

const HomePage = lazy(() => import('@components/pages/Home/HomePage'));
const CreatePage = lazy(() => import('@components/pages/Create/CreatePage'));
const NotFoundPage = lazy(() => import('@components/pages/NotFound/NotFoundPage'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <span>Loading...</span>
  </div>
);

const AppRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;
