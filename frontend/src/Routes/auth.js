import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Login from '../Components/Login';
import Layout from '../Components/Shared/Layout';

const AuthRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route path={`${url}/login`} component={Login} />
        <Redirect to={`${url}/login`} />
      </Switch>
    </Layout>
  );
};

export default AuthRoutes;