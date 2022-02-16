import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Spinner from '../Components/Shared/Spinner';
import Forbidden from '../Components/Shared/Forbidden';

const todoRoutes = lazy(() => import('./todo'));
const AuthRoutes = lazy(() => import('./auth'));

const MainRoutes = () => {

  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={todoRoutes} />
          <Route path="/auth" element={AuthRoutes} />
          <Route path="/forbidden" element={Forbidden} />
          <Navigate to="/" />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default MainRoutes;