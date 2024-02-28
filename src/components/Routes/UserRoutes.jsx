import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from '../Shared/Loader';
import PublicRoute from './PublicRoutes';

const HomePage = lazy(() => import('pages/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
