import { Navigate, Route, Routes, useMatch } from 'react-router-dom';
import Layout from '../Components/Shared/Layout';
import List from '../Components/List'
// import PrivateRouteTodo from './privateRouteTodo';

const TodoRoutes = () => {
  const { url } = useMatch();
  return (
    <Layout>
      <Routes>
        <Route path={`${url}/tasks`} element={List} />
        <Navigate to={`${url}/`} element={List} />
      </Routes>
    </Layout>
  );
};

export default TodoRoutes;