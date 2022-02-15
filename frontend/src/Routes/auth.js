import { Routes, Route, Navigate, useMatch } from 'react-router-dom';
import Login from '../Components/Login';
import Layout from '../Components/Shared/Layout';

const AuthRoutes = () => {
  const { url } = useMatch();
  return (
    <Layout>
      <Routes>
        <Route path={`${url}/login`} element={Login} />
        <Navigate to={`${url}/login`} />
      </Routes>
    </Layout>
  );
};

export default AuthRoutes;