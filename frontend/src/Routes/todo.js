import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Folders from '../Components/Folders';
import Layout from '../Components/Shared/Layout';
import Tasks from '../Components/Tasks'
// import PrivateRouteTodo from './privateRouteTodo';

const TodoRoutes = () => {
  const { url } = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route path={`${url}/tasks`} exact component={Tasks} />
        <Route path={`${url}/folders`} component={Folders} />
        <Route path={`${url}/folder/:id`} component={Tasks} />
        <Redirect to={`${url}/`} component={Tasks} />
      </Switch>
    </Layout>
  );
};

export default TodoRoutes;