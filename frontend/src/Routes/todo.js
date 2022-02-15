import { Navigate, Route, Routes, useMatch } from 'react-router-dom';
import Layout from '../Components/Shared/Layout';
import Tasks from '../Components/Tasks'
// import PrivateRouteTodo from './privateRouteTodo';

const TodoRoutes = () => {
  const { url } = useMatch();
  return (
    <Layout>
      <Routes>
        <Route path={`${url}/tasks`} element={Tasks} />
        <Navigate to={`${url}/`} element={Tasks} />
      </Routes>
    </Layout>
  );
};

export default TodoRoutes;